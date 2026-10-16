// Live counts for this site's custom repository cards; static counts remain the fallback.
(() => {
  const CACHE_TTL = 30 * 60 * 1000;
  const REQUEST_TIMEOUT = 8000;
  const CACHE_PREFIX = "homepage:github-stars:v1:";
  const PAUSE_KEY = `${CACHE_PREFIX}paused-until`;

  function read(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage can be disabled or full; live updates still work in this tab.
    }
  }

  function validCount(value) {
    return Number.isSafeInteger(value) && value >= 0;
  }

  function futureTime(value) {
    return Number.isFinite(value) && value > Date.now() ? value : 0;
  }

  function render(card, state) {
    if (!validCount(state.count) || !Number.isFinite(state.updatedAt) || state.updatedAt <= 0 || state.updatedAt > Date.now()) return;
    // A newer deployed snapshot takes precedence over an old browser cache.
    if (state.updatedAt < (Date.parse(card.dataset.starsUpdatedAt) || 0)) return;
    card.querySelector("[data-star-count]").textContent = state.count.toLocaleString("en-US");
    card.title = `GitHub stars · updated ${new Date(state.updatedAt).toLocaleString()}`;
  }

  const entries = Array.from(document.querySelectorAll("[data-github-repo]")).map((card) => {
    const repo = card.dataset.githubRepo;
    const key = `${CACHE_PREFIX}${repo.toLowerCase()}`;
    const saved = read(key);
    const state = saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
    render(card, state);
    // A malformed count must not prevent a new request.
    if (!validCount(state.count) && state.count !== undefined) state.nextAttemptAt = 0;
    return { card, repo, key, state };
  });
  if (!entries.length) return;

  let pausedUntil = futureTime(read(PAUSE_KEY));
  let syncing = false;
  let timer;

  async function syncStars() {
    if (syncing) return;
    clearTimeout(timer);
    syncing = true;
    try {
      // Re-read so another tab's rate-limit response also pauses this one.
      pausedUntil = Math.max(pausedUntil, futureTime(read(PAUSE_KEY)));
      for (const { card, repo, key, state } of entries) {
        if (document.hidden || Date.now() < pausedUntil) break;
        if (!/^[\w.-]+\/[\w.-]+$/.test(repo) || Date.now() < futureTime(state.nextAttemptAt)) continue;

        // Throttle failures as well as successes, including across page reloads.
        state.nextAttemptAt = Date.now() + CACHE_TTL;
        write(key, state);
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
        try {
          const response = await fetch(`https://api.github.com/repos/${repo}`, {
            headers: { Accept: "application/vnd.github+json" },
            credentials: "omit",
            signal: controller.signal,
          });
          if (response.status === 403 || response.status === 429) {
            const retryAfter = Number(response.headers.get("retry-after")) * 1000;
            const resetAt = Number(response.headers.get("x-ratelimit-reset")) * 1000;
            pausedUntil = Math.max(Date.now() + CACHE_TTL, Date.now() + (Number.isFinite(retryAfter) ? retryAfter : 0), futureTime(resetAt));
            write(PAUSE_KEY, pausedUntil);
            break;
          }
          if (!response.ok) continue;
          const data = await response.json();
          if (!validCount(data?.stargazers_count)) continue;
          state.count = data.stargazers_count;
          state.updatedAt = Date.now();
          write(key, state);
          render(card, state);
        } catch {
          // Offline, timed-out, or invalid responses leave the last known count visible.
        } finally {
          clearTimeout(timeout);
        }
      }
    } finally {
      syncing = false;
      // Only visible pages make requests. Returning to a tab also checks for stale data.
      timer = setTimeout(syncStars, CACHE_TTL);
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) syncStars();
  });
  syncStars();
})();
