import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar';
import data from './countries.json';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState(data);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
        </div>
      </div>
    </div>
  );
}

export default App;
