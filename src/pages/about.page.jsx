import React from 'react';
import FindUs from "../components/findUs.jsx"
import FAQ from "../components/faq.jsx"
import Hero from "../components/aboutHero.jsx"
import OurApproach from "../components/ourApproach.jsx"
import Team from "../components/team.jsx"


function AboutPage() {
  return (
    <div className="App">
      <Hero />
      <OurApproach />
      <FAQ />
      <Team />
      <FindUs />
    </ div>
  );
}

export default AboutPage;