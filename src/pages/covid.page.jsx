import React from 'react';
import Hero from "../components/covidHero.jsx"
import CovidInfo from "../components/covidInfo.jsx"
import FindUs from "../components/findUs.jsx"
//import Featured from "./components/featured.js"


function covidPage() {
  return (
    <div className="App">
      <Hero />
      <CovidInfo />
      <FindUs />
      {/* <Featured /> */}
    </div>
  );
}

export default covidPage;
