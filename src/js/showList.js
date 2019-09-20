
import api from './api.js';

const templateShow = `
    <h1>cerveza1</h1>
    <h1>cerveza2</h1>
    <h1>cerveza3</h1>
    <h1>cerveza4</h1>
`;

const mainSection = document.querySelector('main');

const renderList = (data) => {

    console.log('data en render '+ data[1]);
    const formatData = data[1];

    const { name } = data[1];
    console.log(name);

    mainSection.innerHTML = `
    <div class="data">
      ${name}
    </div>
    `

    


};


export { renderList };
