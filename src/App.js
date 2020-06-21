import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
//import Featured from "./components/featured.js"

/**
 * Import all page components here
 */
import Home from './components/home.page';
import Contact from './components/contact.page';


function App() {
  return (
    <div className="App">
      <main>
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Contact />
          </Route>
          <Route path="/contact" component={Contact}>
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
      </main>
    </div>
  );
}


export default App;
