/**
 * Interactive module — scroll animations, particle hero, micro-interactions
 */
(function () {
  'use strict';

  if (typeof window === 'undefined') return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  var isMobile = window.innerWidth < 1024;

  // ─── Scroll-Driven Reveals ────────────────────────────
  function initScrollReveals() {
    if (reducedMotion) {
      document.querySelectorAll('.reveal').forEach(function(el) {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px) scale(0.98)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.25,0.1,0.25,1), transform 0.6s cubic-bezier(0.25,0.1,0.25,1)';
      observer.observe(el);
    });

    var staggerObserver = new IntersectionObserver(function(entries) {
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

    document.querySelectorAll('.reveal-container').forEach(function(el) {
      el.querySelectorAll('.reveal-stagger').forEach(function(item) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(24px)';
        item.style.transition = 'opacity 0.5s cubic-bezier(0.25,0.1,0.25,1), transform 0.5s cubic-bezier(0.25,0.1,0.25,1)';
      });
      staggerObserver.observe(el);
    });
  }

  // ─── Hero Particles ──────────────────────────────────
  function initParticles() {
    var hero = document.querySelector('.hero-section--grid');
    if (!hero || reducedMotion || isMobile) return;
    if (document.getElementById('particle-canvas')) return;

    var canvas = document.createElement('canvas');
    canvas.id = 'particle-canvas';
    canvas.style.cssText = 'position:absolute;inset:0;z-index:0;pointer-events:none;';
    hero.insertBefore(canvas, hero.firstChild);

    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var particles = [];
    var animId;
    var isVisible = true;

    function resize() {
      var rect = hero.getBoundingClientRect();
      var dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      var rect = hero.getBoundingClientRect();
      var count = Math.max(15, Math.floor((rect.width * rect.height) / 25000));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.25 + 0.05,
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    function draw() {
      if (!ctx || !hero) return;
      if (!isVisible) { animId = requestAnimationFrame(draw); return; }
      var rect = hero.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      var color = '155, 150, 168';

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        var alpha = p.alpha + Math.sin(p.pulse) * 0.05;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + color + ', ' + Math.max(0, alpha) + ')';
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    var observer = new IntersectionObserver(function(entries) {
      isVisible = entries[0].isIntersecting;
    }, { threshold: 0 });
    observer.observe(hero);

    var resizePending = false;
    window.addEventListener('resize', function() {
      if (!resizePending) {
        resizePending = true;
        requestAnimationFrame(function() { resize(); createParticles(); resizePending = false; });
      }
    });
  }

  // ─── Ripple Effect ───────────────────────────────────
  var rippleInitialized = false;
  function initRipple() {
    if (reducedMotion || rippleInitialized) return;
    rippleInitialized = true;
    document.addEventListener('click', function(e) {
      var btn = e.target.closest('.btn-primary, .btn-outline');
      if (!btn) return;

      var ripple = document.createElement('span');
      var rect = btn.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height);
      var x = e.clientX - rect.left - size / 2;
      var y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = 'position:absolute;border-radius:50%;width:' + size + 'px;height:' + size + 'px;left:' + x + 'px;top:' + y + 'px;background:rgba(255,255,255,0.3);transform:scale(0);animation:ripple 0.6s ease-out forwards;pointer-events:none;';
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', function() { ripple.remove(); });
    });

    var s = document.createElement('style');
    s.textContent = '@keyframes ripple { to { transform: scale(4); opacity: 0; } }';
    document.head.appendChild(s);
  }

  // ─── Counter Animation ───────────────────────────────
  function initCounters() {
    if (reducedMotion) return;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-counter') || '0', 10);
          var duration = 1500;
          var start = performance.now();

          function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-counter]').forEach(function(el) { observer.observe(el); });
  }

  // ─── Magnetic Hover ──────────────────────────────────
  function initMagnetic() {
    if (reducedMotion || isTouch) return;
    document.querySelectorAll('[data-magnetic]').forEach(function(el) {
      if (el._magneticInit) return;
      el._magneticInit = true;
      el.addEventListener('mousemove', function(e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = 'translate(' + (x * 0.2) + 'px, ' + (y * 0.2) + 'px)';
      });
      el.addEventListener('mouseleave', function() {
        el.style.transform = 'translate(0, 0)';
        el.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)';
        setTimeout(function() { el.style.transition = ''; }, 400);
      });
    });
  }

  // ─── Scroll-Aware Header ─────────────────────────────
  var scrollHeaderInit = false;
  function initScrollHeader() {
    var header = document.getElementById('site-header');
    if (!header || scrollHeaderInit) return;
    scrollHeaderInit = true;
    var lastScroll = 0;
    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          var currentScroll = window.scrollY;
          if (currentScroll > 80 && currentScroll > lastScroll) {
            header.classList.add('header-hidden');
          } else {
            header.classList.remove('header-hidden');
          }
          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── Back to Top ─────────────────────────────────────
  function initBackToTop() {
    if (document.getElementById('back-to-top')) return;
    var btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
    btn.style.cssText = 'position:fixed;bottom:2rem;right:2rem;z-index:900;width:44px;height:44px;border-radius:50%;border:1.5px solid var(--color-gray-200);background:var(--glass-bg);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;color:var(--color-gray-500);cursor:pointer;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity 0.3s ease,transform 0.3s ease,visibility 0s 0.3s;box-shadow:var(--shadow-md);';
    btn.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.body.appendChild(btn);

    var ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          if (window.scrollY > 400) {
            btn.style.opacity = '1';
            btn.style.visibility = 'visible';
            btn.style.transform = 'translateY(0)';
          } else {
            btn.style.opacity = '0';
            btn.style.visibility = 'hidden';
            btn.style.transform = 'translateY(10px)';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── Init All ────────────────────────────────────────
  function initAll() {
    initScrollReveals();
    initParticles();
    initRipple();
    initCounters();
    initMagnetic();
    initScrollHeader();
    initBackToTop();
  }

  initAll();
})();
