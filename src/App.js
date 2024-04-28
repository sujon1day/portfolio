import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-black'>

      <Navbar />
      <Banner />
      <Features />
      <Portfolio />
      <Contact />

    </div>
  );
}

export default App;
