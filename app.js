:root {
  --primary-color: #8B0000;
  --secondary-color: #FFD700;
  --dark-bg: #0a0a0a;
  --text-light: #f8f8f8;
  --accent: #4B0082;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Arial', sans-serif;
  background: var(--dark-bg);
  color: var(--text-light);
  line-height: 1.8;
  overflow-x: hidden;
}

/* Partículas */
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
}

/* Header */
header {
  background: rgba(10, 10, 10, 0.95);
  padding: 1rem;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo h1 {
  color: var(--secondary-color);
  font-size: 2.2rem;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}

/* Navegación */
nav ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
}

nav a {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

nav a:hover {
  color: var(--secondary-color);
  text-shadow: 0 0 10px var(--secondary-color);
}

/* Sección Hero */
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
              url('https://images.unsplash.com/photo-1507525428033-7149db4ec7dc') center/cover;
}

.hero-content h2 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.cta-btn {
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.cta-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px var(--primary-color);
}

/* Servicios */
.grid-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.servicio {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid var(--accent);
  transition: all 0.3s ease;
}

.servicio:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.1);
}

.precio {
  color: var(--secondary-color);
  font-weight: bold;
  display: block;
  margin-top: 1rem;
}

/* PayPal */
.paypal-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
}

.ofrenda {
  background: rgba(0, 100, 0, 0.1);
  padding: 2rem;
  border: 2px solid var(--secondary-color);
  border-radius: 10px;
}

/* Testimonios */
.testimonio-carousel {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 2rem;
}

.testimonio {
  min-width: 300px;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-left: 4px solid var(--primary-color);
}

/* Contacto */
form {
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--accent);
  color: white;
}

button[type="submit"] {
  background: var(--primary-color);
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  background: #6B0000;
}

/* WhatsApp */
.whatsapp-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #25D366;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  font-size: 2rem;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
}

.whatsapp-btn:hover {
  transform: scale(1.1) rotate(15deg);
}

@media (max-width: 768px) {
  .grid-servicios, .paypal-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-content h2 {
    font-size: 2.5rem;
  }
}
