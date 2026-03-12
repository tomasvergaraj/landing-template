import {
  Truck, Building2, HardHat, Warehouse, ClipboardCheck, UsersRound,
  Briefcase, Lightbulb, Globe, Wrench, BarChart3, HeadphonesIcon,
} from 'lucide-react';
import { SERVICES_CONFIG } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

const iconMap = {
  Truck, Building2, HardHat, Warehouse, ClipboardCheck, UsersRound,
  Briefcase, Lightbulb, Globe, Wrench, BarChart3, HeadphonesIcon,
};

export default function Services() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="servicios" className="services section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">{SERVICES_CONFIG.label}</span>
          <h2 className="section-title">{SERVICES_CONFIG.title}</h2>
          <p className="section-subtitle">{SERVICES_CONFIG.subtitle}</p>
        </div>

        <div className="services__grid" ref={ref}>
          {SERVICES_CONFIG.items.map((service, i) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <div
                key={service.title}
                className={`services__card ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="services__card-icon">
                  <Icon size={28} />
                </div>
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.description}</p>
                <div className="services__card-line" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
