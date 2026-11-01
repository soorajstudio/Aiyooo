import React from 'react';
import { testimonialsData } from '../data';

export const StudioTestimonials: React.FC = () => {
  return (
    <section className="section-testimonials">
      <div className="section-testimonials-wrapper">
        <div className="section-testimonials-header">
          <div className="section-about-text">What Founders Say</div>
          <h2 className="section-heading">APPARENTLY, THEY LIKE US</h2>
        </div>

        <div className="testimonials-cards-wrapper">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-heading">{item.quote}</div>
              <div className="testimonial-card-btm">
                <div className="testimonial-card-pfp">
                  <div className="testimonial-img-wrap">
                    <img
                      alt={item.name}
                      className="image"
                      loading="lazy"
                      src={item.image}
                    />
                  </div>
                  <div className="pfp-info-wrapper">
                    <div className="testimonial-pfp-name">{item.name}</div>
                    <div className="testimonial-pfp-designation">{item.role}</div>
                  </div>
                </div>
                <p className="testimonial-card-para">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
