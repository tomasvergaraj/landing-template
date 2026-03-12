import { Camera, HardHat, Truck, Building } from 'lucide-react';
import { GALLERY_CONFIG } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Gallery.css';

const iconMap = { Camera, HardHat, Truck, Building };

export default function Gallery() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="proyectos" className="gallery section">
      <div className="noise-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">{GALLERY_CONFIG.label}</span>
          <h2 className="section-title">{GALLERY_CONFIG.title}</h2>
          <p className="section-subtitle">{GALLERY_CONFIG.subtitle}</p>
        </div>

        <div className="gallery__grid" ref={ref}>
          {GALLERY_CONFIG.items.map((item, i) => {
            const Icon = iconMap[item.icon] || Camera;
            return (
              <div
                key={i}
                className={`gallery__item ${i === 0 || i === 4 ? 'gallery__item--large' : ''} ${visible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="gallery__placeholder">
                  <Icon size={36} strokeWidth={1.2} />
                  <span className="gallery__placeholder-label">{item.label}</span>
                  <span className="gallery__placeholder-hint">Reemplazar con foto real</span>
                </div>
                <div className="gallery__overlay">
                  <span className="gallery__caption">{item.caption}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
