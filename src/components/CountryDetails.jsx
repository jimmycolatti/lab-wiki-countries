import { Link, useParams } from 'react-router-dom';
import data from '../countries.json';

const CountryDetails = () => {
  const { alpha3Code } = useParams();

  const style = {
    position: 'fixed',
    top: '20%',
    left: '60%',
    right: '10%',
    border: '1px solid black',
    padding: '25px',
  };

  const currentCountry = data.find(
    (country) => country.alpha3Code === alpha3Code
  );

  const findBorderCountriesNames = (border) => {
    return data.find((country) => country.alpha3Code === border);
  };

  const flagImg = `https://flagpedia.net/data/flags/icon/72x54/${currentCountry.alpha2Code.toLowerCase()}.png`;

  return (
    <div style={style} key={alpha3Code}>
      <img src={flagImg} alt="flag" />
      <h1>{currentCountry.name.official}</h1>
      <hr />
      <p>
        <b>Capital</b> {currentCountry.capital[0]}{' '}
      </p>
      <hr />
      <p>
        <b>Area</b> {currentCountry.area}
      </p>
      <hr />
      <b>Borders</b>
      <ul>
        {currentCountry.borders.map((border) => {
          let borderCountry = findBorderCountriesNames(border);
          return (
            <Link to={`/${border}`}>
              <li>{borderCountry.name.common}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetails;
