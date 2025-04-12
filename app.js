document.addEventListener('DOMContentLoaded', function() {
    // Inicializar animaciones AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });

    // Configurar partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: '#8a0303' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: false },
            move: { enable: true, speed: 1, direction: 'none', random: true }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' }
            }
        }
    });

    // Efecto de escritura en títulos
    const animateTitles = () => {
        document.querySelectorAll('h1, h2').forEach(title => {
            const letters = title.textContent.split('');
            title.textContent = '';
            letters.forEach((letter, i) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.style.opacity = '0';
                span.style.animation = `appear 0.5s ${i * 0.1}s forwards`;
                title.appendChild(span);
            });
        });
    };

    animateTitles();

    // Manejo del formulario
    document.getElementById('ritualForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button[type="submit"]');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Consulta Enviada!';
            this.reset();
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-hand-sparkles"></i> Enviar Consulta';
            }, 2000);
        }, 1500);
    });
});
