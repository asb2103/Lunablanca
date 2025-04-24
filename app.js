// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  /* ========== Preloader ========== */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    preloader.classList.add('hide');
    setTimeout(() => preloader.remove(), 600);
  });

  /* ========== Menú Móvil ========== */
  const toggle = document.querySelector('.menu-toggle');
  const menu   = document.querySelector('.menu ul');
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  /* ========== Smooth Scroll & Activar sección ========== */
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section, footer');
  window.addEventListener('scroll', highlightNav);
  links.forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))
              .scrollIntoView({behavior:'smooth'});
    });
  });
  function highlightNav() {
    let scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        let id = sec.getAttribute('id');
        links.forEach(lk => {
          lk.classList.toggle('active', lk.getAttribute('href') === `#${id}`);
        });
      }
    });
  }

  /* ========== Hero Slideshow ========== */
  let slideIndex = 0;
  const slides = document.querySelectorAll('.hero .slide');
  setInterval(() => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }, 6000);

  /* ========== Testimonial Slider ========== */
  let tIndex = 0;
  const tests = document.querySelectorAll('.testimonial');
  setInterval(() => {
    tests[tIndex].classList.remove('active');
    tIndex = (tIndex + 1) % tests.length;
    tests[tIndex].classList.add('active');
  }, 7000);

  /* ========== Animaciones al hacer scroll ========== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.animate-on-scroll, .gallery-item')
          .forEach(el => observer.observe(el));

  /* ========== Modal Consulta ========== */
  const modal = document.getElementById('modal-consulta');
  const btns  = document.querySelectorAll('.cta-main');
  const close = document.querySelector('.modal-close');
  btns.forEach(b => b.addEventListener('click', showConsultationForm));
  close.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
  document.getElementById('form-consulta')
    .addEventListener('submit', e => {
      e.preventDefault();
      alert('¡Gracias! Pronto nos pondremos en contacto contigo.');
      modal.classList.remove('active');
      e.target.reset();
    });

  /* ========== WhatsApp Tracking ========== */
  document.querySelector('.whatsapp-fixed')
    .addEventListener('click', () => {
      console.log('Clic en WhatsApp');
      // Aquí puedes integrar tu Pixel o Analytics
    });
});

// Abre el modal de consulta
function showConsultationForm() {
  document.getElementById('modal-consulta').classList.add('active');
}
