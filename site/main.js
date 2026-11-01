// Mobile navigation
const toggle = document.querySelector(".nav__toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Product screen tabs (WAI-ARIA tabs pattern)
const tabs = [...document.querySelectorAll('[role="tab"]')];
function select(tab) {
  tabs.forEach((t) => {
    const active = t === tab;
    t.setAttribute("aria-selected", String(active));
    t.tabIndex = active ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !active;
  });
  tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => select(tab));
  tab.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") select(tabs[(i + 1) % tabs.length]);
    if (e.key === "ArrowLeft") select(tabs[(i - 1 + tabs.length) % tabs.length]);
  });
});
