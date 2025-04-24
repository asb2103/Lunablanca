// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  // Toggle menú móvil
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Slider de testimonios
  let idx = 0;
  const slides = document.querySelectorAll('.testimonial');
  function nextSlide() {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }
  setInterval(nextSlide, 6000);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const tgt = document.querySelector(a.getAttribute('href'));
      if (tgt) tgt.scrollIntoView({ behavior: 'smooth' });
      // cerrar menú en móvil
      if (menu.classList.contains('active')) menu.classList.remove('active');
    });
  });

  // Modal de consulta
  const modal = document.getElementById('modal-consulta');
  const btns = document.querySelectorAll('.cta, .show-consulta');
  const closeBtn = modal.querySelector('.modal-close');
  btns.forEach(b => b.addEventListener('click', showConsultationForm));
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Envío de formulario (simulado)
  document.getElementById('form-consulta').addEventListener('submit', e => {
    e.preventDefault();
    alert('¡Tu solicitud ha sido enviada! Pronto recibirás respuesta.');
    modal.classList.remove('active');
    e.target.reset();
  });

  // Seguimiento botón WhatsApp
  const wa = document.querySelector('.whatsapp-fixed');
  wa.addEventListener('click', () => {
    console.log('Usuario hizo clic en WhatsApp');
    // Aquí podrías integrar Analytics o Pixel
  });
});

function showConsultationForm() {
  document.getElementById('modal-consulta').classList.add('active');
}
