document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-back'
    });

    // Configurar partículas
    if(typeof particlesJS === 'function') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 }},
                color: { value: '#6a4c93' },
                shape: { type: 'circle' },
                opacity: { value: 0.5 },
                size: { value: 3 },
                move: { enable: true, speed: 1 }
            }
        });
    }

    // Smooth scroll
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
