import { ChevronDown, ArrowRight } from 'lucide-react';
import { HERO_CONFIG, getWhatsAppLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WhatsAppIcon from './WhatsAppIcon';
import './Hero.css';

export default function Hero() {
  const [ref, visible] = useScrollAnimation(0.1);

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero__bg">
        <div className="hero__gradient" />
        <div className="hero__grid-pattern" />
        <div className="noise-overlay" />
      </div>

      <div className={`hero__content container ${visible ? 'visible' : ''}`}>
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {HERO_CONFIG.badge}
        </div>

        <h1 className="hero__title">
          {HERO_CONFIG.titleLine1}<br />
          <span className="hero__title-accent">{HERO_CONFIG.titleAccent}</span> {HERO_CONFIG.titleLine2}
        </h1>

        <p className="hero__subtitle">{HERO_CONFIG.subtitle}</p>

        <div className="hero__actions">
          <a
            href={getWhatsAppLink()}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={20} />
            {HERO_CONFIG.ctaPrimary}
          </a>
          <a href="#servicios" className="btn btn-outline">
            {HERO_CONFIG.ctaSecondary}
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="hero__stats">
          {HERO_CONFIG.stats.map((stat, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {i > 0 && <div className="hero__stat-divider" />}
              <div className="hero__stat">
                <span className="hero__stat-number">{stat.number}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a href="#nosotros" className="hero__scroll" aria-label="Scroll hacia abajo">
        <ChevronDown size={24} />
      </a>

      <div className="hero__deco-line hero__deco-line--1" />
      <div className="hero__deco-line hero__deco-line--2" />
    </section>
  );
}
