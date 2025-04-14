// Generar burbujas de fondo
const bubblesContainer = document.getElementById('bubbles');
for (let i = 0; i < 40; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 40 + 10;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.top = Math.random() * 100 + 'vh';
  bubble.style.animationDuration = (Math.random() * 20 + 10) + 's';
  bubblesContainer.appendChild(bubble);
}

// Manejo del formulario de testimonio (sin base de datos, solo feedback)
const form = document.getElementById('testimonioForm');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert("¡Gracias por tu testimonio! Será revisado y publicado pronto.");
  form.reset();
});
