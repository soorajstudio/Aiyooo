import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { heroTitles } from '../data';

export const AiyoooHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth <= 991) return;

    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.querySelectorAll('.title_item')) as HTMLElement[];
    if (!items.length) return;

    let activeIndex = 0;
    const itemHeight = items[0].offsetHeight || 60;
    const totalItems = items.length;
    const intervalTime = 1500;

    const setActive = (index: number) => {
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    };

    setActive(0);
    gsap.set(container, { y: 0 });

    const interval = setInterval(() => {
      activeIndex = (activeIndex + 1) % totalItems;
      setActive(activeIndex);

      gsap.to(container, {
        y: -activeIndex * itemHeight,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header id="section_hero" className="section_hero">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container-col-12 w-container">
          <div className="expertise-hero">
            <video
              muted
              loop
              autoPlay
              playsInline
              webkit-playsinline="true"
              src="Media/THIS_IS_4K_KUNG_FU_PANDA.mp4"
              className="video"
            />
            <div className="expertise-hero_content">
              <div className="expertise-hero_title">
                <div className="heading-m">AIYOOO Startup</div>
              </div>

              {/* Desktop vertical ticker */}
              <div ref={containerRef} className="titles_container hide-tablet-mobile">
                {heroTitles.map((title) => (
                  <div key={title} className="title_item">
                    <div className="heading-m">{title}</div>
                  </div>
                ))}
              </div>

              {/* Mobile / Tablet vertical scroll wrapper */}
              <div className="vertical-scroll-wrapper hide-desktop">
                <div className="title_container-m">
                  {heroTitles.map((title) => (
                    <div key={`m-${title}`} className="title_item">
                      <div className="heading-m">{title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
