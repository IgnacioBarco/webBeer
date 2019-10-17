import navbar from './navbar.js';
import api from './api.js';
import { renderList } from './showList.js';
import { renderDetail } from './showDetails.js';
import locStorage from './locStorage.js';

const { getBeers } = api();
const { getDetails } = api();
const { addLike } = api();

page('/', async () => {
    //comprobamos si hay algo en localstorage para pintarlo en los formularios
    locStorage.checklocalStorage();

    //obtenemos la lista entera de las cervezas y la pintamos
    const data = await getBeers();
    renderList(data);

});

page('/detail/:id', async ctx => {
    //comprobamos si hay algo en localstorage para pintarlo en los formularios
    locStorage.checklocalStorage();

    //obtenemos el id de la cerveza
    const { params: { id } } = ctx;

    //obtenemos los detalles de la cerveza y los pintamos
    const detail = await getDetails(id);
    renderDetail(detail);

    //añadimos el evento al boton de like
    const buttonLike = document.querySelector('.button-like');
    buttonLike.addEventListener('click', async evt => {
        evt.preventDefault();
        await addLike(id);

    });

});

page();

