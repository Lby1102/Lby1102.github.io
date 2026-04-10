/**
 * Component: Hero
 * Renders the top header section from profile data.
 * @param {Object} profile - full profile.json object
 * @returns {string} HTML string
 */
export function renderHero(profile) {
  const { name, initials, title, studentId, contact } = profile;

  const links = [];
  if (contact.email)    links.push(`<a href="mailto:${contact.email}" class="contact-link">${contact.email}</a>`);
  if (contact.github)   links.push(`<a href="${contact.github}" class="contact-link" target="_blank" rel="noopener">GitHub</a>`);
  if (contact.linkedin) links.push(`<a href="${contact.linkedin}" class="contact-link" target="_blank" rel="noopener">LinkedIn</a>`);
  if (contact.phone)    links.push(`<a href="tel:${contact.phone}" class="contact-link">${contact.phone}</a>`);

  const contactHTML = links.join('<span class="sep">·</span>');

  return `
    <div class="container">
      <div class="hero-content">
        <div class="avatar">${initials}</div>
        <div class="hero-text">
          <h1>${name}</h1>
          <p class="hero-title">${title}</p>
          <p class="hero-student-id">学号：${studentId}</p>
          <div class="contact-row">${contactHTML}</div>
        </div>
      </div>
    </div>
  `;
}
