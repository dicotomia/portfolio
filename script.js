// Initialize Lucide icons
lucide.createIcons();

// Elements
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

// 1. Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// 2. Mobile Menu Toggle
let isMenuOpen = false;
menuToggle.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  
  if (isMenuOpen) {
    mobileMenu.classList.remove('translate-x-full');
    menuToggle.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
  } else {
    mobileMenu.classList.add('translate-x-full');
    menuToggle.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
  }
  lucide.createIcons(); // Redraw Lucide icon
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    menuToggle.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
    isMenuOpen = false;
    lucide.createIcons();
  });
});

// 3. Theme Toggle (Dark/Light mode)
const currentTheme = localStorage.getItem('theme');

// Check stored theme or system preference
if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 4. Contact Form Handler (Mock submit)
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Show sending state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando... <i data-lucide="loader" class="w-4 h-4 animate-spin"></i>';
    lucide.createIcons();

    // Mock network request delay
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
      lucide.createIcons();

      // Show success feedback
      formFeedback.classList.remove('hidden', 'text-red-500', 'text-green-500');
      formFeedback.classList.add('text-green-500');
      formFeedback.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.`;
      
      // Clear form
      contactForm.reset();

      // Hide feedback after 5 seconds
      setTimeout(() => {
        formFeedback.classList.add('hidden');
      }, 5000);
    }, 1500);
  });
}

// 5. Intersection Observer for Fade-in animations on scroll
const observeElements = () => {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        // If element has delay classes, we handle it or just rely on CSS
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Targets to animate
  const sections = document.querySelectorAll('section > div');
  const projectCards = document.querySelectorAll('#projects .grid > div');
  const timelineItems = document.querySelectorAll('#experience .experience-card');
  const eduCards = document.querySelectorAll('#education .space-y-6 > div');

  sections.forEach(el => observer.observe(el));
  projectCards.forEach(el => observer.observe(el));
  timelineItems.forEach(el => observer.observe(el));
  eduCards.forEach(el => observer.observe(el));
};

// Start animations observer once DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  observeElements();
});
