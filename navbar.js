// small script for hamburger menu + footer year
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const year = document.getElementById('year');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});