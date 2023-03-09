import './css/styles.css';
import API from './js/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countriesList = document.querySelector('.country-list');

input.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
  const countryName = input.value.trim();

  if (countryName.length > 0) {
    API.fetchCountries(countryName)
      .then(countries => {
        renderCountries(countries);
      })
      .catch(error => {
        onFetchError(error);
      });
  }
}

function renderCountries(countries) {
  const markup = countries
    .map(({ name, capital, population, flags, languages }) => {
      return `<li><h2>${name}</h2><p>Capital: <span>${capital}</span></p><p>Population: <span>${population}</span></p><p>Languages: <span>${languages.name}</span></p></li>`;
    })
    .join('');
  countriesList.innerHTML = markup;

  console.dir(countries);
}

function onFetchError(error) {
  console.log(error);
}
