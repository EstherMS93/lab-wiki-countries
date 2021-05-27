import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesList = () => {
  return (
    <div>
      <h1>Countries</h1>

      {countries.map(
        (country, index) => {
          return (
            <div key={country.cca3}>
              <ul>
                <Link exact path={`/CountriesList/${country.cca3}`}>
                  {`${country.name.official}`}
                </Link>
              </ul>
            </div>
          );
        },
      )}
    </div>
  );
};

export default CountriesList;
