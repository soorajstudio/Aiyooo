import React, { useState } from 'react';
import { faqData } from '../data';

export const StudioFaq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-faq" id="faq-section">
      <div className="section-faq-wrapper">
        <div className="section-faq-header">
          <div className="section-about-text" style={{ marginBottom: '0.5rem' }}>
            GOT QUESTIONS?
          </div>
          <h2 className="section-heading left-align">THINGS YOU MIGHT ASK</h2>
        </div>

        <div className="faq-list-wrapper">
          <div className="faq-list">
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`faq-item w-dyn-item ${isOpen ? 'is-open' : ''}`}
                  role="listitem"
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="faq-block">
                    <div className="question-block">
                      <div className="faq-ques">{faq.question}</div>
                      <div
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 'bold',
                          color: '#FF5400',
                          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          userSelect: 'none',
                        }}
                      >
                        +
                      </div>
                    </div>

                    <div
                      className="faq-block-btm"
                      style={{
                        maxHeight: isOpen ? '500px' : '0px',
                        overflow: 'hidden',
                        opacity: isOpen ? 1 : 0,
                        transition: 'all 0.35s ease',
                      }}
                    >
                      <div className="answer-block">
                        <p className="faq-answer">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
