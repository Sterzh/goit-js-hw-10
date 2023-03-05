const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries(countriesName) {
  return fetch(
    `${BASE_URL}/name/${countriesName}?fields=name.official,capital,population,flags,languages`
  ).then(r => {
    r.json();
  });
}

export default { fetchCountries };
