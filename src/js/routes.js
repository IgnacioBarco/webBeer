// import { renderShowsDOM } from './shows.js';
// import { hideFilter, showFilter } from './navbar.js';
// import { showQuotesForm, hideQuotesForm } from './ui.js';
// import renderDetail from './detail.js';
// import addQuoteListener from './quotesForm.js';
import navbar from './navbar.js';
import api from './api.js';
import { renderList } from './showList.js';

const { getBeers } = api();

page('/', async () => {
    console.log('home');

    const data = await getBeers();
    // const data = resultados();
    //const data = await getBeers();

    renderList(data);

    console.log(data[1]);
    
 



});

page('/detail/:id', ctx => {
    console.log('detail ' + ctx);
});

const api2 = api;
page();

