import "../css/index.css";

// ===== SHOW MENU =====
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("header-menu", "header-toggle");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;

function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 2
    ? header.classList.add("sticky-action")
    : header.classList.remove("sticky-action");
}
window.addEventListener("scroll", stickyHeader);

// ===== SCROLLUP SECTION =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 250
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);

// ===== DARK MODE =====
var themeToggleDarkIcon = document.getElementById("themeToggleDarkIcon");
var themeToggleLightIcon = document.getElementById("themeToggleLightIcon");

// change the icons inside the button based on previous setting
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleDarkIcon.classList.remove("hidden");
} else {
  themeToggleLightIcon.classList.remove("hidden");
}

// theme toggle button
var themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  // toggle icons inside the button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if setting via localStorage previously
  if (localStorage.theme === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
});
