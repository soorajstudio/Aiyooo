import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const StudioAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  const aboutText =
    "We believe visionary founders move faster with a high-impact digital presence. That’s why we engineer stunning custom websites, ATS-dominating resumes, cinematic AI videos, and scalable MVPs that turn visitors into loyal users and investors into backers.";

  useEffect(() => {
    const section = sectionRef.current;
    const para = paraRef.current;
    if (!section || !para) return;

    const ctx = gsap.context(() => {
      // Split text into character spans
      const chars = Array.from(para.querySelectorAll('.about-char')) as HTMLElement[];
      const pills = Array.from(section.querySelectorAll('.about-pill')) as HTMLElement[];

      if (!chars.length) return;

      gsap.set(chars, {
        color: 'rgba(255, 84, 0, 0.45)',
        scale: 1,
        rotation: 0,
        display: 'inline-block',
        transformOrigin: 'center center',
        textShadow: '0px 0px 0px rgba(255,84,0,0)',
        willChange: 'transform, color',
      });

      if (pills.length) {
        gsap.set(pills, {
          opacity: 0,
          scale: 0.6,
          y: 24,
          transformOrigin: 'center center',
          willChange: 'transform, opacity',
        });
      }

      const getPinDistance = () => {
        const width = window.innerWidth;
        if (width < 480) return 1150;
        if (width < 992) return 1550;
        return 2200;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getPinDistance()}`,
          pin: true,
          pinSpacing: true,
          scrub: window.innerWidth < 992 ? 0.6 : 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const totalChars = chars.length;
      const letterAnimSpan = 85;

      chars.forEach((char, i) => {
        const startTime = (i / totalChars) * letterAnimSpan;

        tl.to(
          char,
          {
            color: '#FF5400',
            scale: 1.12,
            rotation: () => gsap.utils.random(-4, 4),
            duration: 3.5,
            ease: 'power1.out',
          },
          startTime
        ).to(
          char,
          {
            color: '#000000',
            scale: 1,
            rotation: 0,
            duration: 3.5,
            ease: 'power1.inOut',
          },
          startTime + 3.5
        );
      });

      if (pills[0]) {
        tl.to(pills[0], { opacity: 1, scale: 1, y: 0, duration: 6, ease: 'back.out(2)' }, 35);
      }
      if (pills[1]) {
        tl.to(pills[1], { opacity: 1, scale: 1, y: 0, duration: 6, ease: 'back.out(2)' }, 72);
      }
      if (pills[2]) {
        tl.to(pills[2], { opacity: 1, scale: 1, y: 0, duration: 6, ease: 'back.out(2)' }, 96);
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-about">
      <div className="section-about-wrapper">
        <div className="about-pinned">
          <div className="about-text">A BIT ABOUT AIYOOO</div>
          <p ref={paraRef} className="about-para">
            {aboutText.split('').map((char, index) => (
              <span key={index} className="about-char" style={{ display: 'inline-block' }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </p>
          <div className="about-pill second">
            <div className="hero-pill-text">Obsessed with Speed &amp; Quality</div>
          </div>
          <div className="about-pill first">
            <div className="hero-pill-text">AI-Native Innovation</div>
          </div>
          <div className="about-pill third">
            <div className="hero-pill-text">Zero Generic Fluff</div>
          </div>
        </div>
      </div>
    </section>
  );
};
