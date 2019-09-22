
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
    var text = false;
    var resultsText = false;
    var date = false;
    var resultsDate = false;

    if (searchInputText.value.length !== 0) {
      text = true;
    }

    if (searchInputDate.value.length !== 0) {
      date = true;
    }

    if (text || date) {
      var data = {};
      var dataFilterByDate = [];


      if (text) {
        data = await filterByText(searchInputText.value);

        if (data.length === 0) {
          resultsText = false;

        } else {
          resultsText = true;

        }

      } else {
        data = await getBeers();
        resultsText = true;

      }

      if (date) {
        var aux = searchInputDate.value;
        var formatDate = `${aux[5]}${aux[6]}/${aux[0]}${aux[1]}${aux[2]}${aux[3]}`

        console.log(formatDate);

        data.map(item => {
          if ((item.firstBrewed === formatDate)) {
            dataFilterByDate.push(item);
          }

        });

        if (dataFilterByDate.length === 0) {
          resultsDate = false;

        } else {
          resultsDate = true;

        }

      }

      if (text && resultsText && !date) {
        renderListLimited(data);

      } else if (resultsText && date && resultsDate) {
        renderListLimited(dataFilterByDate);

      } else {
        renderListNoResults();

      }

    } else {
      alert('no hay filtros activos');

    }


    console.log('Texto: ' + text);
    console.log('Date: ' + date);
    console.log('resultsText: ' + resultsText);
    console.log('resultsDate: ' + resultsDate);
  }


});

export default searchForm;