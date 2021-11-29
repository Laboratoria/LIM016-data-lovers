import {rio_teams,medals, sportsEvents, multipleMedalsWinners, athletes_rio, noRepeated,justFemale, timesRepeated, spliceIntoChunks} from './data.js'; //las funciones

import data from './data/athletes/athletes.js'; 
import team from './data/athletes/teams.js'; 

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
  document.getElementById("graficas").style.display = "none";
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
  document.getElementById("graficas").style.display = "none";
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
  document.getElementById("graficas").style.display = "none";
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
  document.getElementById("graficas").style.display = "none";
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
  document.getElementById("graficas").style.display = "none";
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
  document.getElementById("graficas").style.display = "none";
});

/*---------------------------------------se trabajan los países*/
let country= rio_teams(data).sort();  //trayendo a los países y lo ordemo
//console.log(country)
let countryCounter= timesRepeated(country); //trayendo la función que me hace el recuento
//console.log(countryCounter)
let finalCountry= Object.entries(countryCounter); //convirtiendo a array
//console.log(finalCountry)
const url1= fetch("https://restcountries.com/v2/all").then(res=>res.json()).then(res=>{ 
 //console.log(res.length)
  for( let i=0; i<finalCountry.length; i++){
    res.find((item) => {
      if(item.name==finalCountry[i][0]){
        let countriesElem=document.createElement("div") ;
        countriesElem.classList.add("country");
        countriesElem.innerHTML= `
           <div class="country>
           <div class= "country-info">
               <h6 class="btnGreen">${finalCountry[i].join("<br>")+ " athlete(s)"}</h6>
             </div>
             <div class="country-img">
               <img src="${item.flag}" id="some" alt="">
             </div>
             
           </div> `
           document.querySelector(".hereCountries").appendChild(countriesElem);
      }
    })
  }
})
 
let otherCountries= team.teams;
otherCountries.forEach(item => {
  let countriesElem=document.createElement("div") ;
  countriesElem.classList.add("country");
  countriesElem.innerHTML= `
     <div class="country>
     <div class= "country-info">
         <h6 class="btnGreen">${item.team.join("<br>")+ " athlete(s)"}</h6>
       </div>
       <div class="country-img">
         <img src="${item.flag}" id="some" alt="">
       </div>
       
     </div> `
     document.querySelector(".hereCountries").appendChild(countriesElem);
});

let searchTeams= document.getElementById("searchTeam");  /*buscador*/

searchTeams.addEventListener("keyup", ()=>{

let teamToFind, i;
let search_team= searchTeams.value.toLowerCase();

teamToFind= document.getElementsByClassName("country");

for( i=0; i< teamToFind.length; i++) {
  if(teamToFind[i].innerText.toLowerCase().includes(search_team)){
    teamToFind[i].style.display="block";
  }else{
    teamToFind[i].style.display="none";
  }
}
})


/*--------------------------------se trabajan los deportes y eventos*/
  let sports_Events= sportsEvents(data);
  let arr= Object.entries(sports_Events).sort();//ordenando 
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
let newListsAthlete= athletes_rio(data);
//console.log(newListsAthlete)
let personasMapArr= new Map(newListsAthlete); 
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
    
athletes_screen.addEventListener("click", showModal); //mostrar el modal cada que se hace click en los atletas
function showModal(){
  modalAthlete.style.display="block";
}
})
}
const modalAthlete= document.getElementById("modal"); //al hacer click en la pantalla se cierra el modal
window.onclick = function(event) {
  if (event.target == modalAthlete) {
    modalAthlete.style.display = "none";
  }
}

/* .....Funcion para crear el card con el nuevo array................. */

const contAthletes = (e,unicos) => {
  
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

let variousMedals= Object.entries(multipleMedalsWinners(data));
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

let womenMap= justFemale(data);
let womenMapArr = new Map(womenMap); // Pares de clave y valor sin repetición

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

/*----Graficas-----*/
let graficos= document.getElementById('clickCharts');
graficos.addEventListener("click", (e)=>{
  e.preventDefault(); 

  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
  document.getElementById("graficas").style.display = "flex";
  document.getElementById("countries").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("female").style.display = "none";
});


let medal = medals(data);
let cantMedal = timesRepeated(medal);

const ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line
new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Medal Winners',
            data: cantMedal,
            backgroundColor: [
                'rgb(255, 205, 86, 0.9)',
                'rgb(255, 205, 86, 0.9)',
                'rgba(80, 80, 80, 0.4)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(80, 80, 80, 0.4)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderColor: [
                'rgba(80, 80, 00, 0.2)',
                'rgba(80, 80, 00, 0.2)',
                'rgba(80, 80, 80, 0.2)',
                'rgba(255, 159, 64, 1)',
                'rgba(80, 80, 80, 0.2)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});   