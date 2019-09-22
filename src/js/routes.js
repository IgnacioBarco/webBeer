// import { renderShowsDOM } from './shows.js';
// import { hideFilter, showFilter } from './navbar.js';
// import { showQuotesForm, hideQuotesForm } from './ui.js';
// import renderDetail from './detail.js';
// import addQuoteListener from './quotesForm.js';
import navbar from './navbar.js';
import api from './api.js';
import { renderList } from './showList.js';
import { renderDetail } from './showDetails.js';

const { getBeers } = api();
const { getDetails } = api();
const { addLike } = api();

page('/', async () => {
    console.log('página home');

    const data = await getBeers();
    renderList(data);

});


page('/detail/:id', async ctx => {
    console.log('página detail');

    const { params: { id } } = ctx;
    const detail = await getDetails(id);
    renderDetail(detail);

    const buttonLike = document.querySelector('.button-like');
    buttonLike.addEventListener('click', async evt => {
        evt.preventDefault();
        await addLike(id);
        console.log('add like');
        
    });

});

page();

