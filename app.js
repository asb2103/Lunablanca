// Traductor de Google
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'es',
    includedLanguages: 'en,es',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'languageSelector');
}

// Burbujas de fondo grandes y suaves
const bubblesContainer = document.getElementById('bubbles');
for (let i = 0; i < 25; i++) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  const size = Math.random() * 150 + 80;
  bubble.style.width = size + 'px';
  bubble.style.height = size + 'px';
  bubble.style.left = Math.random() * 100 + 'vw';
  bubble.style.top = Math.random() * 100 + 'vh';
  bubble.style.animationDuration = (Math.random() * 25 + 15) + 's';
  bubble.style.background = 'rgba(255,255,255,0.04)';
  bubblesContainer.appendChild(bubble);
}
