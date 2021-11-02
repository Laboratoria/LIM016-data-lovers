import { anotherExample, example } from './data.js'; //las funciones filter,etc

import data from './data/athletes/athletes.js'; //la data del proyecto

let info= data.athletes;  //me trae todos los atletas
let exampl= example(info);
//console.log(exampl);

let pais= document.createElement("p"); //la caja donde se guardará los países
  
  pais.innerHTML= [...new Set(exampl)].sort().join("<p></p>");  //diciendole que información contendrá, se quita los dobles, se ordena alfabe
  
  document.getElementById("hereCountries").appendChild(pais);// indicandole el div donde se contendrá la información
