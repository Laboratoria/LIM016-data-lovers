import { /*anotherExample,*/rio_teams, rio_sports, timesRepeated} from './data.js'; //las funciones 

import data from './data/athletes/athletes.js'; //la data del proyecto


let country= rio_teams(data).sort();  //trayendo a los países y lo ordemo
let countryCounter= timesRepeated(country); //trayendo la función que me hace el recuento
let finalCountry= Object.entries(countryCounter); //convirtiendo a array

for( let i=0; i<finalCountry.length; i++){
  let country_screen= document.createElement("p");
  country_screen.className="btnGreen"
  country_screen.innerHTML= finalCountry[i].join("<br>")+ " athlete(s)";
  document.getElementById("hereCountries").appendChild(country_screen)
}
  
let sports= rio_sports(data);  //me trae los paises
let sportsCounter= timesRepeated(sports);
let finalSports= Object.entries(sportsCounter);
 
for( let i=0; i<finalSports.length; i++){
  let sport_screen= document.createElement("p"); 
  sport_screen.className="btnPurple"
  sport_screen.innerHTML= finalSports[i].join("<br>")+ " athlete(s)";
  document.getElementById("hereSports").appendChild(sport_screen);
}
