import React from 'react';
import FindUs from "../components/findUs.jsx"
import Services from "../components/services.jsx"
import PersonalTrainer from "../components/personalTrainerHeader.jsx"

function AboutPage() {
  return (
    <div className="App">
      <PersonalTrainer />
      <Services />
      <FindUs />
      
    </ div>
  );
}

export default AboutPage;