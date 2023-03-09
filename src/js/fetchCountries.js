const BASE_URL = 'https://restcountries.com/v2';

function fetchCountries(countriesName) {
  return fetch(
    `${BASE_URL}/name/${countriesName}?fields=name, name.official,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default { fetchCountries };
