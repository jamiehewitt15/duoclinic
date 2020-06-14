import React from 'react';
import './App.css';
import Hero from "./components/hero.js"
import Numbers from "./components/numbers.js"
import Trial from "./components/trial.js"
//import Featured from "./components/featured.js"


function App() {
  return (
    <div className="App">
      <Hero />
      <Numbers />
      <Trial />
      {/* <Featured /> */}
    </div>
  );
}

export default App;
