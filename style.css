document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out'
    });

    // Partículas de rosas
    particlesJS('particles-js', {
        particles: {
            number: { value: 40, density: { enable: true, value_area: 800 } },
            color: { value: '#8B0000' },
            shape: { type: 'image', image: { src: 'https://i.ibb.co/6n0r7vL/rose-petal.png', width: 50, height: 50 } },
            opacity: { value: 0.7, random: true },
            size: { value: 15, random: true },
            move: { enable: true, speed: 2, direction: 'bottom', straight: false }
        }
    });

    // Animación de velas
    const candles = document.createElement('div');
    candles.className = 'velas-animadas';
    document.body.appendChild(candles);

    // Manejo del formulario
    document.getElementById('santaForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = this.querySelector('button');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando Ofrenda...';
        
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check"></i> Petición Aceptada!';
            this.reset();
            // Efecto visual
            const efecto = document.createElement('div');
            efecto.className = 'ritual-effect';
            document.body.appendChild(efecto);
            setTimeout(() => efecto.remove(), 2000);
        }, 1500);
    });
});
