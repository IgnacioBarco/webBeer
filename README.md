# webBeer
* La parte del HTML y CSS es solo funcional.
* Se ha añadido la función de dar like a las cervezas, pero no la de hacer comentarios.


### Descripción de la app:
* La página de inicio lista todas las cervezas. 
* Al pulsar sobre una cerveza nos lleva a su detalle, donde podremos dar al botón de like.
* Si pulsamos el "logo", nos lleva de nuevo al index.
* Los filtros se quedan guardados en localStorage.


### Usando los filtros:
* Cuando hace una busqueda por filtro se limita a pintar 10 resultados.
* El filtro de la fecha selecciona el mes y año, ignorando el día. Pinta los que coinciden con ese mes y año. 
* Si los filtros estan vacios y se da al botón de buscar, lista de nuevo todas las cervezas.    


### Modulos añadidos
| Plugin | Modo | Ruta/Comando |
| ------ | ------ | ------ |
| http-server | NPM | npm i --save-dev http-server |
| page | CDN | https://cdn.rawgit.com/visionmedia/page.js/master/page.js |
| express| NPM | npm i --save express |


### Para ejecutar la app
```
npm run server
```


### Para ver la app en el navegador
* http://localhost:3000/


### Documentación de la API de cervezas:
* https://web-bootcamp-exercise-beer-swagger-pgjtqotgtl.now.sh/api-docs/#/Beer/get_beers
