import {
  MessageSquare, FileSearch, CalendarClock, Truck, ThumbsUp,
  Phone, Settings, CheckCircle, Send, Star,
} from 'lucide-react';
import { PROCESS_CONFIG } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Process.css';

const iconMap = {
  MessageSquare, FileSearch, CalendarClock, Truck, ThumbsUp,
  Phone, Settings, CheckCircle, Send, Star,
};

export default function Process() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proceso" className="process section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">{PROCESS_CONFIG.label}</span>
          <h2 className="section-title">{PROCESS_CONFIG.title}</h2>
          <p className="section-subtitle">{PROCESS_CONFIG.subtitle}</p>
        </div>

        <div className="process__timeline" ref={ref}>
          <div className="process__line" />
          {PROCESS_CONFIG.steps.map((step, i) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <div
                key={step.number}
                className={`process__step ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="process__step-marker">
                  <span className="process__step-number">{step.number}</span>
                </div>
                <div className="process__step-card">
                  <div className="process__step-icon">
                    <Icon size={22} />
                  </div>
                  <h3 className="process__step-title">{step.title}</h3>
                  <p className="process__step-desc">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
