import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router
} from "react-router-dom";
import App from './App';
import {createBrowserHistory} from "history";

ReactDOM.render(
  <React.StrictMode>
          <Router history={createBrowserHistory()}>
    <App />
          </Router>
  </React.StrictMode>,
  document.getElementById('root')
);