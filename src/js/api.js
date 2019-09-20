
const API_KEY = '5NVW2EX-4XP47BT-HSA9R94-CDSMF44';
const API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers?limit=10';

const api = () => {
    // const searchBeers 
    return {
        getBeers: async () => {

            try {
                const response = await fetch(API_URL, {
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
                const {  success, beers  } = data;

                if (success === false) {
                    return "sin resultados";
                }
                
                return beers;

            } catch (err) {
                console.error('error: ' + err);
                throw err;
            }
        }

    }
};






export default api;