import data from './data/ghibli/ghibli.js';
//console.log(data.films[0].people)

/*botones para  ingresar a cada seccion*/

document.getElementById("filmografia").addEventListener("click", ()=>{
    document.getElementById("filmo").style.display="block";
    document.getElementById("persona").style.display="none";
    document.getElementById("estre").style.display="none";
    document.getElementById("tda").style.display="none";
    document.getElementById("principal").style.display="none";
  })
   
   document.getElementById("personajes").addEventListener("click", ()=> {
     document.getElementById("persona").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("estre").style.display="none";
     document.getElementById("tda").style.display="none";
     document.getElementById("principal").style.display="none";
   })
   
  /* document.getElementById("estrenos").addEventListener("click", ()=> {
     document.getElementById("estre").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("persona").style.display="none";
     document.getElementById("tda").style.display="none";
     document.getElementById("principal").style.display="none";
   })*/
   
   /*document.getElementById("tienda").addEventListener("click", ()=> {
     document.getElementById("tda").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("estre").style.display="none";
     document.getElementById("persona").style.display="none";
    document.getElementById("principal").style.display="none";
   })*/
   
   /* boton para volver al principal*/
   document.getElementById("logo").addEventListener("click",()=>window.location.reload());


const containerFilmo = document.getElementById("containerFilmo");
const containerPeople = document.getElementById("containerPeople");
const containerEstrenos = document.getElementById("containerEstrenos");
const containerTienda = document.getElementById("containerTienda");


/*let films = [];
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
   <img src= ${poster}> 
</ul>`;
 createElement.innerHTML= template
 containerFilmo.appendChild(createElement);
 return template;
} )*/


const arrayGhibli = data.films;
let arrayPeople = [];
for(let i=0; i<arrayGhibli.length;i++){
    arrayPeople.push(arrayGhibli[i].people)
}

/*arrayPeople.flat(1).forEach((element) => { 
  const createElement= document.createElement("div")

  const template= `<div id= "divCardPeople">
  <ul>
  <li>Nombre: ${element.name} </li>
  <li>Genero: ${element.gender}</li>
  <li>Color de Ojos: ${element.eye_color}</li>
  <li>Color de Cabello: ${element.hair_color}</li>
  <li>Especie: ${element.specie}</li>     
  <div class="box"><img src= ${element.img}></div> 
</ul>
</div>`;
createElement.innerHTML= template;
containerPeople.appendChild(createElement);
return template;
});*/




/*const intento =data.films[0].people;
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
})*/

  
   

 
