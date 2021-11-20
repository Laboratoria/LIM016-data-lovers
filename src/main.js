import data from './data/ghibli/ghibli.js';
import {filterPeopleLocationsVehicles} from  './data.js';
 
let films = [];
films = data.films;
console.log (filterPeopleLocationsVehicles("people", films))

/*botones para  ingresar a cada seccion*/ 




  document.getElementById("filmografia").addEventListener("click", ()=>{
    document.getElementById("filmo").style.display="block";
    document.getElementById("persona").style.display="none";
    document.getElementById("vehiculos").style.display="none";
    document.getElementById("locaciones").style.display="none";
    document.getElementById("portada").style.display="none";
  })
   
   document.getElementById("personajes").addEventListener("click", ()=> {
     document.getElementById("persona").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("vehiculos").style.display="none";
     document.getElementById("locaciones").style.display="none";
     document.getElementById("portada").style.display="none";
   })
  
   
     document.getElementById("vehicles").addEventListener("click", ()=> {
     document.getElementById("vehiculos").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("locaciones").style.display="none";
     document.getElementById("persona").style.display="none";
    document.getElementById("portada").style.display="none";
   })
   

   document.getElementById("locations").addEventListener("click", ()=> {
    document.getElementById("locaciones").style.display="block";
    document.getElementById("filmo").style.display="none";
    document.getElementById("persona").style.display="none";
    document.getElementById("vehiculos").style.display="none";
    document.getElementById("portada").style.display="none";
  })
   /* boton para volver al principal*/
   document.getElementById("logo").addEventListener("click",()=>window.location.reload());


const containerFilmo = document.getElementById("filmo");
const containerPeople = document.getElementById("containerPeople");
const containerLocation = document.getElementById("locaciones");
const containerVehiculos = document.getElementById("conteinerVehicles");


const sectionFilm = films.forEach(({title , description , producer, poster , rt_score , release_date, director}) => {
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardFilm');
    const template= ` <div class = "conteinerTextFilm">
    <ul>
   <li>Titulo: ${title} </li>
   <li>Descripción: ${description}</li>
   <li>Productor: ${producer}</li>
   <li>Score: ${rt_score}</li>
   <li>Director ${director}</li>
   <li>Año: ${release_date}</li>
</ul>
</div>
<div class="box1"><img src= ${poster} id ="imgPosterFilm"></div> `;
 createElement.innerHTML= template
 containerFilmo.appendChild(createElement);
 return template;
} )


filterPeopleLocationsVehicles("people", films).flat(1).forEach((el) => {    
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
containerPeople.appendChild(createElement);
return template1;
});


  /* <li>Residentes: ${el.residents[0].name}</li> */
filterPeopleLocationsVehicles("locations", films).flat(2).forEach((el) => {    
  const createElement= document.createElement("div")
  createElement.setAttribute("class", 'contenedorCardLocations');
  const template2= `<div id= "divCardLocations">
  <div class="frontCard">
  <p>${el.name} </p>
  <div class="box3"><img src= ${el.img} id ="imgPosterLocations"></div>
  </div>
  <div class="backCard">
  <ul>
  <li>Clima: ${el.climate}</li>
  <li>Terreno: ${el.terrain}</li>
  <li>Nivel del mar: ${el.surface_water}</li>
  <li>Residentes: ${el.residents}</li>     
</ul>
</div>
</div>`;
console.log(template2)
createElement.innerHTML= template2;
containerLocation.appendChild(createElement);
return template2;
});


filterPeopleLocationsVehicles("vehicles", films).flat(1).forEach((el) => {    
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
containerVehiculos.appendChild(createElement);
return template3;
});



function compareTitle(a, b )
{
if ( a.title.toLowerCase() < b.title.toLowerCase()){
  return -1;
}
if ( a.title.toLowerCase() > b.title.toLowerCase()){
  return 1;
}
return 0;
}

films.sort(compareTitle);
console.log(films);




/*let pelicula= data.films
 const fomulario= document.querySelector ("#fomulario"); 
 const boton= document.querySelector ("#boton");
 const resultado= document.querySelector ("#resultado");




/*const filtrar  =  () =>{
  //console.log (formulario.value);
  const texto= fomulario.value.toLowerCase();


  for( let titulo of films ){

   let title= films.title.toLowerCase();
   
   if ( title.indexOf(texto)  !== -1){

   resultado.innerHTML += `

   <li>${titulo.title}<li>
   `
   }
  }

    if (resultado.innerHtml === ""){
    resultado.innerHtml += `
        <li> Producto no encontrado... <li>`

   } 
 }
 /*
 boton.addEventListener("click", filtrar);
 fomulario.addEventListener("keyup", filtrar);
 filtrar ();*/