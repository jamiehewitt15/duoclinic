import React from 'react';
import Hero from "../components/hero.jsx"
import Numbers from "../components/numbers.jsx"
import Trial from "../components/trial.jsx"
import FindUs from "../components/findUs.jsx"
import Video from "../components/videos.jsx"
//import Featured from "./components/featured.js"
import "../components/componentStyles.css"

function Home() {
  return (
    <div className="App">
      <Hero />
      <div id="mobileTrial">
        <Trial />
      </div>
      
      <Video />
      <Numbers />
      <div id="desktopTrial">
        <Trial />
      </div>
      
      <FindUs />
      {/* <Featured /> */}
    </div>
  );
}

export default Home;
