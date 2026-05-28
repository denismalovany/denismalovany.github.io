// Fetch projects data and populate the grid
async function loadProjects() {
  try {
    const response = await fetch('data/projects.json');
    const projects = await response.json();
    const projectsGrid = document.getElementById('projects-grid');

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
  } catch (error) {
    console.error('Error loading projects:', error);
  }
}

// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
btn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
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
    if (menu) menu.classList.add('hidden');
  });
});

// Load projects on page load
loadProjects();