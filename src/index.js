import './css/styles.css';
import API from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');

input.addEventListener('focusout', onSearch);

function onSearch() {
  const countryName = input.value;

  API.fetchCountries(countryName)
    .then(() => {
      console.log(countryName);
    })
    .catch(onFetchError);
}

function onFetchError(error) {
  console.log('ошибка');
}
