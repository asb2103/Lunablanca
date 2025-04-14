document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS
    AOS.init({
        duration: 800,
        once: false,
        easing: 'ease-in-out'
    });

    // Configurar partículas
    if(typeof particlesJS === 'function') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 100, density: { enable: true, value_area: 800 } },
                color: { value: ['#2E3192', '#A3A9FF', '#FFD700'] },
                shape: { type: 'circle' },
                opacity: { value: 0.7 },
                size: { value: 3 },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    out_mode: 'bounce'
                }
            },
            interactivity: {
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' }
                }
            }
        });
    }

    // Integración PayPal
    if(typeof paypal !== 'undefined') {
        // Ofrenda Básica ($29)
        paypal.Buttons({
            style: { color: 'blue', shape: 'pill' },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: '29.00' }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Ofrenda básica completada. ¡Gracias por tu apoyo!');
                });
            }
        }).render('#paypal-basico');

        // Ofrenda Lunar ($79)
        paypal.Buttons({
            style: { color: 'gold', shape: 'pill' },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: '79.00' }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Ofrenda lunar completada. ¡Bendiciones!');
                });
            }
        }).render('#paypal-lunar');
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
