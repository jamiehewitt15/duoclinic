import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Layout from "./components/layout.jsx"
//import Featured from "./components/featured.js"

/**
 * Import all page components here
 */
import Home from './pages/home.page.jsx';
import Contact from './pages/contact.page.jsx';


function App() {
  return (
    <div className="App">
      <main>
      <Router>
      <Layout>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact"  component={Contact} />
          <Route path="/" component={Home} />
          <Route path="/" />
        </Switch>
      </div>
    </Layout>
    </Router>
      </main>
    </div>
  );
}


export default App;
