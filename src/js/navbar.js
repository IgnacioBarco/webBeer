
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
    //Guardamos el texto de los formularios en localstorage
    locStorage.setItem('filterText', searchInputText.value);
    locStorage.setItem('filterDate', searchInputDate.value);

    let data = {};
    let dataFilterByDate = [];

    //si hay algo escrito en los formularios de texto o date
    if (searchInputText.value.length !== 0 || searchInputDate.value.length !== 0) {
      //si hay texto, buscamos por ese filtro
      if (searchInputText.value.length !== 0) {
        data = await filterByText(searchInputText.value);

        //si no hay nada en el filtro, nos traemos la lista de cervezas entera  
      } else {
        data = await getBeers();

      }

      //si esta el filtro de date
      if (searchInputDate.value.length !== 0) {
        //formateamos la fecha para comparar con la lista que tenemos
        let aux = searchInputDate.value;
        let formatDate = `${aux[5]}${aux[6]}/${aux[0]}${aux[1]}${aux[2]}${aux[3]}`

        //los que coincidan los metemos en un array nuevo
        data.map(item => {
          if ((item.firstBrewed === formatDate)) {
            dataFilterByDate.push(item);
          }

        });

      }

      //si hay filtro de texto, resultados de ese filtro y no hay filtro de fecha
      if (searchInputText.value.length !== 0
        && data.length !== 0
        && searchInputDate.value.length === 0) {
        renderListLimited(data);

        //si hay resultados del filtro de texto(si no hay filtro, esta la lista entera), 
        //hay filtro de fecha y resultados coincidentes   
      } else if (
        data.length !== 0
        && searchInputDate.value.length !== 0
        && dataFilterByDate.length !== 0) {
        renderListLimited(dataFilterByDate);

        //el resto de casos  
      } else {
        renderListNoResults();

      }

      //no hay ningun filtro  
    } else {
      alert('no hay filtros activos, buscamos todas las cervezas');
      data = await getBeers();
      renderList(data);

    }
  }
});

export default searchForm;