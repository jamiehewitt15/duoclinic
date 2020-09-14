import React from 'react';
import PTSignUp from "../components/ptSignUp.jsx"
import Services from "../components/services.jsx"
import PersonalTrainer from "../components/personalTrainerHeader.jsx"
import PTMain from "../components/ptMain.jsx"

function AboutPage() {
  return (
    <div className="App">
      <PersonalTrainer />
      <PTMain />
      <Services />
      <PTSignUp />
      
    </ div>
  );
}

export default AboutPage;