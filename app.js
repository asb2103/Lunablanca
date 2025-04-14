
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: false, easing: 'ease-in-out' });

    particlesJS('particles-js', {
        particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: ['#2E3192', '#A3A9FF', '#FFFFFF'] },
            shape: { type: 'circle' },
            opacity: { value: 0.7 },
            size: { value: 3 },
            move: { enable: true, speed: 1.2, direction: 'none', random: true, outMode: 'bounce' }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' }
            }
        }
    });

    if (typeof paypal !== 'undefined') {
        paypal.Buttons({
            style: { color: 'gold', shape: 'pill' },
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [{ amount: { value: '10' } }]
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then(details => {
                    alert('Gracias por tu ofrenda de luz. ¡Bendiciones!');
                });
            }
        }).render('#paypal-donacion');
    }
});
