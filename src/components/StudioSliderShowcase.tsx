import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const showcaseImages = [
  'assets/images/6ab263498b14a38a7a109afc_Shot_2.jpg',
  'assets/images/6ab2633da8fa39ec5216880b_Shot_4.jpg',
  'assets/images/6ab2633d3e5b6a35a15d74d7_Shot_5.jpg',
  'assets/images/6ab2634dc8995221637e120c_Shot_6.png',
];

export const StudioSliderShowcase: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let animFrame: number;
    let currentX = 0;
    let targetDirection = -1;
    let currentDirection = -1;
    let scrollVelocityBoost = 0;

    const ctx = gsap.context(() => {
      const slides = Array.from(track.querySelectorAll('.showcase-slide')) as HTMLElement[];
      const numInitial = showcaseImages.length;
      let setWidth = 0;

      const measureSetWidth = () => {
        if (slides.length > numInitial) {
          const firstSlide = slides[0];
          const firstClone = slides[numInitial];
          if (firstSlide && firstClone) {
            setWidth = firstClone.offsetLeft - firstSlide.offsetLeft;
          }
        }
        if (setWidth <= 0) {
          setWidth = slides[0]?.offsetWidth * numInitial || 1400;
        }
      };

      measureSetWidth();
      window.addEventListener('resize', measureSetWidth);

      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const dir = self.direction === 1 ? -1 : 1;
          targetDirection = dir;
          const vel = Math.abs(self.getVelocity() || 0);
          scrollVelocityBoost = Math.min(vel / 220, 15) * dir;
        },
      });

      const tick = () => {
        currentDirection += (targetDirection - currentDirection) * 0.06;
        scrollVelocityBoost *= 0.92;
        const delta = 1.6 * currentDirection + scrollVelocityBoost;
        currentX += delta;

        if (setWidth > 0) {
          while (currentX <= -setWidth) currentX += setWidth;
          while (currentX > 0) currentX -= setWidth;
        }

        gsap.set(track, { x: currentX, force3D: true });
        animFrame = requestAnimationFrame(tick);
      };

      animFrame = requestAnimationFrame(tick);
    }, wrapperRef);

    return () => {
      cancelAnimationFrame(animFrame);
      ctx.revert();
    };
  }, []);

  // Duplicate slides 3 times for seamless wrapping
  const allSlides = [...showcaseImages, ...showcaseImages, ...showcaseImages];

  return (
    <section id="slider-showcase" className="section-slider-showcase">
      <div ref={wrapperRef} className="slider-showcase-wrapper" style={{ overflow: 'hidden' }}>
        <div
          ref={trackRef}
          className="showcase-track"
          style={{ display: 'flex', gap: '2rem', willChange: 'transform' }}
        >
          {allSlides.map((src, idx) => (
            <div
              key={idx}
              className="showcase-slide"
              style={{
                flexShrink: 0,
                width: '380px',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <img
                src={src}
                alt="AIYOOO Showcase"
                loading="lazy"
                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
