import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

let parrafoData = document.getElementById("data-personaje")
//obteniendo la data del objeto results de rickyandmorty.js
parrafoData.textContent=data.results[0].name;