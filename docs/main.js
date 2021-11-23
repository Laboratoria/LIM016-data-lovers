import {rio_teams, noRepeated,justFemale, timesRepeated, spliceIntoChunks} from './data.js'; //las funciones

import data from './data/athletes/athletes.js'; 

let toggle_bar= document.querySelector(".head-toggle");
let navMenu= document.querySelector(".info");
toggle_bar.addEventListener("click", ()=>{
  navMenu.classList.toggle("info_visible");
})


let home_click= document.getElementById("home-click");
home_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "block";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("countries").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
  document.getElementById("female").style.display = "none";
  navMenu.classList.toggle("info_visible");
});

let sports_click= document.getElementById("sports-click");
sports_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("sports").style.display = "block";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("countries").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
  document.getElementById("female").style.display = "none";
  navMenu.classList.toggle("info_visible");
});


let teams_click= document.getElementById("teams-click");
teams_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("countries").style.display = "block";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
  document.getElementById("female").style.display = "none";
  navMenu.classList.toggle("info_visible");
});

let athletes_click= document.getElementById("athletes-click");
athletes_click.addEventListener("click", (e)=>{
  e.preventDefault(); 

  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("athletes").style.display = "block";
  document.getElementById("countries").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
  document.getElementById("female").style.display = "none";
  navMenu.classList.toggle("info_visible");
});

let text_click= document.getElementById("link_medals");
text_click.addEventListener("click", (e)=>{
  e.preventDefault(); 

  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("multipleMedals").style.display = "block";
  document.getElementById("countries").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("female").style.display = "none";
});

let link_female= document.getElementById("link_female");
link_female.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none"; 
  document.getElementById("female").style.display = "block";
  document.getElementById("multipleMedals").style.display = "none";
  document.getElementById("countries").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
});

/*---------------------------------------se trabajan los países*/
let country= rio_teams(data).sort();  //trayendo a los países y lo ordemo

let countryCounter= timesRepeated(country); //trayendo la función que me hace el recuento
//console.log(countryCounter)
let finalCountry= Object.entries(countryCounter); //convirtiendo a array
//console.log(Array.isArray(country))
for( let i=0; i<finalCountry.length; i++){
  let country_screen= document.createElement("p");
  country_screen.className="btnGreen"
  country_screen.innerHTML= finalCountry[i].join("<br>")+ " athlete(s)";
  document.getElementById("hereCountries").appendChild(country_screen)
}
/*--------------------------------se trabajan los deportes y eventos*/
let sports= data["athletes"]; //utilizando solo los atletas
let result =sports.reduce(       //un objeto con los deportes y las coincidencias de los eventos
  (acc, element) => 
  Object.assign(acc, {[element.sport]:(acc[element.sport] || [])
    .concat([element.event])
  }), {}
  )

  let arr= Object.entries(result).sort();//ordenando 
  //console.log(arr)
  const tableBody= document.getElementById("tableData"); //me trae el body de la tabla
  let dataHTML= "";

  for(const [key,value] of Object.values(arr)){
    dataHTML+= `<tr>
    <td>${key}</td>
    <td>${"-"+ Object.keys(noRepeated(value)).join("<br>-")}</td>
            <tr>
           `;
          
tableBody.innerHTML= dataHTML;
//console.log(Array.isArray(value))
}

const searchSport= document.getElementById("search");  //el buscador de deportes
searchSport.addEventListener("keyup", searchSportEvent); 
function searchSportEvent(){
  let filter, table, tr, td, i, txtValue;
  filter = searchSport.value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
/*------------------------------código de los atletas*/
/* .....Realizando un nuevo array para motrar en pantalla............. */
let newListsAthlete= data.athletes.map(item=>{
  return [item.name,item]
});

var personasMapArr= new Map(newListsAthlete); 
let unicos = [...personasMapArr.values()]; // Conversión a un array
//console.log(unicos)
/* .....Funcion para crear la lista de atletas con el nuevo array...... */
function listName(e) {
  const athlete= document.getElementById("hereAthletes")

e.forEach((index)=>{
    let athletes_screen= document.createElement("li");
    athletes_screen.className="btnYellow";
    athletes_screen.style.flexDirection = "row"
    athletes_screen.innerHTML= index.name;
    athletes_screen.onclick= (e)=>contAthletes(e,index);
    athlete.appendChild(athletes_screen)
    
athletes_screen.addEventListener("click", showModal);
function showModal(){
  modalAthlete.style.display="block";
}

})
}
const modalAthlete= document.getElementById("modal");
window.onclick = function(event) {
  if (event.target == modalAthlete) {
    modalAthlete.style.display = "none";
  }
}


/* .....Funcion para crear el card con el nuevo array................. */

const contAthletes = (event,unicos) => {
  
  let nameAthlete= document.getElementById("name")
  nameAthlete.innerHTML= unicos.name; 
  
  let genderAthlete= document.getElementById("gender")
  genderAthlete.innerHTML= unicos.gender;
  
  let heightAthlete= document.getElementById("height")
  heightAthlete.innerHTML= unicos.height;
  
  let weightAthlete= document.getElementById("weight")
  weightAthlete.innerHTML= unicos.weight;
  
  let sportAthlete= document.getElementById("sport")
  sportAthlete.innerHTML= unicos.sport;
  
  let teamAthlete= document.getElementById("team")
  teamAthlete.innerHTML= unicos.team;
  
  let ageAthlete= document.getElementById("age")
  ageAthlete.innerHTML= unicos.age;
  
  let eventAthlete= document.getElementById("event")
  eventAthlete.innerHTML= unicos.event; 
}


  /* ..........Funcionalidad con el Search............. */
  const search = document.getElementById("searchBar");
const results = document.getElementById("hereAthletes");
let search_term = "";


const showList = () => {
  results.innerHTML = "";
  let atlhete=unicos.filter((item) => { 
  /* ...Busco en todo mi array las coincidencias de mi search........ */
      return (item.name.toLowerCase().includes(search_term));
  })
  /* ...Estoy colocando en pantalla el resultado del filter........ */
  listName(atlhete)
};
showList();

/* ......Guarda el valor de mi search imput y la iguala a mi variable vacia........ */
search.addEventListener('input', (event) => {
  search_term = event.target.value.toLowerCase();
  showList();
});

/*--------------------------------código de los deportistas con diferentes medallas*/

let variousMedals =Object.entries(sports.reduce(    //un array con los nombres y acumulando los eventos y medallas
  (acc, element) => 
  Object.assign(acc, {[element.name]:(acc[element.name] || [])
    .concat([element.event]).concat([element.medal])
  }), {}
  ));

  let medal_athlete= document.getElementById("hereAthletes_multiple_medals");//donde se almacenará la información

  for(const [key, value] of Object.values(variousMedals)){
  //console.log(value)
    if(value.length >2){
      let dataAthleteMedal= document.createElement("ul");
      dataAthleteMedal.className="medal_athletesContainer"
      dataAthleteMedal.innerHTML=`
          <li><span class="keyAthlete">${key}</span> <br>
         ${"-"+spliceIntoChunks(value, 2).join("<br>-")}
         </li>
                  `;
                  medal_athlete.appendChild(dataAthleteMedal);  
    }
  // console.log(spliceIntoChunks(value, 2))
  }

let searchM_winners= document.getElementById("searchMultipleWinners");//el buscador 

searchM_winners.addEventListener("keyup", winners)
function winners(){
  let key_Athlete, i;
  let search_winners= searchM_winners.value.toLowerCase();
  key_Athlete= document.getElementsByClassName("medal_athletesContainer");

  for (i = 0; i < key_Athlete.length; i++) {
    if (key_Athlete[i].innerText.toLowerCase().includes(search_winners)) {
      key_Athlete[i].style.display = "block";
    } else {
      key_Athlete[i].style.display = "none";
    }
  }
}
/*------------------------Código de las atletas femeninas*/

let female_athletes= justFemale(sports);
//console.log(female_athletes)

let womenMap = female_athletes.map(item=>{
  return [item.name,item.sport]
});

var womenMapArr = new Map(womenMap); // Pares de clave y valor sin repetición

let womenFinal = [...womenMapArr.entries()]; // Conversión a un array

const table_female= document.getElementById("hereFemale");
      let femaleHTML= "";
      for(const [key, value] of Object.values(womenFinal)){
        femaleHTML+= `<tr>
        <td>${key}</td>
        <td>${value}</td>
                <tr>
               `;
               table_female.innerHTML= femaleHTML;
    }

//-----------------el buscador---------------
let searchFemAthlete= document.getElementById("searchFemAthl");
searchFemAthlete.addEventListener("keyup", female);
function female(){
  var filter, table, tr, td, i, txtValue;
  filter = searchFemAthlete.value.toLowerCase();
  table = document.getElementById("female_table");   
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
