(function() {
    'use strict';

    var path = window.location.pathname;
    var isNested = path.indexOf('/projects/') !== -1;

    var NavManager = {
        init: function() {
            this.setActiveLink();
            this.setupMobileToggle();
            this.setupDelegatedListeners();
        },

        setActiveLink: function() {
            var currentPage = path.split('/').pop() || 'index.html';
            var hash = window.location.hash;

            document.querySelectorAll('.nav-link').forEach(function(link) {
                link.classList.remove('active');
                var href = link.getAttribute('href');
                if (!href) return;

                var normalizedHref = href.replace(/^\.\.\//, '');

                if (normalizedHref === currentPage && hash === '') {
                    link.classList.add('active');
                } else if (isNested && normalizedHref === 'projects.html') {
                    link.classList.add('active');
                } else if (href === '#about' && currentPage === 'index.html' && hash === '') {
                    link.classList.add('active');
                } else if (href === '#contact' && hash === '#contact') {
                    link.classList.add('active');
                }
            });
        },

        setupMobileToggle: function() {
            var toggle = document.getElementById('mobile-menu-toggle');
            var menu = document.getElementById('mobile-menu');
            if (!toggle || !menu) return;

            toggle.setAttribute('aria-expanded', 'false');

            toggle.addEventListener('click', function() {
                var isOpen = toggle.classList.contains('menu-open');
                if (isOpen) {
                    toggle.classList.remove('menu-open');
                    menu.classList.remove('menu-open');
                    toggle.setAttribute('aria-expanded', 'false');
                } else {
                    toggle.classList.add('menu-open');
                    menu.classList.add('menu-open');
                    toggle.setAttribute('aria-expanded', 'true');
                }
            });
        },

        closeMobileMenu: function() {
            var menu = document.getElementById('mobile-menu');
            var toggle = document.getElementById('mobile-menu-toggle');
            if (menu) menu.classList.remove('menu-open');
            if (toggle) {
                toggle.classList.remove('menu-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        },

        setupDelegatedListeners: function() {
            var self = this;
            document.addEventListener('click', function(event) {
                var anchor = event.target.closest('a[href^="#"]');
                if (anchor) {
                    event.preventDefault();
                    var target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    self.closeMobileMenu();
                    return;
                }

                var navLink = event.target.closest('#mobile-menu .nav-link');
                if (navLink) {
                    self.closeMobileMenu();
                }
            });
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
        NavManager.init();
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
