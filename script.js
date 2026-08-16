/* =========================================================================
   CYRIL PIOT — PORTFOLIO SCRIPT
   -------------------------------------------------------------------------
   Vanilla JS, sans dépendances. Trois responsabilités :
   1. Menu mobile (ouverture / fermeture)
   2. Apparition progressive des sections au scroll (IntersectionObserver)
   3. Style de la nav au scroll + effet de parallaxe léger sur le hero
   ========================================================================= */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* ---------- 1. Menu mobile ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Ferme le menu automatiquement au clic sur un lien (mobile).
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. Header : style au scroll ---------- */
  var header = document.getElementById('site-header');

  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });

  /* ---------- 3. Apparition progressive au scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Pas de support IntersectionObserver ou préférence "mouvement réduit" :
    // on affiche directement tout le contenu.
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- 4. Effet de parallaxe léger sur le hero (curseur) ---------- */
  var mesh = document.querySelector('.hero-mesh');

  if (mesh && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    var ticking = false;
    var targetX = 0;
    var targetY = 0;

    window.addEventListener('mousemove', function (e) {
      // Décalage réduit (quelques pixels) pour rester discret.
      targetX = (e.clientX / window.innerWidth - 0.5) * 20;
      targetY = (e.clientY / window.innerHeight - 0.5) * 20;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          mesh.style.transform = 'translate(' + targetX + 'px, ' + targetY + 'px)';
          ticking = false;
        });
        ticking = true;
      }
    });
  }
})();
