/**
 * app.js — Orchestrator
 * 1. Fetches data/profile.json
 * 2. Calls each component renderer
 * 3. Mounts HTML into DOM slots defined in index.html
 */

import { renderHero    } from './components/hero.js';
import { renderSidebar } from './components/sidebar.js';
import { renderContent } from './components/content.js';

async function init() {
  const res     = await fetch('./data/profile.json');
  const profile = await res.json();

  document.title = `${profile.name} - 个人简历`;

  document.getElementById('hero-root').innerHTML  = renderHero(profile);
  document.getElementById('main-root').innerHTML  = renderSidebar(profile) + renderContent(profile);
  document.getElementById('footer-root').innerHTML =
    `<div class="container"><p>© 2025 ${profile.name} · 学号 ${profile.studentId}</p></div>`;
}

init();
