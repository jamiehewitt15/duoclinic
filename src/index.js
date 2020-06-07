import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Layout from "./components/layout"
import './styles/style.min.css'
//import 'https://w10.fit/wp-content/uploads/hummingbird-assets/b7542256f39ec5b29a660c77ce5b9e42.css'

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
