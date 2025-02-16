// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
  
  // Navbar scroll effect
  const nav = document.querySelector('nav');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Smooth scrolling with offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: targetPosition - navHeight,
        behavior: 'smooth'
      });
    });
  });
  
  // Skill icons rotation animation
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const icon = item.querySelector('i');
      icon.style.transform = 'rotate(360deg)';
    });
    
    item.addEventListener('mouseleave', () => {
      const icon = item.querySelector('i');
      icon.style.transform = 'rotate(0deg)';
    });
  });
  
  // Add animation to social icons
  const socialIcons = document.querySelectorAll('.social-icons a');
  socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'translateY(-3px)';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'translateY(0)';
    });
  });
  
  // Optional: Add parallax effect to header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = `${scrolled * 0.5}px`;
  });