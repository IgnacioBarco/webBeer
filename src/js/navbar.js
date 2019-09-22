
import api from './api.js';
import { renderList, renderListLimited, renderListNoResults } from './showList.js';

const searchForm = document.querySelector('.search-form');
const searchInputText = document.querySelector('#filterText');
const searchInputDate = document.querySelector('#filterDate');
const navbarLogo = document.querySelector('.navbar-logo');

const { getBeers } = api();
const { filterByText } = api();

navbarLogo.addEventListener('click', async evt => {
  location.assign("/");

});

searchForm.addEventListener('submit', async evt => {
  evt.preventDefault();
  if (searchInputText.validity.valid) {

    if (searchInputText.value.length !== 0 || searchInputDate.value.length !== 0) {

      console.log('Texto: ' + searchInputText.value);
      console.log('Date: ' + searchInputDate.value);

      var text = false;
      var date = false;
      var data = {};
      var dataFilterByDate = [];


      if (searchInputText.value.length !== 0) {
        text = true;
        data = await filterByText(searchInputText.value);
      } else {
        data = await getBeers();
      }



      if (searchInputDate.value.length !== 0) {
        date = true;
        var aux = searchInputDate.value;
        var formatDate = `${aux[5]}${aux[6]}/${aux[0]}${aux[1]}${aux[2]}${aux[3]}`

        data.map(item => {

          if ((item.firstBrewed === formatDate)) {
            dataFilterByDate.push(item);
          }
        });

      }

      console.log(dataFilterByDate.length);


      if (dataFilterByDate.length === 0 && date) {
        renderListNoResults();

      } else if (dataFilterByDate.length > 0) {
        renderListLimited(dataFilterByDate);

      } else {
        renderListLimited(data);

      }


    } else {

      console.log('navegar a index');

    }
  }
});

export default searchForm;