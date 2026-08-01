const navToggle = document.querySelector('.nav-toggle');
const navbarText = document.querySelector('#navbarText');

navToggle.addEventListener('click', () => {
  const isOpen = navbarText.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close menu after clicking a link
document.querySelectorAll('#navbarText a').forEach(link => {
  link.addEventListener('click', () => {
    navbarText.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});