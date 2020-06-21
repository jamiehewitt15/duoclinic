import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import Home from './components/home.page';
import Contact from './components/contact.page';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="/some/otherpage" component={SomeOtherPage} /> */}
    </Route>
  );