function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* Toggle Dark Mode */
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

const revealSections = document.querySelectorAll(".reveal-on-scroll");

const revealOptions = {
  threshold: 0.1
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, revealOptions);

revealSections.forEach(section => {
  revealObserver.observe(section);
});
