import data from './data/ghibli/ghibli.js';
//console.log(data.films[0].people)

/*botones para  ingresar a cada seccion*/

document.getElementById("filmografia").addEventListener("click", ()=>{
    document.getElementById("filmo").style.display="block";
    document.getElementById("persona").style.display="none";
    document.getElementById("vehiculos").style.display="none";
    document.getElementById("locations").style.display="none";
    document.getElementById("portada").style.display="none";
  })
   
   document.getElementById("personajes").addEventListener("click", ()=> {
     document.getElementById("persona").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("vehiculos").style.display="none";
     document.getElementById("locations").style.display="none";
     document.getElementById("portada").style.display="none";
   })
   
   document.getElementById("locations").addEventListener("click", ()=> {
     document.getElementById("locations").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("persona").style.display="none";
     document.getElementById("vehiculos").style.display="none";
     document.getElementById("portada").style.display="none";
   })
   
     document.getElementById("vehicles").addEventListener("click", ()=> {
     document.getElementById("vehiculos").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("locations").style.display="none";
     document.getElementById("persona").style.display="none";
    document.getElementById("portada").style.display="none";
   })
   
   /* boton para volver al principal*/
   document.getElementById("logo").addEventListener("click",()=>window.location.reload());


const containerFilmo = document.getElementById("filmo");
const containerPeople = document.getElementById("persona");
const containerLocation = document.getElementById("locations");
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
 filmo.appendChild(createElement);
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
persona.appendChild(createElement);
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
containerPeople.appendChild(createElement);
createElement.appendChild(createDiv)
return template;
})

  
   

 
