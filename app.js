document.addEventListener('DOMContentLoaded', () => {
  try {
    // Inicialización de AOS
    setTimeout(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-out-back'
        });
      }
    }, 300);

    // Partículas
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: ['#6a0dad', '#00ff99', '#ff8c00'] },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3 },
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
    }

    // Smooth scroll
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetID = anchor.getAttribute('href');
        const target = document.querySelector(targetID);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          history.pushState(null, null, targetID);
        }
      });
    });
  } catch (error) {
    console.error('Error durante la inicialización:', error);
  }
});
