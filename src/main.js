import { example } from './data.js';
 
import data from './data/rickandmorty/rickandmorty.js';

// obteniendo la data del objeto results de rickyandmorty.js

// let cardsPersonajes = document.querySelector('.card');

// let cardPersonaje = document.createDocumentFragment();
//     for (let id = 0; id < 494; id++) {
    
//         let datos = document.createElement('p');
//             datos.textContent = `Nombre:${id}`;
        
//         cardPersonaje.appendChild(datos);
// }
// cardsPersonajes.appendChild(cardPersonaje);


const cardsPersonajes = document.querySelector('#cards-personajes');

const cardPersonaje = data.results.map(function (result) {
        return `
    <div class="card-personaje">
        <div class="card-titulo">
            <h3>Name:${result.name} </h3>
        </div>
        <div class="card-datos">
            <li>Status:${result.status}</li>
            <li>Species:${result.species}</li>
            <li>Gender:${result.gender}</li>
        </div>
    </div>
    `
 });

cardPersonaje.forEach(function (element) {
    let card = document.createElement("div")
   
        card.innerHTML = element
            
    cardsPersonajes.appendChild(card)
})