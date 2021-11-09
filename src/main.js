import {computeData} from "./data.js";
import datos from "./data/athletes/athletes.js";

computeData(datos.athletes,"Gold") 
computeData(datos.athletes,"Silver") 
computeData(datos.athletes,"Bronze") 



    /*  for (let i= 0; i < datos.athletes.length; i++) {
    const filterTeam = datos.athletes[i].team;

    console.log(filterTeam)
    
}  */
/*const array =[];
const deportes= datos.filter(athletes => athletes.medal === "Silver" )
for (i= 0; i < deportes.length; i ++){
 array.push(deportes[i].team +" " + deportes[i].medal)
}
console.log(array);*/


// datos.filter(e=>e.athletes)
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//import datos from './data/athletes/athletes.js';
//console.log(functionAll(datos));

/*let printFilter = document.getElementById('printFilter');
let arrFilter  = [];
let checkboxes = document.querySelectorAll('.checkbox');*/


const open = document.getElementById("open");
const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");


open.addEventListener("click", () =>{
    modalContainer.classList.add("show");
});
close.addEventListener("click", ()=>{
    modalContainer.classList.remove("show");
});










