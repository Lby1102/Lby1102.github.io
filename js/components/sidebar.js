/**
 * Component: Sidebar (left column)
 * Renders: Education, Skills, Languages
 * @param {Object} profile - full profile.json object
 * @returns {string} HTML string
 */
export function renderSidebar(profile) {
  return `
    <aside class="sidebar">
      ${renderEducation(profile.education)}
      ${renderSkills(profile.skills)}
      ${renderLanguages(profile.languages)}
    </aside>
  `;
}

function renderEducation(items) {
  const entries = items.map(edu => `
    <div class="entry">
      <div class="entry-header">
        <span class="entry-title">${edu.school}</span>
        <span class="entry-date">${edu.start} — ${edu.end}</span>
      </div>
      <p class="entry-sub">${edu.department} · ${edu.degree}</p>
    </div>
  `).join('');

  return `
    <section class="card" id="education">
      <h2 class="section-title">教育经历</h2>
      ${entries}
    </section>
  `;
}

function renderSkills(items) {
  const rows = items.map(skill => `
    <li class="skill-item">
      <span class="skill-name">${skill.name}</span>
      <div class="skill-bar">
        <div class="skill-fill" style="width:${skill.level}%"></div>
      </div>
    </li>
  `).join('');

  return `
    <section class="card" id="skills">
      <h2 class="section-title">技能</h2>
      <ul class="skill-list">${rows}</ul>
    </section>
  `;
}

function renderLanguages(items) {
  const rows = items.map(lang => `
    <li>${lang.name}（${lang.proficiency}）</li>
  `).join('');

  return `
    <section class="card" id="languages">
      <h2 class="section-title">语言</h2>
      <ul class="tag-list">${rows}</ul>
    </section>
  `;
}
