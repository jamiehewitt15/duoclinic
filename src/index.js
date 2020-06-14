import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Layout from "./components/layout"
import './styles/styles.min.css'
import './styles/slider.css'
import './styles/lazyLoad.css'
import './styles/plugin.css'
import './styles/styles.css'
//import './js/colophon.js'
//import './js/onScroll.js'
//import './js/jquery.bxslider.min.js'
//import './js/jquery.cycle2.carousel.js'
//import './js/jquery.min.js'

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
