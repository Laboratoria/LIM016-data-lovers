import data from './data/ghibli/ghibli.js';
console.log(data.films[0].people[0]);



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
     //document.getElementById("principal").style.display="none";
     /*People();*/
   })
   
   document.getElementById("estrenos").addEventListener("click", ()=> {
     document.getElementById("estre").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("persona").style.display="none";
     document.getElementById("tda").style.display="none";
     document.getElementById("principal").style.display="none";
   })
   
   document.getElementById("tienda").addEventListener("click", ()=> {
     document.getElementById("tda").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("estre").style.display="none";
     document.getElementById("persona").style.display="none";
    document.getElementById("principal").style.display="none";
   })
   
   /* boton para volver al principal*/
   document.getElementById("logo").addEventListener("click",()=>window.location.reload());



//Traer todos los titulos de cada pelicula
   ///const arrayTitle= data.films.map(anim => anim.title)
     //console.log(arrayTitle)
//Traer los id de las animaciones en general
     //const arrayIdGeneral= data.films.map(anim => anim.id)
     //console.log(arrayIdGeneral)
//Traer los id solo del primer personaje de cada pelicula
//const arrayIdFirstPeople= data.films.map(anim => anim.people[0].id)
     //console.log(arrayIdFirstPeople)

//for (let l=0; l<arreglo.length; l++) {
    //climates = arreglo[i].locations[l];
    //console.log(climates);



const containerFilmo = document.getElementById("containerFilmo");
const containerPeople = document.getElementById("containerPeople");
const containerLocation = document.getElementById("containerLocation");
const containerVehiculos = document.getElementById("containerVehiculos");

let films = [];
films = data.films;




const sectionFilm = films.forEach(({title , description , producer, poster , rt_score , release_date, director}) => {
  const createElement= document.createElement("div")

    const template= `<div class=containerPelicula><ul>
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

/* for (let i = 0; i<films.length; i++) {
        let people= films[i].people */
        /* for (let p=0 ; p<films[i].people.length; p++) {
        personajes = films[i].people[p];
     */
       
   
/*console.log(films);

function People (){
    
    films.forEach(e => templateDos(e.people) );

}
 function templateDos(e){
 console.log(e) 
 for( let i=0; i< e.length; i++) {
  const createElement= document.createElement("div")

    
   const template= `<ul>
   <li>Nombre: ${e[i].name} </li>
   <li>Genero: ${e[i].gender}</li>
   <li>Edad: ${e[i].age}</li>
   <li>Color de Ojos: ${e[i].eye_color}</li>
   <li>Color de Cabello ${e[i].hair_color}</li>
   <li>Especie: ${e[i].specie}</li>
   <li>people: ${e[i].people}</li>
   <img src= ${e[i].img}> 
</ul>`;
createElement.innerHTML= template
 console.log(createElement);
 containerPeople.appendChild(createElement);
 return template;
}}*/


const arrayGhibli = data.films

console.log(arrayGhibli[0].people[0])


const arrayPeople = []
for(let i=0; i<arrayGhibli.length;i++){
    arrayPeople.push(arrayGhibli[i].people)
}


const sectionPeople = arrayPeople.flat(1).forEach(({name, gender, eye_color, hair_color ,specie, img}) => {
    const createElement= document.createElement("div")
  
    const template= `<ul>
    <li>Nombre: ${name} </li>
    <li>Genero: ${gender}</li>
    <li>Color de Ojos: ${eye_color}</li>
    <li>Color de Cabello ${hair_color}</li>
    <li>Especie: ${specie}</li>     
    <div class="box"><img src= ${img}></div> 
 </ul>`;
  createElement.innerHTML= template
  console.log(createElement);
  containerPeople.appendChild(createElement);
  return template;
})
  

const arrayLocation = []
for(let i=0; i<arrayGhibli.length;i++){
    arrayLocation.push(arrayGhibli[i].locations)
}


const sectionLocation = arrayLocation.flat(1).forEach(({name, climate, terrain, surface_water ,residents, img}) => {
    const createElement= document.createElement("div")
  
    const template = 
    `<div><ul>
    <li>Nombre: ${name} </li>
    <li>Clima: ${climate}</li>
    <li>Terreno: ${terrain}</li>
    <li>Color de Cabello: ${surface_water}</li>
    <li>Residentes: ${residents}</li>
    </div>      
    <div class="box1"><img src= ${img}></div> 
 </ul>`;
  createElement.innerHTML= template
  console.log(createElement);
  containerLocation.appendChild(createElement);
  return template;
})
  
const arrayVehicles = []
for(let i=0; i<arrayGhibli.length;i++){
    arrayVehicles.push(arrayGhibli[i].vehicles)
}


const sectionVehiculos = arrayVehicles.flat(2).forEach(({name, description, vehicle_class, length ,pilot, img}) => {
    const createElement= document.createElement("div")
  
    const template = 
    `<div><ul>
    <li>Nombre: ${name} </li>
    <li>Description: ${description}</li>
    <li>Clase de Vehiculo: ${vehicle_class}</li> 
    <li>Largo: ${length}</li>
    <li>Piloto: ${pilot}</li>
    </div>    
    <div class="box1"><img src= ${img}></div> 
 </ul>`;
  createElement.innerHTML= template
  console.log(createElement);
  containerVehiculos.appendChild(createElement);
  return template;
})
  





















 //recorrerCadaPelicula();

/*function recorrerCadaPelicula () {
    let arreglo = [];
    arreglo = data.films;

    for (let i = 0; i<arreglo.length; i++){ 
        let titulo = arreglo[i].title;
        let refImagen = arreglo[i].poster;
        let description = arreglo[i].description;
        let producer = arreglo[i].producer;
        let director = arreglo[i].director;
        let año = arreglo[i].release_date;
        let score = arreglo[i].rt_score;
    /*Aqui hicimos este array vacio para empujar los datos de climate a traves de un for que toma los datos 
    de una propiedad dentro de una propiedad*/
        /*let climate =[];
        for (let a=0; a<(arreglo[i].locations).length; a++){
        climate = arreglo[i].locations[a].climate;
        //console.log(climate)
    }

         let people = [];
        for (let p=0; p<(arreglo[i].people).length; p++) {
        people = arreglo[i].people[p].img;
        console.log(people)*/

  
   

 
