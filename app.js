// Mantener el JS original que enviaste
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-back'
    });

    particlesJS('particles-js', {
        particles: {
            number: { value: 70, density: { enable: true, value_area: 800 }},
            color: { value: '#8B5CF6' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
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
