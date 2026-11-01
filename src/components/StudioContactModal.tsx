import React from 'react';

interface StudioContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudioContactModal: React.FC<StudioContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="contact-page"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#000',
        color: '#f8eee8',
        overflowY: 'auto',
      }}
    >
      <div className="contact-navbar">
        <div className="navbar-logo-contact">
          <div className="logo-svg w-embed" style={{ display: 'flex', alignItems: 'center' }}>
            <svg fill="none" height="30" viewBox="0 0 140 30" width="140" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fill="#F8EEE8" fontFamily="'Mdnichrometest', sans-serif" fontWeight="900" fontSize="28" letterSpacing="0.06em">
                AIYOOO
              </text>
            </svg>
          </div>
        </div>

        <div className="close-btn-wrapper">
          <button
            type="button"
            className="close-btn w-inline-block"
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <div className="back-arrow w-embed">
              <svg fill="none" viewBox="0 0 8 8" width="100%" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.86328 0.5L0.499281 6.864M6.86328 6.864L0.499281 0.5" stroke="#f8eee8" strokeLinecap="round" />
              </svg>
            </div>
            <div className="back-btn-txt" style={{ color: '#f8eee8' }}>Close</div>
          </button>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-heading">READY TO</h2>
          <h2 className="contact-heading">BUILD</h2>
          <h2 className="contact-heading right">SOMETHING</h2>
          <h2 className="contact-heading left">LEGENDARY?</h2>
          <p className="contact-para left">Let's craft your custom website, AI visuals, or next MVP.</p>
        </div>

        <div className="contact-right">
          <div className="contact-email-wrap">
            <div className="email-heading">Startup Inquiries &amp; Projects</div>
            <a className="email-link" href="mailto:hello@aiyooo.com?subject=Project%20Inquiry%20-%20AIYOOO">
              hello@aiyooo.com
            </a>
          </div>

          <div className="contact-email-wrap">
            <div className="email-heading">Direct Collaboration</div>
            <a className="email-link" href="mailto:hello@aiyooo.com?subject=Collaboration%20-%20AIYOOO">
              hello@aiyooo.com
            </a>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', justifyContent: 'center' }}>
        <a className="contact-social right w-inline-block" href="https://linkedin.com" target="_blank" rel="noreferrer">
          <div className="contact-social-link">LinkedIn</div>
        </a>
        <a className="contact-social left w-inline-block" href="https://twitter.com" target="_blank" rel="noreferrer">
          <div className="contact-social-link">Twitter / X</div>
        </a>
        <a className="contact-social left w-inline-block" href="https://instagram.com" target="_blank" rel="noreferrer">
          <div className="contact-social-link">Instagram</div>
        </a>
        <a className="contact-social left w-inline-block" href="https://github.com" target="_blank" rel="noreferrer">
          <div className="contact-social-link">GitHub</div>
        </a>
      </div>

      <div className="contact-img-wrap" style={{ textAlign: 'center', pointerEvents: 'none' }}>
        <img alt="" className="contact-img" loading="lazy" src="assets/images/6aaad679fdb9d914f7f5206b_contact.svg" />
      </div>
    </div>
  );
};
