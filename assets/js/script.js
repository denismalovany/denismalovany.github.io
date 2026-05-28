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
          <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-md group-hover:opacity-90 transition-opacity">
          <div class="mt-4">
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

// Handle contact form submission
function handleContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const captcha = document.getElementById('captcha').value.trim();
    
    // Validate CAPTCHA (2 + 3 = 5)
    if (captcha !== '5') {
      alert('Please answer the CAPTCHA correctly (2 + 3 = 5)');
      return;
    }
    
    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Prepare email data
    const emailSubject = subject || 'New Contact Form Submission';
    const emailBody = `
Name: ${name}
Email: ${email}
Subject: ${emailSubject}
Message: ${message}
    
---
This message was sent from your portfolio website contact form.
    `.trim();
    
    // Create mailto link
    const mailtoLink = `mailto:alex@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    form.reset();
  });
}

// Set active navigation link and load projects on page load
document.addEventListener('DOMContentLoaded', function() {
  setActiveNavLink();
  handleContactForm();
  // Check if we are on the projects page (all projects) or home page (limited)
  const isProjectsPage = window.location.pathname.endsWith('projects.html') || window.location.pathname === '/projects.html';
  if (isProjectsPage) {
    loadProjects(); // Show all projects
  } else {
    loadProjects(3); // Show only 3 projects on home page
  }
});