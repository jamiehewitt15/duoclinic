import React from 'react';
import Contact from "../components/contact.jsx"
import FindUs from "../components/findUs.jsx"
import Tube from "../components/tube.jsx"
import Map from "../components/map.jsx"
import Hero from "../components/contactHero.jsx"
//import Featured from "./components/featured.js"


function ContactPage() {
  return (
    <div className="App">
      <Hero />
      <Contact />
      <Map />
      <Tube />
      <FindUs />
      {/* <Featured /> */}
    </div>
  );
}

export default ContactPage;
