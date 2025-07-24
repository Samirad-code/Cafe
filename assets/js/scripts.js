document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const menuToggle = document.getElementById('menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const menuLinks = document.querySelectorAll('.menu a');
  
  // Single overlay click handler
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      menuToggle.checked = false;
    });
  }

  // Single link click handler
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.checked = false;
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile-friendly menu item interactions
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('touchstart', function() {
      this.classList.add('active');
    });
    
    item.addEventListener('touchend', function() {
      this.classList.remove('active');
    });
    
    item.addEventListener('mouseenter', function() {
      this.classList.add('active');
    });
    
    item.addEventListener('mouseleave', function() {
      this.classList.remove('active');
    });
  });
});