import { sortData } from './data.js';
import { functionAll } from './data.js';
import datos from './data/athletes/athletes.js'; //jala de athletes.js

// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//import datos from './data/athletes/athletes.js';
console.log(functionAll(datos));

let printFilter = document.getElementById('printFilter');
let arrFilter  = [];
let checkboxes = document.querySelectorAll('.checkbox');
