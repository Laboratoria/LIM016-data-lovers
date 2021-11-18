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
})

// Episodios

const episodio = data.results

let e = []

    episodio.map(function (text) {
        let rText = text.episode
       
        for (let index = 0; index < rText.length; index++) {

            e.push(rText[index])
            console.log(e)

        }
        
    })



// const episodes = data.results.map(function (clave) {
//     let rEpisodio = clave.episode
//     for (let i = 0; i < rEpisodio.length ; i++){
    
//         console.log(rEpisodio[i])
//     }

    // console.log(rEpisodio)
    //     console.log(clave.episode.forEach(function (e) {
    //         console.log(e)
    //     }))
    // })
// });
//     map(function (episode) {
//     return `
//             <p>Episode:
//             <a href=${episode}></a>
//             </p>
//         `
// });
// console.log(episodes)

// episodes.forEach(function (element) {
//     let episode = document.createElement("div");
//     episode.setAttribute('class', 'episode')

//     episode.innerHTML = element

//     cardsPersonajes.appendChild(episode)
// })

