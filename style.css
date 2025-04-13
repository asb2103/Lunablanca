:root {
    --main-color: #8B5CF6;
    --dark-bg: #0F172A;
    --text-light: #F8FAFC;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: var(--dark-bg);
    color: var(--text-light);
    line-height: 1.6;
    padding: 2rem;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--main-color);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.service-card {
    background: rgba(255,255,255,0.05);
    padding: 2rem;
    border-radius: 15px;
    border: 2px solid var(--main-color);
    transition: all 0.3s;
    backdrop-filter: blur(5px);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(139,92,246,0.2);
}

.service-card h3 {
    color: var(--main-color);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
}

.service-card ul {
    list-style: none;
}

.service-card li {
    margin: 1rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.service-card li::before {
    content: "▹";
    color: var(--main-color);
    position: absolute;
    left: 0;
}

@media (max-width: 768px) {
    .section-title {
        font-size: 2rem;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
}
