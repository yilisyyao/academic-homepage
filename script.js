const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector("[data-menu]");
const navLinks = [...document.querySelectorAll(".nav-links a")];
const header = document.querySelector("[data-header]");
const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

const sections = navLinks
  .map((link) => {
    const id = link.getAttribute("href");
    return id && id.startsWith("#") ? document.querySelector(id) : null;
  })
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
      });
    },
    {
      rootMargin: `-${header?.offsetHeight || 76}px 0px -52% 0px`,
      threshold: [0.18, 0.32, 0.48],
    },
  );

  sections.forEach((section) => observer.observe(section));
}
