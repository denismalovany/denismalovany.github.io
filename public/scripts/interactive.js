/**
 * Interactive module — scroll animations, scroll header, back to top
 */
(function () {
  'use strict';

  if (typeof window === 'undefined') return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var revealObserver = null;
  var staggerObserver = null;

  // ─── Scroll-Driven Reveals ────────────────────────────
  var PAGE_SCOPE = 'main';

  function initScrollReveals() {
    var page = document.querySelector(PAGE_SCOPE);
    if (!page) return;

    if (reducedMotion) {
      page.querySelectorAll('.reveal').forEach(function(el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      page.querySelectorAll('.reveal-stagger').forEach(function(el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    page.querySelectorAll('.reveal').forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px) scale(0.98)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)';
      revealObserver.observe(el);
    });

    staggerObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var container = entry.target;
          var items = container.querySelectorAll('.reveal-stagger');
          items.forEach(function(item, i) {
            setTimeout(function() {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, i * 80);
          });
          staggerObserver.unobserve(container);
        }
      });
    }, { threshold: 0.1 });

    page.querySelectorAll('.reveal-container').forEach(function(el) {
      el.querySelectorAll('.reveal-stagger').forEach(function(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
        item.style.transition = 'opacity 0.5s cubic-bezier(0.25,0.1,0.25,1), transform 0.5s cubic-bezier(0.25,0.1,0.25,1)';
      });
      staggerObserver.observe(el);
    });
  }

  function destroyScrollReveals() {
    if (revealObserver) { revealObserver.disconnect(); revealObserver = null; }
    if (staggerObserver) { staggerObserver.disconnect(); staggerObserver = null; }
  }

  // ─── Scroll-Aware Header ─────────────────────────────
  var headerScrollHandler = null;
  var headerLastScroll = 0;

  function initScrollHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;

    headerLastScroll = window.scrollY;
    header.classList.remove('header-hidden');

    headerScrollHandler = function() {
      var currentScroll = window.scrollY;
      if (currentScroll > 80 && currentScroll > headerLastScroll) {
        header.classList.add('header-hidden');
      } else {
        header.classList.remove('header-hidden');
      }
      headerLastScroll = currentScroll;
    };

    window.addEventListener('scroll', headerScrollHandler, { passive: true });
  }

  function destroyScrollHeader() {
    if (headerScrollHandler) {
      window.removeEventListener('scroll', headerScrollHandler);
      headerScrollHandler = null;
    }
    var header = document.getElementById('site-header');
    if (header) {
      header.classList.remove('header-hidden');
    }
  }

  // ─── Back to Top ─────────────────────────────────────
  var backToTopHandler = null;

  function initBackToTop() {
    var existing = document.getElementById('back-to-top');
    if (existing) { existing.remove(); }

    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
    btn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;z-index:900;width:44px;height:44px;border-radius:50%;border:1.5px solid var(--color-gray-200);background:var(--glass-bg);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;color:var(--color-gray-500);cursor:pointer;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity 0.3s ease,transform 0.3s ease,visibility 0s 0.3s;box-shadow:var(--shadow-md);';
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.body.appendChild(btn);

    backToTopHandler = function() {
      if (window.scrollY > 400) {
        btn.style.opacity = '1';
        btn.style.visibility = 'visible';
        btn.style.transform = 'translateY(0)';
      } else {
        btn.style.opacity = '0';
        btn.style.visibility = 'hidden';
        btn.style.transform = 'translateY(10px)';
      }
    };
    window.addEventListener('scroll', backToTopHandler, { passive: true });
  }

  function destroyBackToTop() {
    if (backToTopHandler) {
      window.removeEventListener('scroll', backToTopHandler);
      backToTopHandler = null;
    }
    var btn = document.getElementById('back-to-top');
    if (btn) { btn.remove(); }
  }

  // ─── Lifecycle ────────────────────────────────────────
  function initContent() {
    initScrollReveals();
    initScrollHeader();
    initBackToTop();
  }

  function destroyContent() {
    destroyScrollReveals();
    destroyScrollHeader();
    destroyBackToTop();
  }

  initContent();

  document.addEventListener('astro:before-swap', destroyContent);
  document.addEventListener('astro:after-swap', initContent);
})();
