import React from 'react';
import FindUs from "../components/findUs.jsx"
import Hero from "../components/servicesHero.jsx"
import Services from "../components/services.jsx"


function AboutPage() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <FindUs />
      
    </ div>
  );
}

export default AboutPage;