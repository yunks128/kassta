// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Mobile dropdown toggle
  document.querySelectorAll('nav ul li').forEach(li => {
    if (li.querySelector('.dropdown')) {
      li.querySelector(':scope > a').addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          li.classList.toggle('dd-open');
        }
      });
    }
  });

  // Close mobile nav on link click
  document.querySelectorAll('nav .dropdown a').forEach(a => {
    a.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  // Active nav highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage) {
      a.classList.add('active');
    }
  });
});
