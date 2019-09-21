
import api from './api.js';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#filterText');

const { filterByText } = api();


searchForm.addEventListener('submit', evt => {
  evt.preventDefault();
  if (searchInput.validity.valid) {
    //   render shows
    //   setItem('navbar-input', searchInput.value);
    //   renderShowsDOM(searchInput.value);
    console.log("buscando..." + searchInput.value);

    console.log('buscando por filtro');


    // const data = await filerByText(searchInput.value);

    // renderList(data);
  }
});

export default searchForm;