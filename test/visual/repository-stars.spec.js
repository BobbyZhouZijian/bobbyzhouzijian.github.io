const { test, expect } = require("@playwright/test");

const TARGET = "/al-folio/repositories/";
const NOW = new Date("2030-01-01T12:00:00Z");
const TTL = 30 * 60 * 1000;
const PREFIX = "homepage:github-stars:v1:";
const counts = (page) => page.locator("[data-github-repo] [data-star-count]");

// Keep local theme assets available, but never depend on third-party services.
async function mockNetwork(page, respond) {
  const requests = [];
  await page.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.hostname === "api.github.com") {
      requests.push(url.pathname);
      return respond(route, requests.length - 1);
    }
    if (["127.0.0.1", "localhost"].includes(url.hostname)) return route.continue();
    return route.abort();
  });
  return requests;
}

const reply = (route, count) => route.fulfill({ json: { stargazers_count: count } });

async function freezeTime(page) {
  await page.clock.install({ time: NOW });
  await page.clock.pauseAt(NOW);
}

test("live counts include zero, persist, and avoid requests on a fresh-cache reload", async ({ page }) => {
  await freezeTime(page);
  const requests = await mockNetwork(page, (route, index) => reply(route, index === 0 ? 0 : 12345));
  await page.goto(TARGET, { waitUntil: "networkidle" });
  const total = await counts(page).count();
  expect(total).toBeGreaterThan(1);
  await expect(counts(page).first()).toHaveText("0");
  await expect(counts(page).last()).toHaveText("12,345");
  expect(requests).toHaveLength(total);
  const displayed = await counts(page).allTextContents();

  await page.reload({ waitUntil: "networkidle" });
  expect(await counts(page).allTextContents()).toEqual(displayed);
  expect(requests).toHaveLength(total);
});

test("an open page refreshes automatically after thirty minutes", async ({ page }) => {
  await freezeTime(page);
  let count = 17;
  const requests = await mockNetwork(page, (route) => reply(route, count));
  await page.goto(TARGET, { waitUntil: "networkidle" });
  const total = await counts(page).count();
  await expect(counts(page).last()).toHaveText("17");
  expect(requests).toHaveLength(total);
  count = 23;

  await page.clock.fastForward(TTL - 1);
  expect(requests).toHaveLength(total);
  await page.clock.fastForward(2);
  await expect(counts(page).last()).toHaveText("23");
  expect(requests).toHaveLength(total * 2);
});

test("network errors and malformed responses preserve cached or static counts while other cards update", async ({ page }) => {
  await freezeTime(page);
  await page.addInitScript(
    ({ prefix, now, ttl }) => {
      localStorage.setItem(`${prefix}human-agent-society/reef`, JSON.stringify({ count: 9999, updatedAt: now - ttl - 1, nextAttemptAt: now - 1 }));
    },
    { prefix: PREFIX, now: NOW.getTime(), ttl: TTL }
  );
  let initial;
  const requests = await mockNetwork(page, async (route, index) => {
    if (index === 0) {
      initial = await counts(page).allTextContents();
      return route.abort("internetdisconnected");
    }
    if (index === 1) return route.fulfill({ status: 404, json: { message: "Not Found" } });
    if (index === 2) return route.fulfill({ contentType: "application/json", body: "invalid JSON" });
    if (index === 3) return reply(route, -1);
    if (index === 4) return reply(route, "100");
    if (index === 5) return route.fulfill({ json: null });
    return reply(route, 88);
  });
  await page.goto(TARGET, { waitUntil: "networkidle" });
  await expect(counts(page).first()).toHaveText("9,999");
  await expect(counts(page).last()).toHaveText("88");
  expect((await counts(page).allTextContents()).slice(0, 6)).toEqual(initial.slice(0, 6));
  expect(requests).toHaveLength(await counts(page).count());
});

for (const status of [403, 429]) {
  test(`${status} pauses the request queue and remains paused after reload`, async ({ page }) => {
    await freezeTime(page);
    let initial;
    // GitHub documents exposing x-ratelimit-reset to browsers, but not retry-after.
    // https://docs.github.com/en/rest/using-the-rest-api/using-cors-and-jsonp-to-make-cross-origin-requests
    const headers = {
      "access-control-allow-origin": "*",
      "access-control-expose-headers": "x-ratelimit-remaining, x-ratelimit-reset",
      ...(status === 403 ? { "x-ratelimit-remaining": "0", "x-ratelimit-reset": String(NOW.getTime() / 1000 + 3600) } : { "retry-after": "3600" }),
    };
    const requests = await mockNetwork(page, async (route) => {
      initial ??= await counts(page).allTextContents();
      return route.fulfill({ status, headers, json: { message: "API rate limit exceeded" } });
    });
    await page.goto(TARGET, { waitUntil: "networkidle" });
    expect(requests).toHaveLength(1);
    expect(await counts(page).allTextContents()).toEqual(initial);

    // The exposed reset survives beyond the cache TTL; an unreadable retry-after
    // still preserves the implementation's thirty-minute fallback across reloads.
    await page.clock.fastForward(status === 403 ? TTL + 1 : TTL - 1);
    await page.reload({ waitUntil: "networkidle" });
    expect(requests).toHaveLength(1);
    expect(await counts(page).allTextContents()).toEqual(initial);
  });
}

test("blocked localStorage does not prevent live updates", async ({ page }) => {
  await freezeTime(page);
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new DOMException("Storage disabled", "SecurityError");
      },
    });
  });
  const requests = await mockNetwork(page, (route) => reply(route, 1234));
  await page.goto(TARGET, { waitUntil: "networkidle" });
  await expect(counts(page).first()).toHaveText("1,234");
  await expect(counts(page).last()).toHaveText("1,234");
  expect(requests).toHaveLength(await counts(page).count());
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });

  test("repository cards retain their static star snapshots", async ({ page }) => {
    const requests = await mockNetwork(page, (route) => reply(route, 999999));
    await page.goto(TARGET, { waitUntil: "networkidle" });
    expect(await counts(page).count()).toBeGreaterThan(1);
    for (const count of await counts(page).allTextContents()) expect(count.trim()).toMatch(/^\d+$/);
    await expect(page.locator("[data-github-repo]").first()).toHaveAttribute("title", /snapshot/);
    expect(requests).toHaveLength(0);
  });
});
