import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS_CONFIG } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Trust.css';

export default function Trust() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="trust section section--alt">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">{TESTIMONIALS_CONFIG.label}</span>
          <h2 className="section-title">{TESTIMONIALS_CONFIG.title}</h2>
          <p className="section-subtitle">{TESTIMONIALS_CONFIG.subtitle}</p>
        </div>

        <div className="trust__grid" ref={ref}>
          {TESTIMONIALS_CONFIG.items.map((t, i) => (
            <div
              key={i}
              className={`trust__card ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="trust__card-quote">
                <Quote size={24} />
              </div>
              <div className="trust__card-stars">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} fill="var(--accent)" color="var(--accent)" />
                ))}
              </div>
              <p className="trust__card-text">{t.text}</p>
              <div className="trust__card-author">
                <div className="trust__card-avatar">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
