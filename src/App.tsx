import React, { useState } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { AiyoooNavbar } from './components/AiyoooNavbar';
import { AiyoooHero } from './components/AiyoooHero';
import { AiyoooExpertises } from './components/AiyoooExpertises';
import { AiyoooContactSection } from './components/AiyoooContactSection';
import { StudioHeader } from './components/StudioHeader';
import { StudioContactModal } from './components/StudioContactModal';
import { StudioHero } from './components/StudioHero';
import { StudioAbout } from './components/StudioAbout';
import { StudioSliderShowcase } from './components/StudioSliderShowcase';
import { StudioProjects } from './components/StudioProjects';
import { StudioServices } from './components/StudioServices';
import { StudioTestimonials } from './components/StudioTestimonials';
import { StudioFaq } from './components/StudioFaq';
import { StudioFooter } from './components/StudioFooter';

export const App: React.FC = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <SmoothScroll>
      <div id="home" className="page-wrapper">
        <AiyoooNavbar />

        <div className="main-wrapper">
          <AiyoooHero />
          <AiyoooExpertises />
          <AiyoooContactSection />

          {/* Ayioo Studio Part Section */}
          <section id="ayioo-part" className="ayioo-part">
            <div className="page">
              <StudioHeader onOpenContact={() => setContactModalOpen(true)} />
              <StudioContactModal
                isOpen={contactModalOpen}
                onClose={() => setContactModalOpen(false)}
              />
              <main className="main">
                <StudioHero />
                <StudioAbout />
                <StudioSliderShowcase />
                <StudioProjects />
                <StudioServices />
                <StudioTestimonials />
                <StudioFaq />
              </main>
              <StudioFooter />
            </div>
          </section>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default App;
