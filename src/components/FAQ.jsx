import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_CONFIG } from '../config';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './FAQ.css';

function FAQItem({ question, answer, isOpen, toggle }) {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button className="faq__question" onClick={toggle} aria-expanded={isOpen}>
        <span>{question}</span>
        <ChevronDown size={20} className="faq__chevron" />
      </button>
      <div className="faq__answer-wrap">
        <p className="faq__answer">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, visible] = useScrollAnimation();

  return (
    <section className="faq section section--alt">
      <div className="pattern-overlay" />
      <div className="container">
        <div className="section-header">
          <span className="section-label">{FAQ_CONFIG.label}</span>
          <h2 className="section-title">{FAQ_CONFIG.title}</h2>
          <p className="section-subtitle">{FAQ_CONFIG.subtitle}</p>
        </div>

        <div className={`faq__list ${visible ? 'visible' : ''}`} ref={ref}>
          {FAQ_CONFIG.items.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
