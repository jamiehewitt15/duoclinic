import React from 'react';
import Hero from "./hero.js"
import Numbers from "./numbers.js"
import Trial from "./trial.js"
import Video from "./videos.js"
import FindUs from "./findUs.js"
//import Featured from "./components/featured.js"


function Home() {
  return (
    <div className="App">
      <Hero />
      <Numbers />
      <Trial />
      <Video />
      <FindUs />
      {/* <Featured /> */}
    </div>
  );
}

export default Home;
