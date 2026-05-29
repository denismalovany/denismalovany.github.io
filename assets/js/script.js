// Fetch projects data and populate the grid
function loadProjects(limit) {
  try {
    // Use the global projectsData variable
    const projects = window.projectsData || [];
    const projectsToShow = limit ? projects.slice(0, limit) : projects;
    console.log('Projects data:', projects);
    console.log('Projects to show:', projectsToShow);
    const projectsGrid = document.getElementById('projects-grid');

    if (!projectsGrid) {
      console.error('Projects grid element not found!');
      return;
    }

    projectsGrid.innerHTML = projectsToShow.map(project => `
      <a href="projects/project-${project.id}.html" class="block">
        <div class="group">
          <img src="${project.image}" alt="${project.title}" class="w-full">
          <div class="group-content">
            <h3 class="text-xl font-serif mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-2">${project.description}</p>
            <hr class="divider">
            <p class="caption">${project.caption}</p>
          </div>
        </div>
      </a>
    `).join('');
    
    console.log('Projects grid updated with', projectsToShow.length, 'projects');
  } catch (error) {
    console.error('Error loading projects:', error);
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = `<p class="text-red-500 col-span-2">Failed to load projects. Please check the console for details.</p>`;
    }
  }
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const path = window.location.pathname;
  const hash = window.location.hash;

  // Select all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');

    // Get the href attribute
    const href = link.getAttribute('href');

    // Check for exact matches or section links
    if (href === '#about' && (hash === '#about' || (path.endsWith('index.html') && hash === ''))) {
      link.classList.add('active');
    } else if (href === '#contact' && hash === '#contact') {
      link.classList.add('active');
    } else if (href === 'projects.html' && path.endsWith('projects.html')) {
      link.classList.add('active');
    } else if (href === 'index.html' && path.endsWith('index.html') && hash === '') {
      link.classList.add('active');
    } else if (href === 'about.html' && path.endsWith('about.html')) {
      link.classList.add('active');
    } else if (href === 'contact.html' && path.endsWith('contact.html')) {
      link.classList.add('active');
    } else if (href === '../index.html#about' && (path.includes('projects/') && hash === '')) {
      link.classList.add('active');
    } else if (href === '../projects.html' && path.includes('projects/')) {
      link.classList.add('active');
    } else if (href === '../index.html#contact' && path.includes('projects/') && hash === '') {
      link.classList.add('active');
    }
  });
}

// Set active navigation link and load projects on page load
document.addEventListener('DOMContentLoaded', function() {
  setActiveNavLink();
  
  // Mobile menu toggle - moved inside DOMContentLoaded
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.setAttribute('aria-expanded', 'false');
    
    btn.addEventListener('click', () => {
      const isOpen = btn.classList.contains('menu-open');
      if (isOpen) {
        btn.classList.remove('menu-open');
        menu.classList.remove('menu-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        btn.classList.add('menu-open');
        menu.classList.add('menu-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  }
  
  // Close mobile menu when clicking nav links
  document.querySelectorAll('#mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (menu) {
        menu.classList.remove('menu-open');
      }
      if (btn) {
        btn.classList.remove('menu-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      // Hide mobile menu after click
      if (menu) {
        menu.classList.remove('menu-open');
      }
      if (btn) {
        btn.classList.remove('menu-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // Check if we are on the projects page (all projects) or home page (limited)
  const isProjectsPage = window.location.pathname.endsWith('projects.html') || window.location.pathname === '/projects.html';
  if (isProjectsPage) {
    loadProjects(); // Show all projects
  } else {
    loadProjects(3); // Show only 3 projects on home page
  }
});