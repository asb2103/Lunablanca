document.addEventListener('DOMContentLoaded', () => {
  // Inicialización de AOS para animaciones en scroll
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out-back'
  });

  // Configuración de Particles.js
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#8B5CF6'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        out_mode: 'out'
      }
    },
    interactivity: {
      events: {
        onhover: { enable: false },
        onclick: { enable: false }
      }
    }
  });

  // Smooth scroll para anclas de navegación
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetID = anchor.getAttribute('href');
      const target = document.querySelector(targetID);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
