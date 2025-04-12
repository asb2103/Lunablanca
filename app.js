document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out-quart'
    });

    // Configurar partículas de ceniza
    particlesJS('particles-js', {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#8a0303' },
            shape: { type: 'image', image: { src: 'https://www.freeiconspng.com/uploads/ash-png-5.png', width: 100, height: 100 } },
            opacity: { value: 0.5, random: true },
            size: { value: 10, random: true },
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

    // Efecto de escritura siniestro
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        const letters = title.textContent.split('');
        title.textContent = '';
        letters.forEach((letter, i) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animation = `appear 0.5s ${i * 0.1}s forwards`;
            title.appendChild(span);
        });
    });

    // Efecto de susurro al pasar el ratón
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const whisper = new Audio('https://assets.mixkit.co/active_storage/sfx/2868/2868-preview.mp3');
            whisper.play();
        });
    });
});
