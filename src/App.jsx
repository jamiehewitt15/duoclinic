import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Layout from "./components/layout.jsx"
import ScrollToTop from "./components/scrollToTop.jsx"
//import Featured from "./components/featured.js"

/**
 * Import all page components here
 */
import Home from './pages/home.page.jsx';
import Contact from './pages/contact.page.jsx';
import Covid from './pages/covid.page.jsx';
import About from './pages/about.page.jsx';
import Services from './pages/services.page.jsx';
import Classes from './pages/classes.page.jsx';
import Tryus from './pages/tryus.page.jsx';
import DuoClinic from './pages/duoclinic.page.jsx';

export default function App() {
  return (
    <div className="App">
      <main>
      <Router>
      
      
      <ScrollToTop />
      <Layout >
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact"  component={Contact} />
          <Route path="/covid" component={Covid} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/duoclinic" component={DuoClinic} />
          <Route path="/classes" component={Classes} />
          <Route path="/tryus" component={Tryus} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
     </Layout>
    
    
    </Router>
      </main>
    </div>
  );
}