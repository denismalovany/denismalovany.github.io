// Fetch projects data and populate the grid
function loadProjects() {
  try {
    // Use the global projectsData variable
    const projects = window.projectsData || [];
    console.log('Projects data:', projects);
    const projectsGrid = document.getElementById('projects-grid');

    if (!projectsGrid) {
      console.error('Projects grid element not found!');
      return;
    }

    projectsGrid.innerHTML = projects.map(project => `
      <div class="group">
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-md group-hover:opacity-90 transition-opacity">
        <div class="mt-4">
          <h3 class="text-xl font-serif mb-2">${project.title}</h3>
          <p class="text-gray-600 mb-2">${project.description}</p>
          <hr class="divider">
          <p class="caption">${project.caption}</p>
        </div>
      </div>
    `).join('');
    console.log('Projects grid updated with', projects.length, 'projects');
  } catch (error) {
    console.error('Error loading projects:', error);
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
      projectsGrid.innerHTML = `<p class="text-red-500 col-span-2">Failed to load projects. Please check the console for details.</p>`;
    }
  }
}

// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

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
    if (menu) menu.classList.add('hidden');
  });
});

// Load projects on page load
document.addEventListener('DOMContentLoaded', loadProjects);