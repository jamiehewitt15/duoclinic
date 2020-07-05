import React from 'react';
import Contact from "../components/contact.jsx"
import FindUs from "../components/findUs.jsx"
import FAQ from "../components/faq.jsx"
import Hero from "../components/aboutHero.jsx"
//import Featured from "./components/featured.js"


function AboutPage() {
  return (
    <div className="App">
      <Hero />
      <FAQ />
      <FindUs />
      <Contact />
    </ div>
  );
}

export default AboutPage;