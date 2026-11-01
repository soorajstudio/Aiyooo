import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StudioHero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const marqueeUnitRef = useRef<SVGTSpanElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const bgPathRef = useRef<SVGPathElement>(null);
  const maskPathRef = useRef<SVGPathElement>(null);
  const textGroupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation for Heading & Pills
      const heading = heroEl.querySelector('.heading') as HTMLElement;
      const pills = heroEl.querySelectorAll('.hero-pill');

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: heroEl,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (pills.length) {
        gsap.fromTo(
          pills,
          { opacity: 0, scale: 0.4, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: heroEl,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // 2. Marquee Infinite Animation
      const bgPath = bgPathRef.current;
      const maskPath = maskPathRef.current;
      const textPath = textPathRef.current;
      const unit = marqueeUnitRef.current;
      const textGroup = textGroupRef.current;

      if (bgPath && maskPath && textPath) {
        const unitLength = unit ? unit.getComputedTextLength() : 1600;
        const speedDuration = unitLength / 75;

        gsap.to(textPath, {
          attr: { startOffset: -unitLength },
          duration: speedDuration,
          ease: 'none',
          repeat: -1,
        });

        gsap.set([bgPath, maskPath], { strokeDasharray: 2000, strokeDashoffset: 2000 });

        gsap.to([bgPath, maskPath], {
          strokeDashoffset: 0,
          duration: 1.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroEl.querySelector('.hero-marquee'),
            start: 'top 85%',
            once: true,
          },
          onComplete: () => {
            if (textGroup) {
              textGroup.removeAttribute('mask');
            }
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const marqueeRepeats = Array(8).fill(null);

  return (
    <section ref={heroRef} className="section-hero">
      <div className="section-hero-wrapper">
        <div className="hero-text">
          <div className="hero-pill two">
            <div className="hero-pill-text">Next-Gen Startup Studio</div>
          </div>
          <h1 className="heading">LOOKING SUSPICIOUSLY GOOD</h1>
          <div className="hero-pill one">
            <div className="hero-pill-text">Websites &amp; AI Media</div>
          </div>
          <div className="hero-pill three">
            <div className="hero-pill-text">Startup MVPs &amp; Portfolios</div>
          </div>
        </div>

        <div className="hero-video-loop">
          <div
            className="hero-video-bg w-background-video w-background-video-atom"
            data-autoplay="true"
            data-loop="true"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/6a7d9d7d7c99784ba2cac874%2F6a7db9b17a581584f4171aad_Hero_poster.0000000.jpg")',
              }}
            >
              <source
                src="https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52055_Hero_mp4.mp4"
                type="video/mp4"
              />
              <source
                src="https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52055_Hero_webm.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>

        <div className="hero-path-svg-left">
          <div className="code-embed-3 w-embed">
            <svg fill="none" height="100%" viewBox="0 0 229 599" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.502 584.112C104.502 557.112 147.911 474.964 143.002 393.612C139.502 335.612 106.002 281.612 59.0025 252.612C7.82072 221.032 -4.20053 385.572 52.5031 405.612C140.218 436.612 225.002 369.112 212.002 252.612C208.376 220.111 192.539 178.612 152.002 121.612C117.866 73.6124 42.0029 11.6124 42.0029 11.6124"
                stroke="#FF5400"
                strokeWidth="30"
              />
            </svg>
          </div>
        </div>

        <div className="hero-path-svg-right">
          <div className="code-embed-2 w-embed">
            <svg fill="none" height="100%" viewBox="0 0 354 487" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M250.687 12.2982C192.69 52.7982 114.69 199.814 245.687 315.798C376.684 431.783 364.19 140.889 235.187 83.2982C153.19 46.6926 54.8365 106.798 30.1893 172.298C-59.5565 410.798 277.687 471.798 277.687 471.798"
                stroke="#FF5400"
                strokeWidth="30"
              />
            </svg>
          </div>
        </div>

        {/* Hero Marquee Ribbon */}
        <div className="hero-marquee">
          <div className="code-embed-8 w-embed w-script">
            <svg
              preserveAspectRatio="xMidYMid meet"
              style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
              viewBox="0 0 1440 370"
            >
              <defs>
                <path
                  id="hero-marquee-curve-react"
                  d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117 L 5000 507"
                  fill="none"
                />
                <mask id="hero-marquee-text-mask-react" maskUnits="userSpaceOnUse">
                  <path
                    ref={maskPathRef}
                    d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="220"
                  />
                </mask>
              </defs>

              <path
                ref={bgPathRef}
                className="hero-marquee-bg"
                d="M-43.0867 292.81C179.631 174.299 464.078 116.458 712.699 90.6403C934.59 67.5984 1166.5 74.6231 1436.89 105.117"
                fill="none"
                stroke="#FF5400"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="154"
              />

              <g ref={textGroupRef} className="hero-marquee-text-group" mask="url(#hero-marquee-text-mask-react)">
                <text
                  alignmentBaseline="central"
                  className="hero-marquee-text"
                  dominantBaseline="central"
                  fill="#FFFFFF"
                  fontFamily="inherit"
                  fontSize="80"
                  fontWeight="800"
                  style={{
                    letterSpacing: '0.04em',
                    userSelect: 'none',
                    dominantBaseline: 'central',
                    alignmentBaseline: 'central',
                  }}
                >
                  <textPath
                    ref={textPathRef}
                    alignmentBaseline="central"
                    className="hero-marquee-tp"
                    dominantBaseline="central"
                    href="#hero-marquee-curve-react"
                    startOffset="0"
                  >
                    <tspan ref={marqueeUnitRef} alignmentBaseline="central" className="marquee-unit" dominantBaseline="central">
                      CUSTOM WEBSITES &bull; DYNAMIC PORTFOLIOS &bull; ATS RESUMES &bull; AI VIDEOS &amp; IMAGES &bull; STARTUP MVPS &bull;&nbsp;
                    </tspan>
                    {marqueeRepeats.map((_, i) => (
                      <tspan key={i} alignmentBaseline="central" dominantBaseline="central">
                        CUSTOM WEBSITES &bull; DYNAMIC PORTFOLIOS &bull; ATS RESUMES &bull; AI VIDEOS &amp; IMAGES &bull; STARTUP MVPS &bull;&nbsp;
                      </tspan>
                    ))}
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
