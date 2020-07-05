import React from 'react';
import Contact from "../components/contact.jsx"
import FindUs from "../components/findUs.jsx"
import FAQ from "../components/faq.jsx"
import Hero from "../components/aboutHero.jsx"
import OurApproach from "../components/ourApproach.jsx"


function AboutPage() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <OurApproach />
      <FAQ />
      <FindUs />
    </ div>
  );
}

export default AboutPage;