// Простий скрипт для анімації переходів між сторінками

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.main-content');
  
  sections.forEach(section => {
    section.style.opacity = '0'; // Сховати всі секції спочатку
  });

  // Показати першу секцію
  sections[0].style.opacity = '1';

  // Анімація переходу між секціями
  function showSection(index) {
    sections.forEach(section => {
      section.style.opacity = '0';
    });
    sections[index].style.opacity = '1';
  }

  // Обробник кліків по посиланнях навігації
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      showSection(index);
    });
  });
});
