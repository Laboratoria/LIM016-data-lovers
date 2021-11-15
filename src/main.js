import { /*anotherExample,*/rio_teams, noRepeated, rio_sports, timesRepeated, spliceIntoChunks} from './data.js'; //las funciones

import data from './data/athletes/athletes.js'; 


let home_click= document.getElementById("home-click");
home_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "block";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("countries").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
});

let sports_click= document.getElementById("sports-click");
sports_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("sports").style.display = "block";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("countries").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
});


let teams_click= document.getElementById("teams-click");
teams_click.addEventListener("click", (e)=>{
  e.preventDefault(); 
  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("countries").style.display = "block";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
});

let athletes_click= document.getElementById("athletes-click");
athletes_click.addEventListener("click", (e)=>{
  e.preventDefault(); 

  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("athletes").style.display = "block";
  document.getElementById("countries").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("multipleMedals").style.display = "none";
});

let text_click= document.getElementById("link_medals");
text_click.addEventListener("click", (e)=>{
  e.preventDefault(); 

  document.getElementById("contaiiner").style.display = "none";
  document.getElementById("multipleMedals").style.display = "block";
  document.getElementById("countries").style.display = "none";
  document.getElementById("sports").style.display = "none";
  document.getElementById("athletes").style.display = "none";
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
let sports= data["athletes"];
let result =sports.reduce(
  (acc, element) => 
  Object.assign(acc, {[element.sport]:(acc[element.sport] || [])
    .concat([element.event])
  }), {}
  )

  let arr= Object.entries(result).sort();
  const tableBody= document.getElementById("tableData");
  let dataHTML= "";

  for(const [key,value] of Object.values(arr)){
    dataHTML+= `<tr>
    <td>${key}</td>
    <td>${"-"+ Object.keys(noRepeated(value)).join("<br>-")}</td>
            <tr>
           `;
tableBody.innerHTML= dataHTML;
// console.log(dataHTML);  
}

const searchSport= document.getElementById("search");
searchSport.addEventListener("keyup", (e)=> {
  var filter, table, tr, td, i, txtValue;
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
});


/////////////////////////////////////////////////////////////
const contAthletes = (event,athletes) => {
 
  let listAthlete= document.getElementById("cardAthlete")
 
    let nameAthlete= document.getElementById("name")
    nameAthlete.innerHTML= athletes.name;

    let genderAthlete= document.getElementById("gender")
    genderAthlete.innerHTML= athletes.gender;

    let heightAthlete= document.getElementById("height")
    heightAthlete.innerHTML= athletes.height;

    let weightAthlete= document.getElementById("weight")
    weightAthlete.innerHTML= athletes.weight;

    let sportAthlete= document.getElementById("sport")
    sportAthlete.innerHTML= athletes.sport;

    let teamAthlete= document.getElementById("team")
    teamAthlete.innerHTML= athletes.team;

    let ageAthlete= document.getElementById("age")
    ageAthlete.innerHTML= athletes.age;

    listAthlete.appendChild(cardAthlete)  
}


const prueba = ()=>{
  const athlete= document.getElementById("hereAthletes")
  data.athletes.forEach((item, index)=>{
    let {name}=item;
    
    let athletes_screen= document.createElement("li");
    athletes_screen.className="btnYellow";
    //athletes_screen.style.display = "flex";
    athletes_screen.style.flexDirection = "row"
    athletes_screen.innerHTML= name;
    athletes_screen.onclick= (e)=>contAthletes(e,item);
    athlete.appendChild(athletes_screen)
 
  })
}
prueba()

///////////////////////////código de los deportistas con diferentes medallas
let variousMedals =Object.entries(sports.reduce(
  (acc, element) => 
  Object.assign(acc, {[element.name]:(acc[element.name] || [])
    .concat([element.event]).concat([element.medal])
  }), {}
  ));

  let medal_athlete= document.getElementById("hereAthletes_multiple_medals");

  for(const [key, value] of Object.values(variousMedals)){
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
  }
//  console.log(medal_athlete)
let searchM_winners= document.getElementById("searchMultipleWinners");

searchM_winners.addEventListener("keyup", (e)=>{
  //console.log(e)
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
})