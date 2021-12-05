import data from './data/ghibli/ghibli.js';
import {filterItems, sortOrdenNumericoAscScore, sortOrdenNumericoDescScore, sortOrdenNumericoAscAñoLanz, sortOrdenNumericoDescAñoLanz, filterDirector, filterProducer, filterAge, inputSearch, sortOrdenAlfabeticoAsc, sortOrdenAlfabeticoDesc, filterClima, filterTerreno, filterGenero, filterEspecie, filterVehiculo} from  './data.js';

let films = [];
films = data.films;


  document.getElementById("filmografia").addEventListener("click", ()=>{
    document.getElementById("filmo").style.display="flex";
    document.getElementById("persona").style.display="none";
    document.getElementById("vehiculos").style.display="none";
    document.getElementById("locaciones").style.display="none";
    document.getElementById("portada").style.display="none";
  })
   
   document.getElementById("personajes").addEventListener("click", ()=> {
     document.getElementById("persona").style.display="flex";
     document.getElementById("filmo").style.display="none";
     document.getElementById("vehiculos").style.display="none";
     document.getElementById("locaciones").style.display="none";
     document.getElementById("portada").style.display="none";
   })
  
   
     document.getElementById("vehicles").addEventListener("click", ()=> {
     document.getElementById("vehiculos").style.display="flex";
     document.getElementById("filmo").style.display="none";
     document.getElementById("locaciones").style.display="none";
     document.getElementById("persona").style.display="none";
    document.getElementById("portada").style.display="none";
   })
   

   document.getElementById("locations").addEventListener("click", ()=> {
    document.getElementById("locaciones").style.display="flex";
    document.getElementById("filmo").style.display="none";
    document.getElementById("persona").style.display="none";
    document.getElementById("vehiculos").style.display="none";
    document.getElementById("portada").style.display="none";
  })
   /* boton para volver al principal*/
   document.getElementById("logo").addEventListener("click",()=>window.location.reload());


const conteinerScrollFilmo = document.getElementById("conteinerScrollFilmo");
const conteinerScrollPeople = document.getElementById("conteinerScrollPeople");
const conteinerScrollLocations = document.getElementById("conteinerScrollLocations");
const conteinerScrollVehicles = document.getElementById("conteinerScrollVehicles");

let btnContainerDirector= document.querySelector(".btnContainerDirector");
let btnContainerProducer=document.querySelector(".btnContainerProducer");
let btnContainerTerreno= document.querySelector(".btnContainerTerreno");
let btnContainerClima=document.querySelector(".btnContainerClima");
let btnContainerGenero= document.querySelector(".btnContainerGenero");
let btnContainerAereo= document.querySelector(".btnContainerAereo");
let btnContainerMaritimo= document.querySelector(".btnContainerMaritimo");
let btnContainerHumanos= document.querySelector(".btnContainerHumanos");
let btnContainerAnimales= document.querySelector(".btnContainerAnimales");
let btnContainerHibridos= document.querySelector(".btnContainerHibridos");
let btnContainerMiticos= document.querySelector(".btnContainerMiticos");

function filmoItems (films){
films.forEach((el) => {
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardFilm');
    const template= ` <div class = "conteinerTextFilm">
    <ul>
   <li>Titulo: ${el.title} </li>
   <li>Descripción: ${el.description}</li>
   <li>Productor: ${el.producer}</li>
   <li>Score: ${el.rt_score}</li>
   <li>Director ${el.director}</li>
   <li>Año: ${el.release_date}</li>
</ul>
</div>
<div class="box1"><img src= ${el.poster} id ="imgPosterFilm"></div> `;
 createElement.innerHTML= template
 conteinerScrollFilmo.appendChild(createElement);
 return template;
} )
}
  filmoItems(films);

//let title = films.map(el => el.title);

function peopleItems (callback) {
callback.forEach((el) => {    
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardPeople');
  const template1= `<div id= "divCardPeople">
  <div class="frontCard">
  <h4>${el.name} </h4>
  <div class="box2"><img src= ${el.img} id ="imgPosterPeople"></div> 
  </div>
  <div class="backCard">
  <ul>
  <li>Genero: ${el.gender}</li>
  <li>Color de Ojos: ${el.eye_color}</li>
  <li>Color de Cabello: ${el.hair_color}</li>
  <li>Especie: ${el.specie}</li>     
</ul>
</div>
</div>`;
createElement.innerHTML= template1;
conteinerScrollPeople.appendChild(createElement);
return template1;
});
}
peopleItems (filterItems("people", films).flat(1))


function locationItems (callback) {
callback.forEach((el) => {    
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardLocations');
  const template2= `<div id= "divCardLocations">
  <p>${el.name} </p>
  <div class="box3"><img src= ${el.img} id ="imgPosterLocations"></div
  <ul>
  <li>Clima: ${el.climate}</li>
  <li>Terreno: ${el.terrain}</li>
  <li>Nivel del mar: ${el.surface_water}</li>
  <li>Residentes: ${el.residents.map((el) => el.name)}</li>     
</ul>
</div>`;
createElement.innerHTML= template2;
conteinerScrollLocations.appendChild(createElement);
return template2;
});
  }
locationItems(filterItems("locations", films).flat(2))


function vehicleItems (callback) {
callback.forEach((el) => {    
  const createElement= document.createElement("div");
  createElement.setAttribute("class", 'contenedorCardVehicles');
  const template3= `<div id= "divCardVehicles">
  <div class="frontCard4">
  <p> ${el.name} </p>
  <div class="box4"><img src= ${el.img} id ="imgPosterVehicles"></div>
  </div>
  <div class="backCard4">
  <ul>
  <li>Descripción: ${el.description}</li>
  <li>Tipo de Vehículo: ${el.vehicle_class}</li>
  <li>Largo: ${el.length}</li>
  <li>Piloto: ${el.pilot.name}</li>     
</ul>
</div>
</div>`;
createElement.innerHTML= template3;
conteinerScrollVehicles.appendChild(createElement);
return template3;
}); 
}
vehicleItems(filterItems("vehicles", films).flat(1))



//FILTRAR/ORDENAR EN LA SECCION FILMOGRAFIA
const filterButtonsDirector = btnContainerDirector.querySelectorAll(".filterDirector")
const filterButtonsProducer = btnContainerProducer.querySelectorAll(".filterProducer")

//Funcion para filtrar por directores
filterButtonsDirector.forEach((el) => {  
  el.addEventListener("click",function(e) {
    const property= e.currentTarget.dataset.id;
    let newData= filterDirector(films,property)
        conteinerScrollFilmo.innerHTML=" ";
        return filmoItems(newData)    
  })
  return filterButtonsDirector;
})

//Funcion para filtrar por productores
filterButtonsProducer.forEach((el) => {  
  el.addEventListener("click",function(e) {
    const property= e.currentTarget.dataset.id;
    let newData= filterProducer(films,property)
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)    
  })
  return filterButtonsProducer;
})

 //funcion para ordenar las peliculas alfabeticamente 
const filterButtonAsc =document.getElementById("asc");
const filterButtonDesc =document.getElementById("desc");

   filterButtonAsc.addEventListener("click",function() {
      let newData= sortOrdenAlfabeticoAsc(films)
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })

    filterButtonDesc.addEventListener("click",function() {
      let newData= sortOrdenAlfabeticoDesc(films)
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })

  //Funcion para ordenar score 
  const filterButtonScoreAsc =document.getElementById("scoreAsc");
  const filterButtonScoreDesc =document.getElementById("scoreDesc");

  filterButtonScoreAsc.addEventListener("click",function() {
      let newData=sortOrdenNumericoAscScore(films)
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })
    filterButtonScoreDesc.addEventListener("click",function() {
      let newData=sortOrdenNumericoDescScore(films)
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })

  //Funcion para ordenar año de lanzamiento
  const filterButtonYearAsc =document.getElementById("yearAsc");
  const filterButtonYearDesc =document.getElementById("yearDesc");

  filterButtonYearAsc.addEventListener("click",function() {
      let newData=sortOrdenNumericoAscAñoLanz(films)
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })
    filterButtonYearDesc.addEventListener("click",function() {
      let newData=sortOrdenNumericoDescAñoLanz(films)
          conteinerScrollFilmo.innerHTML=" ";
          return filmoItems(newData)   
    })


    //funcion para la barra de busqueda
    let formulario= document.getElementById("formulario"); 
    const boton= document.getElementById("boton");

    const filtrar = () => {
      const texto= formulario.value.toLowerCase();
      conteinerScrollFilmo.innerHTML=" ";
      filmoItems(inputSearch(films, texto)) 

      if (conteinerScrollFilmo.innerHTML== " ") {
        conteinerScrollFilmo.innerHTML=" ";
        conteinerScrollFilmo.innerHTML="Lo sentimos, ingresa otro criterio de busqueda. Recuerda que la busqueda es por títulos de peliculas.";
      }
    }

    boton.addEventListener("click", filtrar)


//FILTRAR/ORDENAR EN LA SECCION LOCACIONES

//Funcion para filtrar por clima
  const filterButtonsClima = btnContainerClima.querySelectorAll(".filterClima")

  filterButtonsClima.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterClima(films,property)
      conteinerScrollLocations.innerHTML=" ";
        return locationItems(newData)    
    })
      return filterButtonsClima;
  })

//Funcion para filtrar por terreno
  const filterButtonsTerreno = btnContainerTerreno.querySelectorAll(".filterTerreno")

  filterButtonsTerreno.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterTerreno(films,property)
       conteinerScrollLocations.innerHTML=" ";
        return locationItems(newData)    
    })
      return filterButtonsClima;
  })

//Funcion para el boton clean
   document.getElementById("cleanLocations").addEventListener("click",function() {
    conteinerScrollLocations.innerHTML=" ";
    locationItems(filterItems("locations", films).flat(2))   
  })


//FILTRAR/ORDENAR EN LA SECCION PERSONAJES

//filtrar por genero
const filterButtonsGenero = btnContainerGenero.querySelectorAll(".filterGenero")

  filterButtonsGenero.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterGenero(films,property)
      conteinerScrollPeople.innerHTML=" ";
        return peopleItems (newData)    
    })
      return filterButtonsGenero;
  })

//filtrar por humanos
const filterButtonsHumano = btnContainerHumanos.querySelectorAll(".filterHumano")

filterButtonsHumano.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterEspecie(films,property)
      conteinerScrollPeople.innerHTML=" ";
        return peopleItems (newData)    
    })
      return filterButtonsHumano;
  })

//filtrar por animales
const filterButtonsAnimal = btnContainerAnimales.querySelectorAll(".filterAnimal")

filterButtonsAnimal.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterEspecie(films,property)
      conteinerScrollPeople.innerHTML=" ";
        return peopleItems (newData)    
    })
      return filterButtonsAnimal;
  })

//filtrar por hibridos
const filterButtonsHibrido = btnContainerHibridos.querySelectorAll(".filterHibrido")

filterButtonsHibrido.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterEspecie(films,property)
      conteinerScrollPeople.innerHTML=" ";
        return peopleItems (newData)    
    })
      return filterButtonsHibrido;
  })

//filtrar por miticos
const filterButtonsMiticos = btnContainerMiticos.querySelectorAll(".filterMitico")

filterButtonsMiticos.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterEspecie(films,property)
      conteinerScrollPeople.innerHTML=" ";
        return peopleItems (newData)    
    })
      return filterButtonsMiticos;
  })

//Funcionalidad para el boton slider
const slider = document.getElementById("slider");
const selector = document.getElementById("selector");
const selectValue =document.getElementById("selectValue");

selectValue.innerHTML = slider.value;

slider.oninput = function () {
  selectValue.innerHTML = this.value;
  selector.style.left = this.value + "%";
}

//Funcion para la barra de edad
slider.addEventListener("change", function() {
  const newData = filterAge(films, slider.value);
    conteinerScrollPeople.innerHTML=" ";
    peopleItems (newData)  
  if (conteinerScrollPeople.innerHTML== " ") {
    conteinerScrollPeople.innerHTML="No hay personajes con esta edad, sigue buscando :)";
  }

})

//Funcion para el boton clean
document.getElementById("cleanPeople").addEventListener("click",function() {
  conteinerScrollPeople.innerHTML=" ";
  peopleItems(filterItems("people", films).flat(1))   
})


//FILTRAR/ORDENAR EN LA SECCION VEHICULOS

//filtrar por tipo de vehiculo
  const filterButtonsAereo = btnContainerAereo.querySelectorAll(".filterAereo")

  filterButtonsAereo.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterVehiculo(films,property)
      conteinerScrollVehicles.innerHTML=" ";
        return vehicleItems (newData)    
    })
      return filterButtonsAereo;
  })

//filtrar por tipo de vehiculo
  const filterButtonsMaritimo = btnContainerMaritimo.querySelectorAll(".filterMaritimo")

  filterButtonsMaritimo.forEach((el) => {  
    el.addEventListener("click",function(e) {
      const property= e.currentTarget.dataset.id;
      let newData= filterVehiculo(films,property)
      conteinerScrollVehicles.innerHTML=" ";
        return vehicleItems (newData)    
    })
       return filterButtonsMaritimo;
  })

//Funcion para el boton clean
document.getElementById("cleanVehicles").addEventListener("click",function() {
  conteinerScrollVehicles.innerHTML=" ";
  vehicleItems(filterItems("vehicles", films).flat(2))   
})


function statisticsScore(ctx) {
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
     type: 'bar',
     data: {
       labels: films.map(el => el.title),
       datasets: [{
         
           label: "Ranking por peliculas",
           data: films.map(el => el.rt_score),
           backgroundColor: [
 
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
            
           ],
           borderColor: [
             'rgba(255, 99, 132, 1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
 
           ],
           borderWidth: 1
           
         }
       ]
     },
     options:{
       indexAxis: 'y',
   
  
     }   
    
   })
 }
 // Llamando desde el DOM
 function mostrarCharts2() {
   const ctx = document.getElementById('myChart2').getContext('2d');
   statisticsScore(ctx)
 }
 
 mostrarCharts2();
 
 
 
 
 const ctx= document.getElementById("myChart").getContext("2d");
  // eslint-disable-next-line no-undef
  new Chart(ctx,{
     type:"bar",
     data: {
         labels:["Yoshifumi Kondō", "Isao Takahata", "Hiromasa Yonebayashi", "Gorō Miyazaki",  "Hiroyuki Morita", "Hayao Miyazaki" ],
         datasets:[{
           label:"Número de Películas",
           data:[1,5,2,2,1,9],
           backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
             ],
             borderColor: [
               'rgba(255, 99, 132, 1)',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 206, 86, 1)',
               'rgba(75, 192, 192, 1)',
               'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
   
             ],
             borderWidth: 1
 
           }
         ]
      } 
     }
     )
 
 
 function statisticsGender(ctx) {
   // eslint-disable-next-line no-undef
   new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Female","Male","NA"],
        datasets: [{
          
            label: "Genero",
            data: [81,87,3],
            backgroundColor: [
  
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
             
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
  
            ],
            borderWidth: 1
            
          }
        ]
      }
    
     
    })
  }
  // Llamando desde el DOM
  function mostrarCharts3() {
    const ctx = document.getElementById('myChart3').getContext('2d');
    statisticsGender(ctx)
  }
  
  mostrarCharts3();



  // funcion para slider

  /*const sliderPortada = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  const btnLeft = document.querySelector("#btn-left");
  const btnRight = document.querySelector("#btn-right");
  sliderPortada.insertAdjacentElement("afterbegin", sliderSectionLast);

  function Next(){
   let sliderSectionFirst=document.querySelectorAll(".slider__section")[0];
   sliderPortada.style.marginLeft="-200 %";
   sliderPortada.style.transition="all 0.50s";
   setTimeout(function(){

  sliderPortada.style.transition="none";
  sliderPortada.insertAdjacentElement("beforeend", sliderSectionFirst);
  sliderPortada.style.marginLeft="-100%";
   },500);
  }
  btnRight.addEventListener("click", function (){

   Next();

  });

  function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    sliderPortada.style.marginLeft="0";
    sliderPortada.style.transition="all 0.50s";
    setTimeout(function(){
 
    sliderPortada.style.transition="none";
    sliderPortada.insertAdjacentElement("afterbegin", sliderSectionLast);
    sliderPortada.style.marginLeft="-100%";
    },500);
   }
   btnRight.addEventListener("click", function (){
 
   Next();
 
   });

   btnLeft.addEventListener("click", function (){
 
    Prev();
  
    });

    setInterval(function(){
    
    Next();

    },3000);*/
   
   




  



