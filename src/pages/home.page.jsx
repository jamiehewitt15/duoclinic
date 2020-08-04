import React from 'react';
import Hero from "../components/hero.jsx"
import Numbers from "../components/numbers.jsx"
import Trial from "../components/trial.jsx"
import FindUs from "../components/findUs.jsx"
//import Featured from "./components/featured.js"


function Home() {
  return (
    <div className="App">
      <Hero />
      <Numbers />
      <Trial />
      <FindUs />
      {/* <Featured /> */}
    </div>
  );
}

export default Home;
