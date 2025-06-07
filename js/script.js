// Load tsParticles for starry background
tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: 0
  },
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 1.5,
      random: true
    },
    move: {
      enable: true,
      speed: 0.3,
      direction: "none",
      random: true,
      straight: false,
      outMode: "out"
    }
  },
  background: {
    color: "#000000"
  }
});

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  navLinks.classList.toggle('show');
});

// Contact button popup logic
const contactBtn = document.querySelector('.floating-icons .btn:nth-of-type(2)'); // 2nd .btn
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.popup .close-btn');

contactBtn.addEventListener('click', () => {
  popupForm.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  popupForm.classList.remove('show');
});

// Optional: Close when clicking outside popup content
popupForm.addEventListener('click', (e) => {
  if (e.target === popupForm) {
    popupForm.classList.remove('show');
  }
});

// Only target WhatsApp and email icons with data-contact
const icons = document.querySelectorAll('.floating-icons .icon[data-contact]');
const contactPopup = document.getElementById('contactPopup');
const contactInfo = document.getElementById('contactInfo');
// const closeBtn = document.querySelector('.contact-popup .close-btn');

icons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.preventDefault();
    const info = icon.getAttribute('data-contact');
    contactInfo.textContent = info;
    contactPopup.classList.add('show');
  });
});

// Close popup
closeBtn.addEventListener('click', () => {
  contactPopup.classList.remove('show');
});

// Optional: Close when clicking outside popup content
contactPopup.addEventListener('click', (e) => {
  if (e.target === contactPopup) {
    contactPopup.classList.remove('show');
  }
});

const resumeBtn = document.querySelector('.floating-icons .btn:nth-of-type(1)'); // 1st .btn
resumeBtn.addEventListener('click', () => {
  window.open('resume.pdf', '_blank');
});
