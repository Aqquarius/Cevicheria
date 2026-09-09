import React from 'react';
import plat from '../assets/Ceviche.PNG';

export default function Welcome() {
  return (
    <section className="welcome-sec" id="nosotros">
      <div className="welcome-grid">
        <div className="welcome-text">
          <span className="section-tag">Nuestra Historia</span>
          <h2 className="section-title">Pasión y Frescura Marina en Cada Plato</h2>
          <p className="section-desc">
            El verdadero sabor del mar con el toque casero que te hace sentir como en familia. En <strong>La Caserita</strong>, nos apasiona llevar a tu mesa los pescados y mariscos más frescos, preparados al instante con las recetas tradicionales que ya conoces y amas.
          </p>
          <p className="section-desc">
            
¡Ven y siéntete como en casa, casero!
          </p>
          
          <div className="welcome-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div>
                <h4 className="feature-title">Pesca de Origen 100% Sostenible</h4>
                <p className="feature-desc">Apoyamos a comunidades pesqueras locales y respetamos vedas ecológicas.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="15" x2="15.01" y2="15"/></svg>
              </div>
              <div>
                <h4 className="feature-title">Limón Exprimido al Momento</h4>
                <p className="feature-desc">Garantiza el PH perfecto y evita el amargor de la cáscara.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="welcome-image-container">
          <img src={plat} alt="Ceviche tradicional peruano" className="welcome-img" />
          <div className="welcome-floating-badge">
            <div className="floating-badge-number">15+</div>
            <div className="floating-badge-text">Años perfeccionando el sazón del puerto</div>
          </div>
        </div>
      </div>
    </section>
  );
}
