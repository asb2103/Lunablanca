document.addEventListener('DOMContentLoaded', () => {
  try {
    // Inicialización de AOS para animaciones
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-back'
      });
    } else {
      console.error('AOS no está cargado.');
    }

    // Configuración de Particles.js con paleta mística
    if (typeof particlesJS !== 'undefined') {
      particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ['#6a0dad', '#00ff99', '#ff8c00']  // Tonos místicos
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
    } else {
      console.error('particlesJS no está definido.');
    }

    // Smooth scroll para anclas de navegación
    const anchors = document.querySelectorAll('a[href^="#"]');
    if (anchors.length > 0) {
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
          } else {
            console.warn(No se encontró el elemento destino para: ${targetID});
          }
        });
      });
    } else {
      console.warn('No se encontraron anclas para smooth scroll.');
    }
  } catch (error) {
    console.error('Error durante la inicialización:', error);
  }
});
