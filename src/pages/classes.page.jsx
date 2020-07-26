import React from 'react';
import Hero from "../components/classesHero.jsx"
import CovidInfo from "../components/covidInfo.jsx"
import FindUs from "../components/findUs.jsx"
import Trial from "../components/trial.jsx"


function covidPage() {
  return (
    <div className="App">
      <Hero />
      <CovidInfo />
      <Trial />
      <FindUs />
    </div>
  );
}

export default covidPage;
