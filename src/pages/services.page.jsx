import React from 'react';
import FindUs from "../components/findUs.jsx"
import Hero from "../components/servicesHero.jsx"
import Services from "../components/services.jsx"
import ClassList from "../components/classList.jsx"


function AboutPage() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <FindUs />
      <ClassList />
      
    </ div>
  );
}

export default AboutPage;