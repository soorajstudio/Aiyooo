import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { AiyoooNavbar } from './components/AiyoooNavbar';
import { AiyoooHero } from './components/AiyoooHero';
import { AiyoooExpertises } from './components/AiyoooExpertises';
import { AiyoooContactSection } from './components/AiyoooContactSection';

export const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div id="home" className="page-wrapper">
        <AiyoooNavbar />

        <div className="main-wrapper">
          <AiyoooHero />
          <AiyoooExpertises />
          <AiyoooContactSection />
        </div>
      </div>
    </SmoothScroll>
  );
};

export default App;
