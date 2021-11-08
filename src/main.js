import { /*anotherExample,*/rio_teams, rio_sports, timesRepeated} from './data.js'; //las funciones

import data from './data/athletes/athletes.js'; 

let home_click= document.getElementById("home-click");
home_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "block";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("countries").style.display = "none";
});

let sports_click= document.getElementById("sports-click");
sports_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("sports").style.display = "block";
  document.getElementById("athletes").style.display = "none";
});


let teams_click= document.getElementById("teams-click");
teams_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("countries").style.display = "block";
  document.getElementById("sports").style.display = "none";
});

let athletes_click= document.getElementById("athletes-click");
athletes_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("athletes").style.display = "block";
  document.getElementById("countries").style.display = "none";
});


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




const contAthletes = (event,athlete) => {
  console.log(event.target.innerHTML)
  console.log(athlete)
  
}

const prueba = ()=>{
  const athlete= document.getElementById("hereAthletes")
  data.athletes.forEach((item, index)=>{
    let {name}=item;
    
    let athletes_screen= document.createElement("li");
    athletes_screen.className="btnYellow";
    athletes_screen.innerHTML= name;
    athletes_screen.onclick= (e)=>contAthletes(e,item);
    //athletes_screen.value=name[index]
    athlete.appendChild(athletes_screen)
 
  })
  //document.getSelection("li").onclick(contAthletes)
}

prueba()