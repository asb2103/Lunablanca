document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-back'
    });

    // Configurar partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 }},
            color: { value: '#8B5CF6' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 1 }
        }
    });
});
