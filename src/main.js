import { example } from './data.js';

// import filtros from 'data.js'
 
import data from './data/rickandmorty/rickandmorty.js';

// ---------------- Pruebas DATAS -------------//

// obteniendo la data del objeto results de rickyandmorty.js

// let cardsPersonajes = document.querySelector('.card');

// let cardPersonaje = document.createDocumentFragment();
//     for (let id = 0; id < 494; id++) {
    
//         let datos = document.createElement('p');
//             datos.textContent = `Nombre:${id}`;
        
//         cardPersonaje.appendChild(datos);
// }
// cardsPersonajes.appendChild(cardPersonaje);


// ------------ Fin de Pruebas DATAS -----------//

// ----------- MUESTRA DE CARDS PERSONAJES  ------------//

const cardsPersonajes = document.querySelector('#cards-personajes');

const cardPersonaje = data.results.map(function (result) {

    return `
              
        <div class="card-titulo">
            <h3>Name:${result.name} </h3>
        </div>
        <div class="card-imagen">
            <img src="${result.image}" alt="imagen">
        </div>
        <div class="card-datos">
        <ul>
            <li>Status:${result.status}</li>
            <li>Species:${result.species}</li>
            <li>Gender:${result.gender}</li>
            <li>Origin:${result.origin.name}</li>
            <li>Location:${result.location.name}</li>
        </ul>

        </div>
    `
});

cardPersonaje.forEach(function (element) {
    let card = document.createElement("div");
    card.setAttribute('class', 'card-personaje')

    card.innerHTML = element
    
    cardsPersonajes.appendChild(card)
});
// -------- FIN DE CARDS PERSONAJES  ------------//

// ----------------- PRUEBA - Episodios-----------  ///

//episodios del 492

// let episodios = data.results;

// let arraylinks = []

//     episodios.map(function (clave) {
//         arraylinks.push(clave.episode)
    
//     })

// console.log(arraylinks) //filtra links del indice 492

// document.write(arraylinks[492]) //filtra links del indice 492


// -------- FIN DE PRUEBAS ESPISODIOS ------------//

// -------- PRUEBAS FILTRADO -----------------------//

//filtrando PERSONAJES

let arrayName = []
    data.results.map(element => {
    //console.log(element.name)
    arrayName.push(element.name)
});
    console.log(arrayName)

let selectop = document.getElementById("name__personaje")
//console.log(selectop.value)

for (let i = 0; i < arrayName.length; i++) {

    let op = document.createElement("option")
    selectop.appendChild(op)

    let valueOption = arrayName[i];
    op.setAttribute("value", `${valueOption}`)
    op.textContent = valueOption
    //console.log(valueOption)

}
    console.log(selectop)

// let arrayGender = []
//     data.results.forEach(element => {
//     //console.log(element.name)
//     arrayGender.push(element.gender)
// });
//     console.log(arrayGender)

// let selectop = document.getElementById("genero__personaje")
// //console.log(selectop.value)

// for (let i = 0; i < arrayGender.length; i++) {
//     let op = document.createElement("option")
//     selectop.appendChild(op)

//     let valueOption = arrayGender[i];
//     op.setAttribute("value", `${valueOption}`)
//     op.textContent = valueOption
//     //console.log(valueOption)

// }
// console.log(selectop)   