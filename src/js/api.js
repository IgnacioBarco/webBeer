
const API_KEY = '5NVW2EX-4XP47BT-HSA9R94-CDSMF44';
const API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1';
const LIST_ALL = '/beers';
const LIMIT = '&limit=10';
const DETAIL = '/beers/';
const LIKE = '/like';
const FiLTER_TEXT = '/beers/?search=';

const api = () => {
    return {
        //devuelve la lista de todas las cervezas
        getBeers: async () => {
            try {
                const response = await fetch(`${API_URL}${LIST_ALL}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY

                    }
                });
                if (!response.ok) {
                    throw new Error('Error fetching')

                }

                const data = await response.json();
                
                //nos quedamos solo con las cervezas
                const { success, beers } = data;

                if (success === false) {
                    return "sin resultados";
                }

                return beers;

            } catch (err) {
                console.error('error: ' + err);
                throw err;

            }
        },

        //devuelve los detalles de una cerveza, hay que pasarle el id 
        getDetails: async (id) => {

            try {
                const response = await fetch(`${API_URL}${DETAIL}${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY

                    }
                });

                if (!response.ok) {
                    throw new Error('Error fetching')
                }

                const dataDetails = await response.json();
                const { success, beer } = dataDetails;

                if (success === false) {
                    return "no hay ninguna cerveza con ese id";
                }

                return beer;

            } catch (err) {
                console.error('error: ' + err);
                throw err;
            }
        },

        filterByText: async (text) => {

            try {
                const response = await fetch(`${API_URL}${FiLTER_TEXT}${text}${LIMIT}`, {
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY
                    }
                });
                if (!response.ok) {
                    throw new Error('Error fetching')
                }

                const dataFilterByText = await response.json();

                //nos quedamos solo con los detalles de la cerveza
                const { success, beers } = dataFilterByText;

                if (success === false) {
                    return "no hay ninguna cerveza con ese id";
                }

                return beers;

            } catch (err) {
                console.error('error: ' + err);
                throw err;
            }
        },

        //añade un like y recarga la página
        addLike: async (id) => {
            try {
                const response = await fetch(`${API_URL}${DETAIL}${id}${LIKE}`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'X-API-KEY': API_KEY

                    }
                });

                if (!response.ok) {
                    throw new Error('Error fetching')
                }

                //recargamos la página
                location.reload();

            } catch (err) {
                console.error('error: ' + err);
                throw err;

            }
        }

    }
};

export default api;