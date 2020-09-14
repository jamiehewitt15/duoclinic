import React from 'react';
import PTSignUp from "../components/ptSignUp.jsx"
import Services from "../components/services.jsx"
import PersonalTrainer from "../components/personalTrainerHeader.jsx"

function AboutPage() {
  return (
    <div className="App">
      <PersonalTrainer />
      <Services />
      <PTSignUp />
      
    </ div>
  );
}

export default AboutPage;