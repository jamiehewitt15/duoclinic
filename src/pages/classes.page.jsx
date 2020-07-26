import React from 'react';
import Hero from "../components/classesHero.jsx"
import ClassList from "../components/classList.jsx"
import FindUs from "../components/findUs.jsx"
import Trial from "../components/trial.jsx"


function covidPage() {
  return (
    <div className="App">
      <Hero />
      <ClassList />
      <Trial />
      <FindUs />
    </div>
  );
}

export default covidPage;
