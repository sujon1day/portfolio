import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

import services from './data/services';
import projects from './data/projects';
import pricing from './data/pricing';

function App() {
  return (
    <div className='bg-black'>

      <Navbar />
      <Banner />
      
      <Features servicesData={services}/>
      <Portfolio projectsData={projects}/>
      <Pricing pricingData={pricing}/>

      <Contact />

    </div>
  );
}

export default App;
