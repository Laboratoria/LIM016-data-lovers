
import { anotherExample, teams, rioDe} from './data.js'; //las funciones filter,etc

import data from './data/athletes/athletes.js'; 


var team = teams(data)
//console.log(team)

var countrie = [...new Set(team)].sort()

for (let i = 0; i < countrie.length; i++) {
  let countrieOnly = document.createElement("p")
  countrieOnly.className="btnGreen"

  countrieOnly.innerHTML=countrie[i]+' Atlete que participaron: '+[i]
  document.getElementById("hereCountries").appendChild(countrieOnly)
}

///////////////////////////////////////////////////////////////////////////////////////////////////
let sports= rioDe(data);  //me trae los paises
// console.log(teams);

let deporte= document.createElement("h6"); //la caja donde se guardará los países

  deporte.innerHTML= [...new Set(sports)].sort().join("");  //diciendole que información contendrá, se quita los dobles, se ordena alfabe
  
  document.getElementById("hereSports").appendChild(deporte);// indicandole el div donde se contendrá la información
