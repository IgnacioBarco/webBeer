
import api from './api.js';
import locStorage from './locStorage.js';
import { renderList, renderListLimited, renderListNoResults } from './showList.js';

const searchForm = document.querySelector('.search-form');
const searchInputText = document.querySelector('#filterText');
const searchInputDate = document.querySelector('#filterDate');
const navbarLogo = document.querySelector('.navbar-logo');

const { getBeers } = api();
const { filterByText } = api();

//añadimos un evento para que al dar al logo navegue a la pantalla inicial
navbarLogo.addEventListener('click', async evt => {
  location.assign("/");

});

//evento del boton del formulario
searchForm.addEventListener('submit', async evt => {
  
  //paramos el evento de submit para controlarlo desde js
  evt.preventDefault();
  
  //si el formulario es valido
  //ahora mismo no se comprueba nada
  if (searchInputText.validity.valid) {
    var text = false;
    var resultsText = false;
    var date = false;
    var resultsDate = false;

    //Guardamos el texto de los formularios en localstorage
    locStorage.setItem('filterText', searchInputText.value);
    locStorage.setItem('filterText', searchInputText.value);
    
    if (searchInputText.value.length !== 0) {
      text = true;
    }

    if (searchInputDate.value.length !== 0) {
      date = true;
    }

    //si hay algo escrito en los formularios de texto o date
    if (text || date) {
      var data = {};
      var dataFilterByDate = [];

      //si hay texto, buscamos por ese filtro
      if (text) {
        data = await filterByText(searchInputText.value);

        //si no encontramos resultados con ese filtro
        if (data.length === 0) {
          resultsText = false;
  
        } else {
          resultsText = true;

        }

      //si no hay nada en el filtro, nos traemos la lista de cervezas entera  
      } else {
        data = await getBeers();
        resultsText = true;

      }

      //si esta el filtro de date
      if (date) {
        //formateamos la fecha para comparar con la lista que tenemos
        var aux = searchInputDate.value;
        var formatDate = `${aux[5]}${aux[6]}/${aux[0]}${aux[1]}${aux[2]}${aux[3]}`

        console.log(formatDate);

        //los que coincidan los metemos en un array nuevo
        data.map(item => {
          if ((item.firstBrewed === formatDate)) {
            dataFilterByDate.push(item);
          }

        });

        //si no encontramos coincidencias
        if (dataFilterByDate.length === 0) {
          resultsDate = false;

        } else {
          resultsDate = true;

        }

      }

      //si hay filtro de texto, resultados de ese filtro y no hay filtro de fecha
      if (text && resultsText && !date) {
        renderListLimited(data);

      //si hay resultados del filtro de texto(si no hay filtro, esta la lista entera), 
      //hay filtro de fecha y resultados coincidentes   
      } else if (resultsText && date && resultsDate) {
        renderListLimited(dataFilterByDate);

      //el resto de casos  
      } else {
        renderListNoResults();

      }

    //no hay ningun filtro  
    } else {
      alert('no hay filtros activos');

    }
  }
});

export default searchForm;