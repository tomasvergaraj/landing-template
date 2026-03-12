import { useState, useEffect } from 'react';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppLink, getPhoneLink } from '../config';
import WhatsAppIcon from './WhatsAppIcon';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo" aria-label="Ir al inicio">
          {SITE_CONFIG.logoPath ? (
            <img src={SITE_CONFIG.logoPath} alt={SITE_CONFIG.companyName} />
          ) : (
            <span className="navbar__logo-text">
              {SITE_CONFIG.companyName.split(' ')[0]}
              <span>.{SITE_CONFIG.companyName.split(' ').slice(1).join('') || 'co'}</span>
            </span>
          )}
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-actions">
            <a href={getWhatsAppLink()} className="btn btn-whatsapp btn-sm" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
            <a href={getPhoneLink()} className="btn btn-outline btn-sm">
              <Phone size={16} /> Llamar
            </a>
          </div>
        </div>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            title={isDark ? 'Modo claro' : 'Modo oscuro'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href={getPhoneLink()} className="navbar__phone" aria-label="Llamar">
            <Phone size={18} />
          </a>
          <a
            href={getWhatsAppLink()}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cotizar Ahora
          </a>
        </div>

        <div className="navbar__right-mobile">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar__backdrop" onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
