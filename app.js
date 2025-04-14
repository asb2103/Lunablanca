document.addEventListener('DOMContentLoaded', () => {
    // Inicialización AOS
    AOS.init({
        duration: 1000,
        once: false,
        easing: 'ease-in-out'
    });

    // Configuración Partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: ['#2E3192', '#A3A9FF', '#FFFFFF'] },
            shape: { type: 'circle' },
            opacity: { value: 0.7 },
            size: { value: 3 },
            move: {
                enable: true,
                speed: 1.2,
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

    // Integración PayPal
    const loadPaypalButtons = () => {
        // Ofrenda Básica ($29)
        paypal.Buttons({
            style: { color: 'blue', shape: 'pill' },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: '29' }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Ofrenda básica completada. ¡Gracias!');
                });
            }
        }).render('#paypal-basico');

        // Ofrenda Lunar ($79)
        paypal.Buttons({
            style: { color: 'silver', shape: 'pill' },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: '79' }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Ofrenda lunar completada. ¡Bendiciones!');
                });
            }
        }).render('#paypal-lunar');

        // Ofrenda Personalizada
        paypal.Buttons({
            style: { color: 'gold', shape: 'pill' },
            createOrder: (data, actions) => {
                const amount = prompt('Ingresa el monto de tu ofrenda (USD):');
                return actions.order.create({
                    purchase_units: [{
                        amount: { value: amount || '10' }
                    }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert(`Ofrenda de $${details.purchase_units[0].amount.value} completada. Gracias por tu generosidad.`);
                });
            }
        }).render('#paypal-personalizado');
    }

    // Cargar botones PayPal cuando el SDK esté listo
    if(typeof paypal !== 'undefined') {
        loadPaypalButtons();
    } else {
        window.addEventListener('paypal-sdk-loaded', loadPaypalButtons);
    }

    // Manejo del CTA
    document.querySelector('.cta-btn').addEventListener('click', () => {
        window.location.href = '#ofrendas';
    });
});
