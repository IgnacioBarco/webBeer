
import api from './api.js';

const templateShow = ({ beerId, brewersTips, comments, contributedBy, description, firstBrewed,
  image, ingredients, likes, name, price }) =>
  ` 
    <div class="beerCard">
      <a href="/detail/${beerId}" class="beerCardDetail">
        <div class="imageBeer">  
          <img src =${image} class="img">
        </div>
        <div class="textBeer">  
          <ul>
            <li><h3>Nombre: ${name}</h3></li>
            <li><h3>Descripción: ${description}</h3></li>
            <li><h3>Consejos: ${brewersTips}</h3></li>
            <li><h3>Primera elaboración: ${firstBrewed}</h3></li>
            <li><h3>Precio: ${price}€</h3></li>
            <li><h3>Me gusta: ${likes} likes</h3></li>
            <li><h3>Autor de la reseña: ${contributedBy}</h3></li>
          </ul>
        </div>   
      </a> 
    </div> 
    
`;

const beerList = document.querySelector('.beerList');

//pinta una lista que le pasamos
const renderList = (data) => {
  beerList.innerHTML = '';
  const formatData = data.map(elem => {
    beerList.innerHTML += templateShow(elem);

  })

};

//pinta los 10 primeros resultados de los datos que le pasamos
const renderListLimited = (data) => {
  beerList.innerHTML = '';
  const formatData = data
    .slice(0, 10)
    .map(elem => {
      beerList.innerHTML += templateShow(elem);

    })

}

//pinta que no ha habido resultado en la búsqueda
const renderListNoResults = () => {
  beerList.innerHTML = `<h1 class="no-results">No hay resultados</h1>`;
  
}

export { renderList, renderListLimited, renderListNoResults };
