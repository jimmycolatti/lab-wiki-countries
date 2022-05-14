import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetails from './components/CountryDetails';
import data from './countries.json';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path=":alpha3Code" element={<CountryDetails data={data} />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
