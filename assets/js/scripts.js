document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const menuToggle = document.getElementById('menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  
  // Close menu when clicking overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      menuToggle.checked = false;
    });
  }
  // Close menu when clicking outside
document.querySelector('.burger-menu .menu-overlay').addEventListener('click', function() {
  document.getElementById('menu-toggle').checked = false;
});

// Close menu when clicking links
document.querySelectorAll('.burger-menu .menu a').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('menu-toggle').checked = false;
  });
});
  // Close menu when clicking menu items
  // This is necessary for mobile devices where the menu doesn't close automatically
  const menuLinks = document.querySelectorAll('.menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.checked = false;
    });
  });
  
  // Mobile-friendly menu item interactions
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    // For touch devices
    item.addEventListener('touchstart', function() {
      this.classList.add('active');
    });
    
    item.addEventListener('touchend', function() {
      this.classList.remove('active');
    });
    
    // For hover devices
    item.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });
    
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
// Add this to your existing scripts
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to branches
  document.querySelectorAll('.menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Close menu when clicking branch links
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('menu-toggle').checked = false;
    });
  });
});