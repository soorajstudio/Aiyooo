import React, { useState } from 'react';
import { aiyoooNavLinks } from '../data';

export const AiyoooNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="navbar">
        <div className={`navbar_menu ${mobileMenuOpen ? 'is-open' : ''}`}>
          {aiyoooNavLinks.map((link) => (
            <a
              key={link.label}
              aria-label={`${link.label} link`}
              role="Link"
              href={link.href}
              onClick={closeMenu}
              className={`button-color-swoosh is-menu w-inline-block ${
                link.isCurrent ? 'w--current' : ''
              }`}
            >
              <span className="button-color-swoosh_bg">
                <span
                  style={{ '--index': 0 } as React.CSSProperties}
                  className="button-color-swoosh_bg-inner is-first"
                />
                <span
                  style={{ '--index': 1 } as React.CSSProperties}
                  className="button-color-swoosh_bg-inner is-second"
                />
              </span>
              <span data-text={link.label} className="button-color-swoosh_inner">
                <span className="button-color-swoosh_text">{link.label}</span>
              </span>
            </a>
          ))}
          <div className="navbar_menu-bg" />
          <div className="navbar_menu-bg-back" />
        </div>

        <div
          className={`navbar_menu-trigger ${mobileMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
        >
          <div className="navbar_menu-line is-top" />
          <div className="navbar_menu-line is-bottom" />
        </div>
      </div>
    </nav>
  );
};
