/* ─── Header scroll effect ─── */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 100);
});

/* ─── Mobile hamburger menu ─── */
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav--open');
});

document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('hamburger--active');
    nav.classList.remove('nav--open');
  });
});

/* ─── Gallery lightbox ─── */
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.gallery__item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    if (img) {
      lightboxImg.src = img.src;
      lightbox.classList.add('lightbox--open');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeLightbox() {
  lightbox.classList.remove('lightbox--open');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* ─── Scroll reveal (Intersection Observer) ─── */
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => observer.observe(section));
