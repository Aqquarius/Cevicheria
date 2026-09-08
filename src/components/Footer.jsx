import React from 'react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer-sec" id="contacto">
      <div className="footer-grid">
        {/* Col 1: About */}
        <div>
          <div className="footer-about-logo">
            <Logo className="footer-logo floating-icon" />
            <span>La Caserita</span>
          </div>
          <p className="footer-about-desc">
            Llevando la tradición y el sabor marino más fresco desde el puerto de nuestro mar peruano directo a tu mesa.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="footer-col-title">Enlaces Rápidos</h4>
          <ul className="footer-links-list">
            <li className="footer-link-item"><a href="#inicio">Inicio</a></li>
            <li className="footer-link-item"><a href="#nosotros">Nosotros</a></li>
            <li className="footer-link-item"><a href="#carta">Nuestra Carta</a></li>
            <li className="footer-link-item"><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Col 3: Hours & Address */}
        <div>
          <h4 className="footer-col-title">Contacto y Horarios</h4>
          
          <div className="footer-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Calle Miguel Arriaga A-1A-2,Casa Grande</span>
          </div>

          <div className="footer-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+51 987 654 321</span>
          </div>

          <div className="footer-info-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8M12 17v4"/></svg>
            <div>
              <strong>Lunes a Domingo:</strong>
              <div style={{ fontSize: '0.85rem' }}>10:30 AM – 05:00 PM</div>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cevichería La Caserita. Todos los derechos reservados. Diseñado con amor marino.</p>
      </div>
    </footer>
  );
}
