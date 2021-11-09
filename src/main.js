import { sortData } from './data.js';
import { functionAll } from './data.js';
import datos from './data/athletes/athletes.js'; //jala de athletes.js

console.log(functionAll(datos));
//----------------SELECTOR DINÁMICO PARA EL FILTRO DE PAÍSES----------------
//Para esconder y mostrar las opciones
const select = document.querySelector('.select');
select.addEventListener('click', function(){
    document.getElementById('options').classList.toggle('active');
});
//Para que el contenido de las opciones se muestreen la parte superior
const contentSelect = document.querySelector('.contentSelect');
const inputSelect = document.querySelector('#inputSelect');
