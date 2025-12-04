// js/app.js - robust initialization
document.addEventListener("DOMContentLoaded", () => {
  const $id = (id) => document.getElementById(id);

  // Defensive helper
  const safeSetText = (id, text) => {
    const el = $id(id);
    if (el) el.textContent = text;
    else console.warn(`[render] missing element #${id}`);
  };

  // Header / footer
  safeSetText("nav-name", `${siteConfig.name} • DevOps Engineer`);
  safeSetText("footer-name", siteConfig.name);
  safeSetText("year", String(new Date().getFullYear()));

  // Hero
  if ($id("hero-title")) $id("hero-title").textContent = siteConfig.hero.title || "";
  if ($id("hero-subtitle")) $id("hero-subtitle").textContent = siteConfig.hero.subtitle || "";
  if ($id("hero-text")) $id("hero-text").textContent = siteConfig.hero.text || "";
  if ($id("resume-btn") && siteConfig.resume) $id("resume-btn").href = siteConfig.resume;

  // Hero tags
  const heroTags = $id("hero-tags");
  if (heroTags && Array.isArray(siteConfig.hero.tags)) {
    heroTags.innerHTML = ""; // reset
    siteConfig.hero.tags.forEach(t => {
      const span = document.createElement("span");
      span.className = "pill";
      span.textContent = t;
      heroTags.appendChild(span);
    });
  }

  // Skills
  const skillsGrid = $id("skills-grid");
  if (skillsGrid && Array.isArray(siteConfig.skills)) {
    skillsGrid.innerHTML = "";
    siteConfig.skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${skill.category}</h3>
        <div class="chip-row">
          ${skill.items.map(i => `<span class="chip">${i}</span>`).join("")}
        </div>
      `;
      skillsGrid.appendChild(card);
    });
  }

  // Projects
  const projectsGrid = $id("projects-grid");
  if (projectsGrid && Array.isArray(siteConfig.projects)) {
    projectsGrid.innerHTML = "";
    siteConfig.projects.forEach(proj => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${proj.name}</h3>
        <p>${proj.description}</p>
        <div class="chip-row">${proj.stack.map(s => `<span class="chip">${s}</span>`).join("")}</div>
        ${proj.github ? `<a href="${proj.github}" target="_blank">GitHub →</a>` : ""}
      `;
      projectsGrid.appendChild(card);
    });
  }

  // Contact
  const contactBox = $id("contact-box");
  if (contactBox && siteConfig.contact) {
    contactBox.innerHTML = `
      <p>Email: <a href="mailto:${siteConfig.contact.email}">${siteConfig.contact.email}</a></p>
      <p>GitHub: <a href="${siteConfig.contact.github}" target="_blank">${siteConfig.contact.github}</a></p>
      <p>LinkedIn: <a href="${siteConfig.contact.linkedin}" target="_blank">${siteConfig.contact.linkedin}</a></p>
    `;
  }

  // Smooth scroll - attach after the DOM exists
  document.querySelectorAll("[data-target]").forEach(el => {
    el.addEventListener('click', () => {
      const id = el.dataset.target;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
