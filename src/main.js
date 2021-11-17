import data from './data/ghibli/ghibli.js';
//console.log(data.films[0].people[0])

/*botones para  ingresar a cada seccion*/


import {
  filtrarNombre, ordenarCampeones, filtrandoRoles, calculoStats,
} from './data.js';


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
const containerPeople = document.getElementById("persona");
const containerLocation = document.getElementById("locaciones");
const containerVehiculos = document.getElementById("vehiculos");


let films = [];
films = data.films;
const sectionFilm = films.forEach(({title , description , producer, poster , rt_score , release_date, director}) => {
  const createElement= document.createElement("div")
    const template= `<ul>
   <li>Titulo: ${title} </li>
   <li>Descripción: ${description}</li>
   <li>Productor: ${producer}</li>
   <li>Score: ${rt_score}</li>
   <li>Director ${director}</li>
   <li>Año: ${release_date}</li>
   <div class="box"><img src= ${poster}></div> 
</ul></div>`;
 createElement.innerHTML= template
 containerFilmo.appendChild(createElement);
 return template;
} )


const arrayGhibli = data.films;
let arrayPeople = [];
for(let i=0; i<arrayGhibli.length;i++){
    arrayPeople.push(arrayGhibli[i].people)
}

arrayPeople.flat(1).forEach(({name, gender, eye_color, hair_color, specie ,img}) => {    
  const createElement= document.createElement("div")

  const template= `<div id= "divCardPeople">
  <ul>
  <li>Nombre: ${name} </li>
  <li>Genero: ${gender}</li>
  <li>Color de Ojos: ${eye_color}</li>
  <li>Color de Cabello: ${hair_color}</li>
  <li>Especie: ${specie}</li>     
  <div class="box"><img src= ${img}></div> 
</ul>
</div>`;
createElement.innerHTML= template;
containerPeople.appendChild(createElement);
return template;
});




const intento =data.films[0].locations;
intento.forEach((el) => {
  const createElement= document.createElement("div")
  const intentoDos =data.films;
  intentoDos.forEach((t) => {
 let createDiv = document.createElement("div");
let templateDos =
 `<div id= "peopleTitle">
<h2> ${t.title} </h2>
</div>`;
return templateDos;
  })
  const template= `<div id= "divCardPeople">
  <ul>
  <li>Nombre: ${el.name} </li>
  <li>Genero: ${el.gender}</li>
  <li>Color de Ojos: ${el.eye_color}</li>
  <li>Color de Cabello: ${el.hair_color}</li>
  <li>Especie: ${el.specie}</li>     
  <div class="box"><img src= ${el.img}></div> 
</ul>
</div>`;
createElement.innerHTML= template;
containerLocation.appendChild(createElement);
createElement.appendChild(createDiv)
return template;
})


let arrayVehicules = [];
for(let i=0; i<arrayGhibli.length;i++){
    arrayVehicules.push(arrayGhibli[i].vehicles)
}

arrayVehicules.flat(1).forEach(({name, description, vehicle_class, length ,img, pilot}) => {    
  const createElement= document.createElement("div")

  const template3= `<div id= "divCardPeople">
  <ul>
  <li>Nombre: ${name} </li>
  <li>Descripcion: ${description}</li>
  <li>Tipo de vehiculo: ${vehicle_class}</li>
  <li>Largo ${length}</li>
  <li>Piloto: ${pilot.name}</li>     
  <div class="box"><img src= ${img}></div> 
</ul>
</div>`;
createElement.innerHTML= template3;
containerVehiculos.appendChild(createElement);
return template3;
});



let arrayLocations = [];
for(let i=0; i<arrayGhibli.length;i++){
    arrayLocations.push(arrayGhibli[i].locations)
}

arrayLocations.flat(1).forEach(({img, climate , terrain, surface_water, residents, name}) => {    
  const createElement= document.createElement("div")

  const template4= `<div id= "divCardPeople">
  <ul>
  <li>Nombre: ${name} </li>
  <li>Clima: ${climate}</li>
  <li>Terreno: ${terrain}</li>
  <li>Nivel del mar: ${surface_water}</li>
  <li>Residentes: ${residents}</li>     
  <div class="box"><img src= ${img}></div> 
</ul>
</div>`;
createElement.innerHTML= template4;
containerLocation.appendChild(createElement);
return template4;
});




let pelicula= data.films
 const fomulario= document.querySelector ("#fomulario"); 
 const boton= document.querySelector ("#boton");
 const resultado= document.querySelector ("#resultado");

 const filtrar  =  () =>{
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
 boton.addEventListener("click", filtrar);
 fomulario.addEventListener("keyup", filtrar);
 filtrar ();