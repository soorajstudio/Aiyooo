import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StudioFooter: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const fillHoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const btn = ctaBtnRef.current;
    const arrow = arrowRef.current;
    const fillHover = fillHoverRef.current;

    let arrowLoop: gsap.core.Timeline | null = null;

    if (btn) {
      btn.addEventListener('mouseenter', () => {
        if (fillHover) {
          gsap.to(fillHover, { scale: 10, duration: 0.55, ease: 'power2.out', overwrite: 'auto' });
        }
        if (arrow) {
          gsap.set(arrow, { transformOrigin: 'center center' });
          if (arrowLoop) arrowLoop.kill();
          arrowLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.2 });
          arrowLoop
            .to(arrow, { rotation: -25, duration: 0.22, ease: 'power2.out' })
            .to(arrow, { rotation: 0, duration: 0.4, ease: 'back.out(2.5)' });
        }
      });

      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const currentX = (gsap.getProperty(btn, 'x') as number) || 0;
        const currentY = (gsap.getProperty(btn, 'y') as number) || 0;
        const originCenterX = rect.left - currentX + rect.width / 2;
        const originCenterY = rect.top - currentY + rect.height / 2;
        const deltaX = e.clientX - originCenterX;
        const deltaY = e.clientY - originCenterY;

        gsap.to(btn, { x: deltaX * 0.35, y: deltaY * 0.35, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
        if (arrow) {
          gsap.to(arrow, { x: deltaX * 0.15, y: deltaY * 0.15, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
        }
      });

      btn.addEventListener('mouseleave', () => {
        if (arrowLoop) {
          arrowLoop.kill();
          arrowLoop = null;
        }
        if (arrow) {
          gsap.to(arrow, { rotation: 0, x: 0, y: 0, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
        }
        gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1.1, 0.4)', overwrite: 'auto' });
        if (fillHover) {
          gsap.to(fillHover, { scale: 1, duration: 0.45, ease: 'power2.out', overwrite: 'auto' });
        }
      });
    }

    if (footer) {
      ScrollTrigger.create({
        trigger: footer,
        start: 'top 80%',
        onEnter: () => {
          gsap.to('.footer-svg-color-1 path', { fill: '#000000', duration: 0.4, ease: 'power2.out' });
          gsap.to('.footer-svg-color-2 path', { fill: '#FF5400', duration: 0.4, ease: 'power2.out' });
        },
        onLeaveBack: () => {
          gsap.to('.footer-svg-color-1 path', { fill: '#FF5400', duration: 0.4, ease: 'power2.out' });
          gsap.to('.footer-svg-color-2 path', { fill: '#000000', duration: 0.4, ease: 'power2.out' });
        },
      });
    }

    return () => {
      if (arrowLoop) arrowLoop.kill();
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-wrapper">
        <div className="footer-cta-wrapper">
          <h2 className="footer-heading">Ready to Build Something Extraordinary?</h2>
          <div className="cta-wrap">
            <a
              ref={ctaBtnRef}
              className="cta-btn w-inline-block"
              data-wf--cta-btn--variant="base"
              href="mailto:hello@aiyooo.com"
            >
              <div className="cta-text">Let's Talk</div>
              <div ref={arrowRef} className="cta-btn-arrow">
                <div className="svg-arrow-cta w-embed">
                  <svg fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_190_472_ftr)">
                      <path
                        d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_190_472_ftr">
                        <rect fill="currentColor" height="10" transform="translate(10) rotate(90)" width="10" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div ref={fillHoverRef} className="cta-btn-fill-hover" />
            </a>
          </div>
        </div>

        <div className="footer-links-wrapper">
          <div className="footer-links-block email">
            <div className="footer-link-header">Email us</div>
            <a className="footer-link" href="mailto:hello@aiyooo.com">
              hello@aiyooo.com
            </a>
          </div>

          <div className="footer-links-block">
            <div className="footer-link-header">Main Menu</div>
            <a className="footer-link" href="#services">
              Services
            </a>
            <a className="footer-link" href="#projects-section">
              Selected Works
            </a>
            <a className="footer-link" href="#faq-section">
              FAQ
            </a>
          </div>

          <div className="footer-links-block socials">
            <a className="social-link w-inline-block" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <div className="footer-link">LinkedIn</div>
            </a>
            <a className="social-link w-inline-block" href="https://twitter.com" target="_blank" rel="noreferrer">
              <div className="footer-link">Twitter / X</div>
            </a>
            <a className="social-link w-inline-block" href="https://instagram.com" target="_blank" rel="noreferrer">
              <div className="footer-link">Instagram</div>
            </a>
            <a className="social-link w-inline-block" href="https://github.com" target="_blank" rel="noreferrer">
              <div className="footer-link">GitHub</div>
            </a>
          </div>

          <div className="footer-links-block">
            <a className="footer-link" href="#section_hero">
              Crafted with intelligence &amp; code.
            </a>
          </div>
        </div>

        <div className="footer-bottom-wrapper">
          <div className="footer-address">Global &amp; Remote</div>
          <div className="footer-rights-text">&copy; Copyright 2026 - AIYOOO Startup Studio. All Rights Reserved.</div>
        </div>
      </div>
      <div className="footer-overlay-bg" />
    </footer>
  );
};
