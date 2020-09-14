import React from 'react';
import FindUs from "../components/findUs.jsx"
import FAQ from "../components/faq.jsx"
import TryUsHeader from "../components/tryUsHeader.jsx"
import TryUsText from "../components/tryUsText.jsx"

function Tryus() {
  return (
    <div className="App">
      <TryUsHeader />
      <TryUsText />
      <FAQ />
      <FindUs />
      
    </ div>
  );
}

export default Tryus;