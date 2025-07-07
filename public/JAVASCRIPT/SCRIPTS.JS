

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtns = document.querySelectorAll('#lang-toggle');
  const spanishSection = document.getElementById('spanish-section');
  const englishSection = document.getElementById('english-section');

  let currentLang = 'es';

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentLang === 'es') {
        spanishSection.style.display = 'none';
        englishSection.style.display = 'block';
        toggleBtns.forEach(b => b.textContent = 'Spanish');
        currentLang = 'en';
      } else {
        spanishSection.style.display = 'block';
        englishSection.style.display = 'none';
        toggleBtns.forEach(b => b.textContent = 'Ingles');
        currentLang = 'es';
      }
    });
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
