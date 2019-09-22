
import api from './api.js';

const templateShow = ({ beerId, brewersTips, comments, contributedBy, description, firstBrewed,
  image, ingredients, likes, name, price }) =>
  ` 
    <img src =${image}>
    <ul>
      <li><h2>Nombre: ${name}</h2></li>
      <li><h3>Consejos: ${brewersTips}</h3></li>
      <li><h3>Descripción: ${description}</h3></li>
      <li><h3>Primera elaboración: ${firstBrewed}</h3></li>
      <li><h3>Ingredientes:</h3></li>
      <ul>
        <li><h4>Malta:</h4></li> 
          <ol>${ingredients.malt
            .map(elem => {
              return `<li>${elem.name}(${elem.amount.value} ${elem.amount.unit})</li>`; })
            .join('')}
          </ol>
        <li><h4>Lúpulo:</h4></li> 
          <ol>${ingredients.hops
            .map(elem => {
              return `<li>${elem.name}(${elem.amount.value} ${elem.amount.unit}) 
              añadido: ${elem.add}, atributo: ${elem.attribute}</li>`;})
            .join('')}
          </ol>
      </ul>  
      <li><h3>Precio: ${price}€</h3></li>
      <li>
        <h3>Me gusta: ${likes} likes
          <button type="submit" class="button-like">Dar Like</button>
        </h3>
      </li>
      <li><h3>Autor de la reseña: ${contributedBy}</h3></li>
      <li><h3>Comentarios: ${comments}</h3></li>
    </ul>  
              
    
`;

const mainSection = document.querySelector('main');

//pinta los detalles de la cerveza que le hemos pasado
const renderDetail = data => mainSection.innerHTML = templateShow(data);

export { renderDetail };