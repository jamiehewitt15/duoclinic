import React from 'react';
import FindUs from "../components/findUs.jsx"
import FAQ from "../components/faq.jsx"
import Hero from "../components/aboutHero.jsx"
import OurApproach from "../components/ourApproach.jsx"
import Team from "../components/team.jsx"
import Video from "../components/videos.jsx"


function AboutPage() {
  return (
    <div className="App">
      <Hero />
      <OurApproach />
      <Team />
      <FAQ />
      <Video />
      <FindUs />
    </ div>
  );
}

export default AboutPage;