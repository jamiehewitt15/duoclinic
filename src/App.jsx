import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Layout from "./components/layout.jsx"
//import Featured from "./components/featured.js"

/**
 * Import all page components here
 */
import Home from './pages/home.page.jsx';
import Contact from './pages/contact.page.jsx';
import Covid from './pages/covid.page.jsx';
import About from './pages/about.page.jsx';
import Services from './pages/services.page.jsx';

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
          <Route path="/covid" component={Covid} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Layout>
    </Router>
      </main>
    </div>
  );
}


export default App;
