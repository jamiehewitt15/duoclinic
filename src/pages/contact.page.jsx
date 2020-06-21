import React from 'react';
import Contact from "../components/contact.jsx"
import FindUs from "../components/findUs.jsx"
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
