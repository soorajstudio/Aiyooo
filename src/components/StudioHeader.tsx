import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface StudioHeaderProps {
  onOpenContact: () => void;
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({ onOpenContact }) => {
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const fillHoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = ctaBtnRef.current;
    const arrow = arrowRef.current;
    const fillHover = fillHoverRef.current;
    if (!btn) return;

    let arrowLoop: gsap.core.Timeline | null = null;

    const handleMouseEnter = () => {
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
    };

    const handleMouseMove = (e: MouseEvent) => {
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
    };

    const handleMouseLeave = () => {
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
    };

    btn.addEventListener('mouseenter', handleMouseEnter);
    btn.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btn.removeEventListener('mouseenter', handleMouseEnter);
      btn.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
      if (arrowLoop) arrowLoop.kill();
    };
  }, []);

  return (
    <header className="header">
      <nav className="navbar-wrap">
        <div className="navbar-links">
          <a className="navbar-link-btn w-inline-block" href="#services">
            <div className="navlink-text">Services</div>
            <div className="stroke-fill">
              <div className="stroke-fill-code w-embed">
                <svg fill="none" height="100%" viewBox="0 0 75 36" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="24"
                  />
                </svg>
              </div>
            </div>
          </a>

          <a className="navbar-link-btn w-inline-block" href="#projects-section">
            <div className="navlink-text">Selected Works</div>
            <div className="stroke-fill">
              <div className="stroke-fill-code w-embed">
                <svg fill="none" height="100%" viewBox="0 0 75 36" width="100%" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 21.5571C0 21.5571 6.56744 2.8501 15.4762 4.44988C25.7691 6.2982 5.66141 21.3471 12.5002 29.1915C22.9246 41.1486 29.3907 -7.93025 42.4603 1.12139C53.3211 8.6432 27.1823 26.7575 37.6982 34.7461C50.754 44.6641 58.0718 -7.92618 67.2619 5.59531C72.4564 13.2381 57.9637 30.3713 67.2619 30.3713C70.8333 30.3713 75 19.753 75 19.753"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="24"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <a aria-current="page" className="navbar-logo w-inline-block w--current" href="#section_hero" style={{ textDecoration: 'none' }}>
          <div className="logo-svg w-embed" style={{ display: 'flex', alignItems: 'center' }}>
            <svg fill="none" height="30" viewBox="0 0 140 30" width="140" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="24" fill="#FF5400" fontFamily="'Mdnichrometest', sans-serif" fontWeight="900" fontSize="28" letterSpacing="0.06em">
                AIYOOO
              </text>
            </svg>
          </div>
        </a>

        <div className="navbar-right">
          <div className="navbar-timing" style={{ fontWeight: 700, letterSpacing: '0.04em' }}>
            🟢 AVAILABLE FOR PROJECTS • 24/7 GLOBAL
          </div>
          <div className="cta-wrap">
            <a
              ref={ctaBtnRef}
              className="cta-btn w-inline-block"
              data-wf--cta-btn--variant="base"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
            >
              <div className="cta-text">Let's Talk</div>
              <div ref={arrowRef} className="cta-btn-arrow">
                <div className="svg-arrow-cta w-embed">
                  <svg fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_190_472)">
                      <path d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_190_472">
                        <rect fill="currentColor" height="10" transform="translate(10) rotate(90)" width="10" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div ref={fillHoverRef} className="cta-btn-fill-hover" />
            </a>
          </div>

          <div className="ham-btn" onClick={onOpenContact} role="button" tabIndex={0}>
            <div className="ham-svg w-embed">
              <div aria-label="Toggle Menu" className="two26-nav-toggle-btn" role="button" tabIndex={0}>
                <svg className="two26-toggle-svg" fill="none" viewBox="-2 6.52 36 36" xmlns="http://www.w3.org/2000/svg">
                  <path className="orange-path" d="M7.01247 34.0204C7.01247 34.0204 10.1314 34.0204 20.8246 34.0204C31.5179 34.0204 31.2364 16.0204 20.8246 16.0205C10.4128 16.0205 9.00975 16.0196 9.00975 16.0196C5.0415 16.0196 2 12.8812 2 9.00979C2 5.13839 5.13839 2 9.00979 2C12.8679 2.01076 15.9893 5.1363 16 8.98937V34.5196" stroke="#FF5400" strokeLinecap="round" strokeWidth="4" />
                  <path className="cross-path" d="M6 24.52H26" stroke="#FF5400" strokeLinecap="round" strokeWidth="0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
