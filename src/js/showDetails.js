
import api from './api.js';

const templateShow = ({ beerId, brewersTips, comments, contributedBy, description, firstBrewed,
    image, ingredients, likes, name, price }) =>
    ` 
      <h2>${name}</h2>
      <h3>${brewersTips}</h3>
      <h3>${contributedBy}</h3>
      <h3>${description}</h3>
      <h3>${firstBrewed}</h3>
      <img src =${image}>
      <h3>${ingredients}</h3>
      <h3>${price}</h3>
      <h3>${comments}</h3>
      <h3>${likes}</h3>
    
`;

const mainSection = document.querySelector('main');

const renderDetail = data => mainSection.innerHTML = templateShow(data);

export { renderDetail };