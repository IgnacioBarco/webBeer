
import api from './api.js';

const imageHeader = `
<picture>
        <source
          srcset="
            ./src/images/beer640.jpg   400w,
            ./src/images/beer1280.jpg  800w,
            ./src/images/beer1920.jpg 1600w
          "
          media="(min-width: 640px)"
        />
        <img class="imagen" src="./src/images/beer640.jpg" alt="beer" />
      </picture>

`;

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


// const beerList = document.querySelector('.beerList');
const beerList = document.querySelector('main');

//pinta una lista que le pasamos
const renderList = (data) => {
  //incluimos la imagen del home
  beerList.innerHTML = imageHeader;

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
