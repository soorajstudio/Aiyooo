import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExpertiseSlide {
  id: string;
  theme: string;
  tag: string;
  heading: string;
  videoSrc: string;
  subheading: string;
  description: string;
  buttonText: string;
}

const expertisesList: ExpertiseSlide[] = [
  {
    id: 'portfolio',
    theme: 'theme-white',
    tag: 'Digital Identity',
    heading: 'Stunning Portfolios',
    videoSrc: 'Media/Luca.mp4',
    subheading: 'Your Best Work, Showcased.',
    description:
      'We design engaging, high-performance portfolios that tell your unique story. Whether you are an artist, developer, or creator, our custom solutions make sure your work stands out from the crowd.',
    buttonText: 'Get Yours',
  },
  {
    id: 'resume',
    theme: 'theme-pink',
    tag: 'Career Boost',
    heading: 'Professional Resumes',
    videoSrc: 'Media/panda.mp4',
    subheading: 'Land Your Dream Job.',
    description:
      'We create visually compelling and ATS-friendly resumes that highlight your strengths and achievements. Give your career the competitive edge it needs with our modern resume formatting.',
    buttonText: 'Get Yours',
  },
  {
    id: 'ai-works',
    theme: 'theme-green',
    tag: 'Next Gen Media',
    heading: 'AI Videos & Images',
    videoSrc: 'Media/frozen.webm',
    subheading: 'Limitless Creativity.',
    description:
      'Harness the power of AI to generate breathtaking visuals and dynamic videos for your brand, marketing, or personal projects. Fast turnaround times with uncompromising quality.',
    buttonText: 'See Magic',
  },
  {
    id: 'websites',
    theme: 'theme-white',
    tag: 'Online Presence',
    heading: 'Custom Websites',
    videoSrc: 'Media/THIS_IS_4K_KUNG_FU_PANDA.mp4',
    subheading: 'Scalable & Responsive.',
    description:
      'From simple landing pages to complex web applications, our websites are built for speed, SEO, and massive conversions. Elevate your brand with a strong digital foundation.',
    buttonText: 'Build Yours',
  },
  {
    id: 'projects',
    theme: 'theme-pink',
    tag: 'End to End',
    heading: 'Startup Projects',
    videoSrc: 'Media/Luca.mp4',
    subheading: 'Bring Ideas to Life.',
    description:
      'Need an MVP, an internal tool, or a full-blown SaaS? We partner with startups to architect and build projects from the ground up, ensuring a smooth path to product-market fit.',
    buttonText: "Let's Talk",
  },
];

export const AiyoooExpertises: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.scroll', {
        autoAlpha: 0,
        duration: 0.2,
        scrollTrigger: {
          trigger: '.mwg_effect031',
          start: 'top top',
          end: 'top top-=1',
          toggleActions: 'play none reverse none',
        },
      });

      const slides = document.querySelectorAll<HTMLElement>('.mwg_effect031 .expertise-slide');

      slides.forEach((slide, index) => {
        const isLast = index === slides.length - 1;
        const contentWrapper = slide.querySelector<HTMLElement>('.expertise-wrap');
        const content = slide.querySelector<HTMLElement>('.expertise-content');

        if (!isLast && contentWrapper && content) {
          gsap.to(content, {
            rotationZ: (Math.random() - 0.5) * 10,
            scale: 0.7,
            rotationX: 40,
            ease: 'power1.in',
            scrollTrigger: {
              pin: contentWrapper,
              trigger: slide,
              start: 'top top',
              end: '+=' + window.innerHeight,
              scrub: true,
            },
          });

          const pinDuration = window.innerHeight;

          gsap.to(content, {
            autoAlpha: 0,
            ease: 'power1.inOut',
            scrollTrigger: {
              trigger: slide,
              start: `top+=${pinDuration * 0.75} top`,
              end: `top+=${pinDuration} top`,
              scrub: true,
            },
          });
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="expertises" className="section_expertises">
      <div className="padding-global">
        <div className="container-col-12">
          <div ref={wrapperRef} className="mwg_effect031">
            <div className="expertises-collection w-dyn-list">
              <div role="list" className="expertises-list w-dyn-items">
                {expertisesList.map((item) => (
                  <div
                    key={item.id}
                    role="listitem"
                    className="expertises-item w-dyn-item"
                    id={item.id}
                  >
                    <div className="expertise-slide">
                      <div className="expertise-wrap">
                        <div className={`expertise-content ${item.theme}`}>
                          <div className="expertise-content_top">
                            <div className="label">
                              <div className="paragraph-m">{item.tag}</div>
                            </div>
                            <h2 className="expertise-content_heading">{item.heading}</h2>
                          </div>
                          <div className="expertise-content_img">
                            <div className="medium-image">
                              <video
                                muted
                                loop
                                autoPlay
                                playsInline
                                webkit-playsinline="true"
                                src={item.videoSrc}
                                className="video"
                              />
                            </div>
                          </div>
                          <div className="expertise-content_bottom">
                            <h3 className="heading-xs">{item.subheading}</h3>
                            <p className="paragraph-m">{item.description}</p>
                            <div className="button-wrap">
                              <a href="#contact" className="button-default w-inline-block">
                                <div className="button-default__inner">
                                  <span className="button-default__background" />
                                  <span className="button-default__text">{item.buttonText}</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
