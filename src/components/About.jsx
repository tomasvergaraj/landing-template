import { Shield, Award, Users, Clock } from 'lucide-react';
import { ABOUT_CONFIG } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const iconMap = { Shield, Award, Users, Clock };

export default function About() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="nosotros" className="about section section--alt">
      <div className="pattern-overlay" />
      <div className="container" ref={ref}>
        <div className={`about__grid ${visible ? 'visible' : ''}`}>
          <div className="about__image-col">
            <div className="about__image-wrapper">
              <div className="about__image-placeholder">
                <div className="about__image-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  <span>Imagen de la empresa</span>
                </div>
              </div>
              <div className="about__image-accent" />
            </div>
            <div className="about__highlights">
              {ABOUT_CONFIG.highlights.map(({ icon, label }) => {
                const Icon = iconMap[icon] || Shield;
                return (
                  <div key={label} className="about__highlight">
                    <Icon size={18} />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about__text-col">
            <span className="section-label">{ABOUT_CONFIG.label}</span>
            <h2 className="about__title">
              {ABOUT_CONFIG.title} <span>{ABOUT_CONFIG.titleAccent}</span>
            </h2>
            <div className="accent-line" style={{ margin: '20px 0' }} />
            {ABOUT_CONFIG.paragraphs.map((text, i) => (
              <p key={i} className="about__text" dangerouslySetInnerHTML={{ __html: text }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
