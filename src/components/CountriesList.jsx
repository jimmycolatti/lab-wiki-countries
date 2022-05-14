import { Link } from 'react-router-dom';
import data from '../countries.json';
import { useState } from 'react';

const CountriesList = () => {
  const [countries, setCountries] = useState(data);

  const style = {
    // position: 'relative',
    // top: '10%',
    // left: '-20%',

    overflowY: 'scroll',
    maxHeight: '80vh',
    width: '40vw',
    // boxShadow: '5px 1px 5px #9E9E9E',
  };

  return (
    <div style={style}>
      {countries?.map((country) => {
        return (
          <Link key={country.alpha3Code} to={`${country.alpha3Code}`}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flag"
            />
            <p> {country.name.common}</p>
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default CountriesList;
