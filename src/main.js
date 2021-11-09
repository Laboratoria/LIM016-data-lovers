import {computeData} from "./data.js";
import { sortData } from './data.js';
import { functionAll } from './data.js';
import datos from "./data/athletes/athletes.js";

console.log(functionAll(datos));
//----------------SELECTOR DINÁMICO PARA EL FILTRO DE PAÍSES----------------
//Para esconder y mostrar las opciones
const select = document.querySelector('.select');
select.addEventListener('click', function(){
    document.getElementById('options').classList.toggle('active');
});
//Para que el contenido de las opciones se muestreen la parte superior
//const contentSelect = document.querySelector('.contentSelect');
//const inputSelect = document.querySelector('#inputSelect');

const arrayAthletes = datos.athletes;//aqui guardo la data de todos los atletas

const generateAthleteTemplate = (athlete) => {/* una funcion  que retorna con la plantilla de un
     solo atleta que es un string (es un html)*/  
    return `<article class="sportsContainer">
    <section class="boxImgAthlete">
        <img class="classAthlete" src="imagenes/deportista.PNG">
    </section>
    <section class="tableAthletes">
        <p>&#128308 Nombre:${athlete.name}</p>
        <p>&#128308 Genero:${athlete.gender}</p>
        <p>&#128308 Altura:${athlete.height}</p>
        <p>&#128308 Peso:${athlete.weight}</p>
        <p>&#128308 Pais:${athlete.team}</p>
        <p>&#128308 Edad:${athlete.age}</p>
        <p>&#128308 Medalla:${athlete.medal}</p>
    </section>
  </article>`
}

const optionAge = document.getElementById('optionAge');
const nameOpward = document.getElementById('nameOpward');
const nameFallig = document.getElementById('nameFallig');

const insertHtmlAtheles = (htmlAthletes) => { /*funcion para insertar los atletas en mi web.
    En mi id"gridForTest" inserto con innerHTML.*/

   const grid = document.getElementById("gridForTest");
   grid.innerHTML = htmlAthletes;
}


const sortByName = (athlete1,athlete2)=>{

    if (athlete1.name > athlete2.name) {
        return 1;
      }
      if (athlete1.name < athlete2.name) {
        return -1;
      }
      return 0;
};

const sortByAge = (athlete1,athlete2) => {

    if (athlete1.age > athlete2.age) {
        return 1;
      }
      if (athlete1.age < athlete2.age) {
        return -1;
      }
      return 0;
};
/*utilizo map para obtener un nuevo arreglo. Su objetivo es devolver un 
nuevo arreglo donde cada uno de sus elementos será lo que devuelva la función generateAthleteTemplate 
(como un ciclo).
 
Con "join" convierto ese nuevo arreglo en un string y asi lo concateno.*/

document.getElementById("orderBySelect").addEventListener('change', (event) => {
    const sortByValue = event.target.value;// investigar de esto
    if (sortByValue === "1") {
        const htmlAthletesAge = sortData(arrayAthletes, sortByAge,true).map(generateAthleteTemplate).join('');
       insertHtmlAtheles(htmlAthletesAge);//utilzo como argumento mi nuevo arreglo que converti en string.
        
    }
    
    if (sortByValue ==="2"){
        const htmlAthletesName= sortData(arrayAthletes, sortByName,true).map(generateAthleteTemplate).join('');
        insertHtmlAtheles(htmlAthletesName);
    }

    if (sortByValue ==="3"){
        const htmlAthletesNameReverse= sortData(arrayAthletes, sortByName,false).map(generateAthleteTemplate).join('');
          insertHtmlAtheles(htmlAthletesNameReverse);
        
    }
});


/*
const sortByCountry = (athlete1,athlete2) => {

    if (athlete1.team > athlete2.team) {
        return 1;
      }
      if (athlete1.team < athlete2.team) {
        return -1;
      }
      return 0;
};
 
const htmlAthletes = sortData(arrayAthletes, sortByName,).map(generateAthleteTemplate).join('');
////////////////////////////////////

*/
computeData(datos.athletes,"Gold") 
computeData(datos.athletes,"Silver") 
computeData(datos.athletes,"Bronze") 

/*
const open = document.getElementById("open");
const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");


open.addEventListener("click", () =>{
    modalContainer.classList.add("show");
});
close.addEventListener("click", ()=>{
    modalContainer.classList.remove("show");
});
*/


