/**
 * Component: Sidebar (left column)
 * Renders: Skills (学习经历)
 * @param {Object} profile - full profile.json object
 * @returns {string} HTML string
 */
export function renderSidebar(profile) {
  return `
    <aside class="sidebar">
      ${renderSkills(profile.skills)}
    </aside>
  `;
}

function renderSkills(items) {
  const rows = items.map(item => `<li>${item}</li>`).join('');

  return `
    <section class="card" id="skills">
      <h2 class="section-title">学习经历</h2>
      <ul class="tag-list">${rows}</ul>
    </section>
  `;
}
