import { Phone, ArrowRight } from 'lucide-react';
import { CTA_CONFIG, getWhatsAppLink, getPhoneLink } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import WhatsAppIcon from './WhatsAppIcon';
import './CTA.css';

export default function CTA() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="contacto" className="cta section">
      <div className="cta__bg">
        <div className="cta__gradient" />
        <div className="cta__grid-pattern" />
      </div>
      <div className="container" ref={ref}>
        <div className={`cta__content ${visible ? 'visible' : ''}`}>
          <span className="section-label">{CTA_CONFIG.label}</span>
          <h2 className="cta__title">{CTA_CONFIG.title}</h2>
          <p className="cta__subtitle">{CTA_CONFIG.subtitle}</p>
          <div className="cta__buttons">
            <a
              href={getWhatsAppLink()}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={20} />
              Hablar por WhatsApp
            </a>
            <a href={getPhoneLink()} className="btn btn-primary">
              <Phone size={20} />
              Llamar Ahora
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver Servicios
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
