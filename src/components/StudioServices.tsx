import React from 'react';
import { servicesData } from '../data';

export const StudioServices: React.FC = () => {
  return (
    <section className="section-services" id="services">
      <div className="section-services-wrapper">
        <div className="section-services-header">
          <div className="section-about-text" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            WHAT WE DELIVER
          </div>
          <h2 className="section-heading">THIS IS OUR THING</h2>
        </div>

        <div className="services-list">
          {servicesData.map((service) => (
            <div key={service.id} className={`service-block ${service.className}`}>
              <div className="service-text-wrapper">
                {service.titleLines.map((line, idx) => (
                  <div key={idx} className="service-text">
                    {line}
                  </div>
                ))}
              </div>

              {service.lottieSrc && (
                <div className="service-svg">
                  <div
                    className="lottie-animation"
                    data-animation-type="lottie"
                    data-autoplay="1"
                    data-loop="1"
                    data-src={service.lottieSrc}
                  />
                </div>
              )}

              <div className="service-block-para-wrapper">
                <p className="service-block-para">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
