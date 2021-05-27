import React from 'react';
import countries from '../countries.json';

const CountryDetails = (props) => {
  const foundCountry = countries.find((country) => {
    return country.cca3;
  });

  return (
    <div key={foundCountry.cca3}>
      <h1>Country</h1>
    </div>
  );
};

export default CountryDetails;
