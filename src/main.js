import { anotherExample, rio, rioDe} from './data.js'; //las funciones filter,etc

import data from './data/athletes/athletes.js'; //la data del proyecto


let teams= rio(data);  //me trae los paises
// console.log(teams);

let pais= document.createElement("h5"); //la caja donde se guardará los países

  pais.innerHTML= [...new Set(teams)].sort().join("");  //diciendole que información contendrá, se quita los dobles, se ordena alfabe
  
  document.getElementById("hereCountries").appendChild(pais);// indicandole el div donde se contendrá la información

///////////////////////////////////////////////////////////////////////////////////////////////////
let sports= rioDe(data);  //me trae los paises
// console.log(teams);

let deporte= document.createElement("h6"); //la caja donde se guardará los países

  deporte.innerHTML= [...new Set(sports)].sort().join("");  //diciendole que información contendrá, se quita los dobles, se ordena alfabe
  
  document.getElementById("hereSports").appendChild(deporte);// indicandole el div donde se contendrá la información
