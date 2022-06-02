const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const navItems = [nav1, nav2, nav3, nav4];

// Control navigation animation
function navAnimation(direction1, direction2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
}

function toggleNav() {
  // Toggle menu bars Open and Close
  menuBars.classList.toggle("change");
  // Toggle menu Active / Inactive
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate in overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate in - Nav items
    navAnimation("out", "in");
  } else {
    // Animate out overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate out - Nav items
    navAnimation("in", "out");
  }
}

// Event listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
