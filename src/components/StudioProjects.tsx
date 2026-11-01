import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data';

gsap.registerPlugin(ScrollTrigger);

export const StudioProjects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Projects End reveal on scroll
      const endPara = section.querySelector('.projects-end-para');
      const pills = section.querySelectorAll('.projects-pill-first, .projects-pill-second, .projects-pill-fourth');
      const projectBtn = section.querySelector('.project-btn');

      if (endPara) {
        gsap.fromTo(
          endPara,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: endPara,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (pills.length) {
        gsap.fromTo(
          pills,
          { opacity: 0, scale: 0.5, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: endPara,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      if (projectBtn) {
        gsap.fromTo(
          projectBtn,
          { opacity: 0, scale: 0.6, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: endPara,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-projects" id="projects-section">
      <div className="section-projects-wrapper">
        <div className="section-projects-header">
          <div className="section-about-text">AIYOOO Portfolio</div>
          <div className="section-heading-wrapper">
            <h2 className="section-heading less-max-w">Selected Works</h2>
          </div>
        </div>

        <div className="projects-vertical-wrapper">
          <div className="projects-list-wrapper w-dyn-list">
            <div className="projects-list w-dyn-items" role="list">
              {projectsData.map((project) => (
                <div key={project.id} className="project-item w-dyn-item" role="listitem">
                  <a className="project-card w-inline-block" href={project.href}>
                    <div className="project-card-img-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                      <img
                        alt={project.title}
                        className="project-img-hover"
                        loading="lazy"
                        src={project.hoverImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <div className="project-img-svg w-embed" style={{ color: project.svgColor }}>
                        <svg
                          fill="none"
                          height="100%"
                          viewBox="0 0 728 1020"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M25.002 153.857C25.002 153.857 151.002 -28.0122 236.002 40.3572C351.002 132.857 -86.2292 534.598 62.5019 617.857C173.257 679.857 466.502 -70.1428 646.002 40.3572C889.446 190.221 -74.3269 862.107 151.002 983.857C337.002 1084.36 526.502 453.148 665.002 551.357C803.502 649.566 415.502 926.187 501.002 983.857C586.502 1041.53 703.002 794.357 703.002 794.357"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="50"
                          />
                        </svg>
                      </div>
                      <img
                        alt={project.title}
                        className="project-img"
                        loading="lazy"
                        src={project.baseImg}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>

                    <div className="project-detail">
                      <div className="project-logo">
                        <img
                          alt={project.title}
                          className="project-logo-img"
                          loading="lazy"
                          src={project.logoImg}
                        />
                      </div>
                      <div className="project-detail-header">
                        <div className="project-detail-btm">
                          <div className="project-name-text">{project.title}</div>
                        </div>
                        <div className="project-detail-text">{project.category}</div>
                      </div>
                      <div className="projects-arrow">
                        <div className="code-embed-7 w-embed">
                          <svg fill="none" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M1.17273 17.9405L18.6533 2.29983M5.84177 1.17288L18.6533 2.29983L18.3543 15.1573"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.34564"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-end">
            <div className="projects-end-inner-wrapper">
              <p className="projects-end-para">
                WE BUILD WHAT MATTERS: WEBSITES, PORTFOLIOS, AI MEDIA &amp; MVPS.
              </p>
              <div className="projects-pill-first">
                <div className="hero-pill-text">100% Custom Built</div>
              </div>
              <div className="projects-pill-second">
                <div className="hero-pill-text">Lightning Fast Delivery</div>
              </div>
              <div className="projects-pill-fourth">
                <div className="hero-pill-text">Built to Scale</div>
              </div>
              <a className="project-btn w-inline-block" href="#contact">
                <div className="cta-text">Start Your Project</div>
                <div className="cta-btn-arrow">
                  <div className="svg-arrow-cta w-embed">
                    <svg fill="none" height="10" viewBox="0 0 10 10" width="10" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_190_472_p)">
                        <path
                          d="M1.46439 8.53621L8.53546 1.46515M3.05538 1.28837L8.53546 1.46515L8.71223 6.94522"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_190_472_p">
                          <rect fill="currentColor" height="10" transform="translate(10) rotate(90)" width="10" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="cta-btn-fill-hover" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
