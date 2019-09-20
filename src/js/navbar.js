
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#filterText');

searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid) {
    //   render shows
    //   setItem('navbar-input', searchInput.value);
    //   renderShowsDOM(searchInput.value);
    console.log("buscando..." + searchInput.value);
    }
  });

  export default searchForm;