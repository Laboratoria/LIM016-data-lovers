import { example } from './data.js';

import filtros from './data.js'
 
import data from './data/rickandmorty/rickandmorty.js';

//SELECT DINAMICO

let filterByCategory = {};

filterByCategory['gender'] = ['Femenino', 'Masculino', 'Sin genero', 'Desconocido'];
filterByCategory['species'] = ['Animal', 'Mutante', 'Desconocido', 'Enfermedad', 'Extraterrestre', 'Humano', 'Humanoide', 'Mitologia', 'Parásito', 'Poopybutthole', 'Robot', 'Vampiro'];
filterByCategory['status'] = ['Desconocido', 'Muerto', 'Vivo'];

document.getElementById("filterType").addEventListener("change", changeFilterList);

function changeFilterList() {

    let filterTypeList = document.getElementById("filterType");
    let categoryList = document.getElementById("byCategory");
    let selFilter = filterTypeList.options[filterTypeList.selectedIndex].value;
    let filters = filterByCategory[selFilter];

    while (categoryList.options.length) {
        categoryList.remove(0);
    }

    if (filters) {
        for (let i = 0; i < filters.length; i++) {
            let filter = new Option(filters[i], i);
            categoryList.options.add(filter);
        }
    }
}

// let arraydata;
// function printData() {

    let dataPersonajes = document.querySelector('#showAllCharacters');

    let dataPersonaje = data.results.map(function (result) {
        
        return `
        <div class="card-personaje">
            <div class="div-personaje">
                <div class="data-frente-personaje" style="background-image:url(${result.image })">
                
                    <div class="name-personaje-frente">
                    <h5>${result.name}</h5>
                    </div>

                </div>
               
                <div class="data-atras-personaje">

                    <div class="name-personaje-atras">
                        <h5>${result.name}</h5>
                    </div>
  
                    <div>
                        <p>Status: ${result.status}</p>
                        <p>Species: ${result.species}</p>
                        <p>Gender: ${result.gender}</p>
                        <p>Origin: ${result.origin.name}</p>
                        <p>Location: ${result.location.name}</p>
                    </div>
                </div>
    `
     
    })
    // console.log(printData())
    dataPersonaje.forEach(function (element) {
        let card = document.createElement("div");
        card.setAttribute('class', 'card-personaje')

        card.innerHTML = element

        dataPersonajes.appendChild(card)
    });
// }


// ----------- MUESTRA DE CARDS PERSONAJES  ------------//

// const cardsPersonajes = document.querySelector('#cards-personajes');

// const cardPersonaje = data.results.map(function (result) {

//     return `
              
//         <div class="card-titulo">
//             <h3>Name:${result.name} </h3>
//         </div>
//         <div class="card-imagen">
//             <img src="${result.image}" alt="imagen">
//         </div>
//         <div class="card-datos">
//         <ul>
//             <li>Status:${result.status}</li>
//             <li>Species:${result.species}</li>
//             <li>Gender:${result.gender}</li>
//             <li>Origin:${result.origin.name}</li>
//             <li>Location:${result.location.name}</li>
//         </ul>

//         </div>
//     `
// });

// cardPersonaje.forEach(function (element) {
//     let card = document.createElement("div");
//     card.setAttribute('class', 'card-personaje')

//     card.innerHTML = element
    
//     cardsPersonajes.appendChild(card)
// });

// -------- FIN DE CARDS PERSONAJES  ------------//


//---------> FILTRO GENERO <------------------- //

//obteniendo el valor del genero seleccionado
// let btnfiltrar = document.getElementById("filtrarDataPersonaje");

// //obteniendo el div de filtrado
// const filtrarData = document.getElementById("filtrado-de-datos")
// filtrarData.setAttribute("class", "filtrado-de-datos")

// filtrarData.style.display = "none";

// btnfiltrar.addEventListener("click", () => {
//     //filtrando por genero
//     let genero = document.getElementById("genero").value;
//     document.getElementById("generoSelect").textContent = genero;
//     filtrarData.style.display = "grid";

    
//     let cardPersonaje = data.results.map(function (dp) {
//         return console.log(dp.name)
  
//     });
//     //     let texto = document.createElement("h1");
     
//     //     cardPersonaje.appendChild(texto)

//     //     alert("test")
//     document.getElementById("showFilterCharacters").innerHTML = filtros.genero(genero);
    
//     // });
// });


   // let tituloFiltrado = document.createElement("h3");
    // tituloFiltrado.textContent="Filtrado  por Genero";
    // tituloFiltrado.setAttribute("class", "titulo-filtrado");
    // filtrarData.appendChild(tituloFiltrado);

//---------> FIN FILTRO GENERO <---------------- //


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

///--------   Prueba busqueda por personaje"------------------

// const search = document.getElementById("btnSearch");

// search.addEventListener('click', function () {
    
//     let text = document.getElementById("search").value

//     document.getElementById('result').value = filtros.search(text);
        
// });
    
/////-----------  Fin busqueda por personaje

//filtrando
// let arrayEspecie = []
// data.results.forEach(element => {
//     //console.log(element.name)
//     arrayEspecie.push(element.species)
// });
// console.log(arrayEspecie)

// let selectop = document.getElementById("name__personaje")
// //console.log(selectop.value)

// for (let i = 0; i < arrayEspecie.length; i++) {
//     let op = document.createElement("option")
//     selectop.appendChild(op)
//     let valueOption = arrayEspecie[i];
//     op.setAttribute("value", `${valueOption}`)
//     op.textContent = valueOption
//     //console.log(valueOption)

// }
// console.log(selectop)