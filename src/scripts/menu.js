(function() {
  'use strict';

  var BREAKPOINT_MD = 768;

  var MobileNav = {
    init: function() {
      this.toggle = document.getElementById('mobile-menu-toggle');
      this.menu = document.getElementById('mobile-menu');
      this.backdrop = document.getElementById('mobile-menu-backdrop');

      if (!this.toggle || !this.menu) return;

      this.isOpen = false;
      this.bindEvents();
    },

    bindEvents: function() {
      var self = this;

      this.toggle.addEventListener('click', function() {
        self.toggleMenu();
      });

      if (this.backdrop) {
        this.backdrop.addEventListener('click', function() {
          self.close();
        });
      }

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && self.isOpen) {
          self.close();
          self.toggle.focus();
        }
      });

      window.addEventListener('resize', function() {
        if (window.innerWidth >= BREAKPOINT_MD && self.isOpen) {
          self.close();
        }
      });

      this.menu.addEventListener('click', function(e) {
        var link = e.target.closest('a');
        if (link && link.getAttribute('href') !== 'javascript:window.print()') {
          self.close();
        }
      });
    },

    toggleMenu: function() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },

    open: function() {
      this.isOpen = true;
      this.toggle.classList.add('menu-open');
      this.toggle.setAttribute('aria-expanded', 'true');
      this.menu.classList.add('menu-open');
      this.menu.removeAttribute('inert');
      if (this.backdrop) {
        this.backdrop.classList.add('menu-open');
        this.backdrop.setAttribute('aria-hidden', 'false');
      }
      document.body.classList.add('menu-locked');
    },

    close: function() {
      this.isOpen = false;
      this.toggle.classList.remove('menu-open');
      this.toggle.setAttribute('aria-expanded', 'false');
      this.menu.classList.remove('menu-open');
      this.menu.setAttribute('inert', '');
      if (this.backdrop) {
        this.backdrop.classList.remove('menu-open');
        this.backdrop.setAttribute('aria-hidden', 'true');
      }
      document.body.classList.remove('menu-locked');
    }
  };

  var TimelineController = {
    init: function() {
      var expandBtn = document.getElementById('expand-timeline');
      var collapseBtn = document.getElementById('collapse-timeline');
      var collapsedTimeline = document.getElementById('collapsed-timeline');

      if (!expandBtn || !collapsedTimeline) return;

      collapsedTimeline.classList.add('collapsed');

      expandBtn.addEventListener('click', function() {
        collapsedTimeline.classList.remove('collapsed');
        expandBtn.classList.add('hidden');
        if (collapseBtn) collapseBtn.classList.remove('hidden');
      });

      if (collapseBtn) {
        collapseBtn.addEventListener('click', function() {
          collapsedTimeline.classList.add('collapsed');
          collapseBtn.classList.add('hidden');
          expandBtn.classList.remove('hidden');
        });
      }
    }
  };

  function initApp() {
    MobileNav.init();
    TimelineController.init();
  }

  try {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  } catch (error) {
    console.error('Application initialization failed:', error);
  }
})();
