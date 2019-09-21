
import api from './api.js';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#filterText');

const { filterByText } = api();
import { renderList } from './showList.js';


searchForm.addEventListener('submit', async evt => {
  evt.preventDefault();
  if (searchInput.validity.valid) {

    const data = await filterByText(searchInput.value);
    renderList(data);
    
  }
});

export default searchForm;