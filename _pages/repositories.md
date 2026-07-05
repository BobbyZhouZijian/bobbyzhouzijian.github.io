---
layout: page
permalink: /repositories/
title: repositories
description: my open-source work on GitHub.
nav: true
nav_order: 3
---

<style>
  .repo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }
  .repo-card {
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    border-radius: 8px;
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.2s ease;
  }
  .repo-card:hover {
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  }
  .repo-card-name {
    font-weight: 600;
    font-size: 1rem;
    word-break: break-word;
    margin-bottom: 0.5rem;
  }
  .repo-card-desc {
    color: var(--global-text-color);
    font-size: 0.875rem;
    line-height: 1.5;
    flex-grow: 1;
    margin-bottom: 0.75rem;
  }
  .repo-card-meta {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
  }
  .repo-lang-dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3572a5;
    margin-right: 0.3rem;
    vertical-align: baseline;
  }
</style>

<div class="repo-grid">
  {% for repo in site.data.repositories.github_repos %}
  <div class="repo-card">
    <div class="repo-card-name">
      <a href="{{ repo.url }}" target="_blank" rel="noopener noreferrer">{{ repo.name }}</a>
    </div>
    <div class="repo-card-desc">{{ repo.description }}</div>
    <div class="repo-card-meta">
      <span><span class="repo-lang-dot"></span>{{ repo.language }}</span>
      <span>&#9733; {{ repo.stars }}</span>
    </div>
  </div>
  {% endfor %}
</div>

<p style="margin-top: 1.5rem">
  More on my <a href="https://github.com/bobbyzhouzijian" target="_blank" rel="noopener noreferrer">GitHub profile</a>.
</p>
