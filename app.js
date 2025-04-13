document.addEventListener('DOMContentLoaded', () => {
  try {
    // Inicialización AOS
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out-back'
    });

    // Configuración Partículas
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ['#8B0000', '#FFD700', '#4B0082'] },
        shape: { type: 'circle' },
        opacity: { value: 0.7 },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: true,
          outMode: 'bounce'
        }
      },
      interactivity: {
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' }
        }
      }
    });

    // PayPal Integration
    paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: '49.00'
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          alert('Ofrenda completada por ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-button-container-49');

    // Versiones para otros montos
    [99, 'custom'].forEach(amount => {
      paypal.Buttons({
        style: { color: 'gold' },
        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount === 'custom' ? prompt('Ingrese monto:') : amount.toString()
              }
            }]
          });
        },
        onApprove: function(data, actions) {
          actions.order.capture().then(details => {
            alert(`Ofrenda de $${amount} USD completada`);
          });
        }
      }).render(`#paypal-button-container-${amount}`);
    });

    // Form Handler
    document.getElementById('contactForm').addEventListener('submit', e => {
      e.preventDefault();
      // Aquí integrar servicio de email
      alert('Consulta enviada. Te contactaremos en 24h.');
      e.target.reset();
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, null, this.href);
        }
      });
    });

  } catch(error) {
    console.error('Error de inicialización:', error);
  }
});
