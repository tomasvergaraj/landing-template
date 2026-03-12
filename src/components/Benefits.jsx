import {
  CheckCircle2, Timer, HeartHandshake, ShieldCheck, Zap, Target,
  Award, Sparkles, ThumbsUp, TrendingUp,
} from 'lucide-react';
import { BENEFITS_CONFIG } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Benefits.css';

const iconMap = {
  CheckCircle2, Timer, HeartHandshake, ShieldCheck, Zap, Target,
  Award, Sparkles, ThumbsUp, TrendingUp,
};

export default function Benefits() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="beneficios" className="benefits section section--alt">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">{BENEFITS_CONFIG.label}</span>
          <h2 className="section-title">{BENEFITS_CONFIG.title}</h2>
          <p className="section-subtitle">{BENEFITS_CONFIG.subtitle}</p>
        </div>

        <div className="benefits__grid" ref={ref}>
          {BENEFITS_CONFIG.items.map((b, i) => {
            const Icon = iconMap[b.icon] || CheckCircle2;
            return (
              <div
                key={b.title}
                className={`benefits__item ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="benefits__icon-wrap">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div className="benefits__text">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
