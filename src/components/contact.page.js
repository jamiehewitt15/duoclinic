import React from 'react';
import Contact from "./contact.js"
import FindUs from "./findUs.js"
//import Featured from "./components/featured.js"


function Home() {
  return (
    <div className="App">
      <Contact />
      <FindUs />
      {/* <Featured /> */}
    </div>
  );
}

export default Home;
