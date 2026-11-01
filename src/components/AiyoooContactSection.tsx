import React from 'react';

export const AiyoooContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      style={{
        padding: '120px 0',
        backgroundColor: '#0b0b0b',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
      }}
    >
      <div className="padding-global">
        <h2 className="heading-m" style={{ marginBottom: '2rem' }}>
          Ready to Elevate Your Startup?
        </h2>
        <p
          className="paragraph-m"
          style={{ maxWidth: '600px', margin: '0 auto 3rem', color: '#aaa' }}
        >
          From dynamic portfolios and AI media to scalable websites and end-to-end MVP projects, AIYOOO is
          here to bring your vision to life.
        </p>
        <a href="mailto:hello@aiyooo.com" className="button-default w-inline-block">
          <div
            className="button-default__inner"
            style={{
              backgroundColor: '#fff',
              color: '#000',
              padding: '15px 40px',
              borderRadius: '50px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              letterSpacing: '1px',
              display: 'inline-block',
            }}
          >
            <span className="button-default__text">Contact Us Today</span>
          </div>
        </a>
      </div>
    </section>
  );
};
