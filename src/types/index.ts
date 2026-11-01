export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  baseImg: string;
  hoverImg: string;
  logoImg: string;
  svgColor: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  titleLines: string[];
  description: string;
  lottieSrc?: string;
  className: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    SplitText: any;
    DrawSVGPlugin: any;
    MotionPathPlugin: any;
    CustomEase: any;
    CustomBounce: any;
    lenisInstance?: any;
  }
}
