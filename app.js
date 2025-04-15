// Slider de testimonios automático
let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showNextTestimonial() {
    testimonials[testimonialIndex].classList.remove('active');
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    testimonials[testimonialIndex].classList.add('active');
}

setInterval(showNextTestimonial, 5000);

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar formulario de consulta
function showConsultationForm() {
    // Lógica para mostrar modal/formulario
    alert("Pronto será atendido por un especialista...");
}

// Efecto hover mejorado para tarjetas
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Trackear clics en WhatsApp
document.querySelector('.whatsapp-fixed').addEventListener('click', () => {
    // Lógica para trackear conversión
    console.log('Clic en WhatsApp');
});
