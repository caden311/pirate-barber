// Pirate Barber - Minimal JavaScript
// Mobile nav toggle + smooth scroll + nav background

(function () {
  'use strict';

  var toggle = document.querySelector('.nav__toggle');
  var menu = document.querySelector('.nav__menu');
  var navLinks = document.querySelectorAll('.nav__link');

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close mobile menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });
})();
