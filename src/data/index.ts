import { ProjectItem, ServiceItem, TestimonialItem, FaqItem, NavLinkItem } from '../types';

export const aiyoooNavLinks: NavLinkItem[] = [
  { label: 'Home', href: '#home', isCurrent: true },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Resume', href: '#resume' },
  { label: 'AI Works', href: '#ai-works' },
  { label: 'Websites', href: '#websites' },
  { label: 'Projects', href: '#projects' },
  { label: 'Studio', href: '#ayioo-part' },
  { label: 'Contact Us', href: '#contact' },
];

export const studioNavLinks: NavLinkItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Selected Works', href: '#projects-section' },
  { label: 'FAQ', href: '#faq-section' },
];

export const heroTitles: string[] = [
  'Websites',
  'Portfolios',
  'Resumes',
  'AI Videos & Images',
  'Projects',
];

export const projectsData: ProjectItem[] = [
  {
    id: 'nexus-ai',
    title: 'NEXUS AI',
    category: 'AI Video & Generative Media Engine',
    baseImg: 'assets/images/6ab392697fe7cc9c077d1bb5_HeyGluco_2_hover.jpg',
    hoverImg: 'assets/images/6ab393770c697e34bcc4e4fb_Vertical6.jpg',
    logoImg: 'assets/images/6ab266d33e964df940c04833_HeyGluco.png',
    svgColor: '#fde1fd',
    href: '#contact',
  },
  {
    id: 'apex-protocol',
    title: 'APEX PROTOCOL',
    category: 'High-Converting Fintech & Web3 App',
    baseImg: 'assets/images/6ab270be80849a0a23faa24d_6ab27078c47da30c0af6b000_Bagel_1.jpeg',
    hoverImg: 'assets/images/6ab270be80849a0a23faa24a_6ab2707cc2a53666310f52d2_Bagel_2_hover.jpeg',
    logoImg: 'assets/images/6ab2675e0b996d1415be46a3_The_Bagel_Bar.png',
    svgColor: '#1a54e4',
    href: '#contact',
  },
  {
    id: 'foundercraft',
    title: 'FOUNDERCRAFT',
    category: 'Executive Portfolio & Personal Brand',
    baseImg: 'assets/images/6ab2723d53bb370f04afa38a_6ab2722877656a8e8b50e7c0_Tanti_1.jpeg',
    hoverImg: 'assets/images/6ab2723d53bb370f04afa391_6ab2722d77656a8e8b50e941_Tanti_2_hover.jpeg',
    logoImg: 'assets/images/6ab266e293685f22fedc573a_Tanti_Maria.png',
    svgColor: '#f25525',
    href: '#contact',
  },
  {
    id: 'talentboost',
    title: 'TALENTBOOST',
    category: 'Modern Resume & Career Growth Suite',
    baseImg: 'assets/images/6ab2723d53bb370f04afa381_6ab2721e4694c5c1d617273d_Munchies_1.jpeg',
    hoverImg: 'assets/images/6ab2723d53bb370f04afa375_6ab27223e0afaf640fd855d7_Munchies_2_hover.jpeg',
    logoImg: 'assets/images/6ab26718a85417b42d23712f_Munchies_and_Cream.png',
    svgColor: '#fde1fd',
    href: '#contact',
  },
  {
    id: 'launchpad-mvp',
    title: 'LAUNCHPAD MVP',
    category: 'End-to-End SaaS Startup Platform',
    baseImg: 'assets/images/6ab270be80849a0a23faa284_6ab270907f6e9d96146209a1_MVP_Thumbnail1.jpeg',
    hoverImg: 'assets/images/6ab270be80849a0a23faa29e_6ab27093a089e1fd370a7310_MVP_Thumbnail2_hover.jpeg',
    logoImg: 'assets/images/6ab26733f2ee3f3da2d70eeb_MVP.png',
    svgColor: '#153fe3',
    href: '#contact',
  },
  {
    id: 'hyperdrive',
    title: 'HYPERDRIVE',
    category: '4K Cinematic Product Commercials',
    baseImg: 'assets/images/6ab2723d53bb370f04afa37d_6ab272335c44422412d81fb1_YumYum_1.jpeg',
    hoverImg: 'assets/images/6ab2723d53bb370f04afa372_6ab2723985afb9378f444d8b_YumYum_2_hover.jpeg',
    logoImg: 'assets/images/6ab266f1e1ea593718edc309_YumYum.png',
    svgColor: '#e5c9df',
    href: '#contact',
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'custom-websites',
    titleLines: ['Custom', 'Websites'],
    description: 'High-performance, conversion-engineered websites built for speed, SEO, and unforgettable user experiences.',
    lottieSrc: 'https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52071_Brand%20strategy.json',
    className: 'one',
  },
  {
    id: 'digital-portfolios',
    titleLines: ['Digital', 'Portfolios'],
    description: 'Showcase your creative and technical work with high-impact portfolios designed to win clients, investors, and opportunities.',
    lottieSrc: 'https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f5206f_Brand%20identity.json',
    className: 'two',
  },
  {
    id: 'career-resumes',
    titleLines: ['Career', 'Resumes'],
    description: 'ATS-dominating executive resumes and dynamic career decks tailored to put you ahead in competitive hiring loops.',
    lottieSrc: 'https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f5206e_Web%20design.json',
    className: 'three',
  },
  {
    id: 'ai-media',
    titleLines: ['AI Videos', '& Media'],
    description: 'Cinematic 4K generative video, hyperrealistic image production, and next-gen visual storytelling powered by AI.',
    lottieSrc: 'https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f5206d_Illustration.json',
    className: 'four',
  },
  {
    id: 'startup-mvps',
    titleLines: ['Startup', 'MVPs'],
    description: 'Full-stack product builds from scratch to launch. We turn ideas into working platforms ready for real users and investors.',
    lottieSrc: 'https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52073_Motion%20design.json',
    className: 'five',
  },
  {
    id: 'branding-motion',
    titleLines: ['Branding &', 'Motion'],
    description: 'Distinctive visual identity, kinetic typography, and fluid motion design that sets your startup apart from day one.',
    lottieSrc: 'https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52070_Packaging.json',
    className: 'six',
  },
  {
    id: 'rapid-execution',
    titleLines: ['Rapid', 'Execution'],
    description: 'Zero fluff, no endless meetings. High-velocity sprints and dedicated engineering to launch your vision at record speed.',
    lottieSrc: 'https://cdn.prod.website-files.com/6aaad679fdb9d914f7f52049/6aaad679fdb9d914f7f52072_Art%20direction.json',
    className: 'seven',
  },
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'marcus-vance',
    quote: 'AIYOOO delivered our entire platform MVP weeks ahead of schedule',
    name: 'Marcus Vance',
    role: 'Founder & CEO, Nexus Protocol',
    image: 'assets/images/6ab3d538dbdbc6a5f1d1d3f4_Rux.jpg',
    text: 'Working with the AIYOOO team was the single best decision we made for our seed round. They built our responsive web app, designed our investor deck, and produced cinematic AI media that blew our investors away. Fast, responsive, and insanely talented!',
  },
  {
    id: 'elena-rostova',
    quote: 'Our new website doubled our conversion rate in the first week',
    name: 'Elena Rostova',
    role: 'Head of Growth, HyperDrive Media',
    image: 'assets/images/6ab3d1f99d28cf11d2e8f501_luiza.jpg',
    text: 'AIYOOO took our vague ideas and transformed them into a breathtaking digital experience. Their combination of modern web development and AI-generated video is unmatched in the industry. We can\'t recommend them highly enough!',
  },
  {
    id: 'devon-chen',
    quote: 'The AI videos they created went completely viral across social',
    name: 'Devon Chen',
    role: 'Creative Director, Pulse AI',
    image: 'assets/images/6ab3d5ec9cfd634776e95758_Vlad.jpg',
    text: 'The quality of AI videos and images AIYOOO produces is indistinguishable from top-tier Hollywood production. Their attention to lighting, pacing, and detail gave our product launch massive organic reach.',
  },
  {
    id: 'sarah-jenkins',
    quote: 'Landed my dream Principal role with their portfolio and resume revamp',
    name: 'Sarah Jenkins',
    role: 'Staff Product Designer',
    image: 'assets/images/6ab3d72a667c6ab560a03d5b_Ionut.jpg',
    text: 'AIYOOO completely rebuilt my personal portfolio and structured an ATS-optimized executive resume. Within two weeks of launching it, I had interviews lined up with 4 top-tier tech startups. Truly a game-changer for my career.',
  },
  {
    id: 'arjun-mehta',
    quote: 'From concept to a scalable live product in under 30 days',
    name: 'Arjun Mehta',
    role: 'Co-Founder, SaaSify Labs',
    image: 'assets/images/6ab3d7f19cfd634776eaf212_Monica.jpg',
    text: 'Partnering with AIYOOO for our startup launch was effortless from day one. Zero fluff, rapid execution, and exceptional engineering quality. They don\'t just build websites—they understand startup growth.',
  },
];

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What services does AIYOOO provide?',
    answer: 'We are an end-to-end startup creative and engineering studio. We build custom websites, craft high-impact personal portfolios, format ATS-dominating resumes, generate 4K cinematic AI videos and images, and engineer full-stack MVP web apps for visionary founders.',
  },
  {
    id: 'faq-2',
    question: 'How fast is your project turnaround time?',
    answer: 'We pride ourselves on startup speed. Custom landing pages and portfolios typically ship in 3–7 business days. AI media campaigns take 2–5 days, and full-scale MVP platforms are launched in rapid 2-to-4 week agile sprints.',
  },
  {
    id: 'faq-3',
    question: 'Can you revamp our existing website or brand?',
    answer: 'Absolutely. Whether your existing site needs a modern visual facelift, faster load times, SEO optimization, or a complete architectural rebuild, we modernize your digital presence without breaking your existing workflow.',
  },
  {
    id: 'faq-4',
    question: 'Do you work with clients globally?',
    answer: 'Yes! AIYOOO operates globally with founders, creators, and teams across North America, Europe, Asia, and beyond. We work asynchronously with clear milestones and regular sprint demos.',
  },
  {
    id: 'faq-5',
    question: 'How does your AI video and media generation work?',
    answer: 'We combine state-of-the-art generative video models, photorealistic image synthesis, custom prompt engineering, and cinematic color grading to produce ultra-high-definition visual assets tailored to your brand identity.',
  },
  {
    id: 'faq-6',
    question: 'What tech stack do you use for websites and MVPs?',
    answer: 'We leverage modern, scalable technologies tailored to your project: Webflow and custom HTML5/CSS/JavaScript for blazing-fast marketing sites, and React, Next.js, Node.js, and serverless architectures for full-stack startup MVPs.',
  },
  {
    id: 'faq-7',
    question: 'How much does a project with AIYOOO cost?',
    answer: 'Every startup is unique. We price transparently based on project scope, deliverables, and timeline—with zero hidden fees or surprise retainers. Reach out at hello@aiyooo.com for a tailored proposal.',
  },
  {
    id: 'faq-8',
    question: 'Do you help early-stage startups build MVPs?',
    answer: 'Yes, MVP development is in our DNA. We help founders validate concepts, build clickable prototypes, and launch production-ready products engineered to acquire real users and impress seed investors.',
  },
  {
    id: 'faq-9',
    question: 'Do you handle both design and full-stack development?',
    answer: 'Yes! Unlike traditional design-only agencies, AIYOOO is a full-stack studio. We handle everything from UI/UX and motion graphics to frontend engineering, API integrations, and cloud deployment.',
  },
  {
    id: 'faq-10',
    question: 'How do we get started?',
    answer: "Simply click 'Let's Talk' or send us an email at hello@aiyooo.com with your project goals, links, and target timeline. We will respond within 24 hours to schedule a quick discovery call.",
  },
];
