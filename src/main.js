import { example } from './data.js';

import filters from './data.js'
 
import data from './data/rickandmorty/rickandmorty.js';

//SELECT DINAMICO

let filterByCategory = {};

filterByCategory['gender'] = ['Femenino', 'Masculino', 'Sin género', 'Desconocido'];
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

//------- MOSTRAR PERSONAJES ------>>>>>>>>>>>

let arrayData = [];
let dataRM = data.results.map(function (result) {
    return arrayData.push(result)

});
// console.log(dataRM)


// -------- FUNCION PrintData --------->

function printData() {

    let dataPersonajes = document.querySelector('#showAllCharacters');

    let dataPersonaje = data.results.map(function (result) {
        // console.log(result.type)
        
        let showCards = `
        
            <div class="div-personaje">
                <div class="data-frente-personaje" style="background-image:url(${result.image })">
                    <div class="name-personaje-frente">
                        <h5>${result.name}</h5>
                    </div>
                </div>
               
                <div class="data-atras-personaje">

                    <div class="name-personaje-atras">
                        <h4>${result.name}</h4>
                        <h6 class="type-character">${result.type}</h6>
                    </div>
                        
                    <div>
                        <p>Status: ${result.status}</p>
                        <p>Species: ${result.species}</p>
                        <p>Gender: ${result.gender}</p>
                        <p>Origin: ${result.origin.name}</p>
                        <p>Location: ${result.location.name}</p>
                    </div>
                </div>
            </div>
    `
       return showCards;
       
    })
    // console.log(printData())
    dataPersonaje.forEach(function (element) {
        
        let card = document.createElement("div");
        card.setAttribute('class', 'card-personaje')

        card.innerHTML = element

        dataPersonajes.appendChild(card)
    }); 
 }
// printData()

//-------------------  BOTON "MOSTRAR TODO" -------------->>>>>


let btnAll = document.getElementById("getAll");
btnAll.addEventListener("click", function () {
    document.getElementById("showFilters").style.display = "none";
    printData()
});


//-------------------  BOTON "FILTRADO" -------------->>>>>

let btnFilter = document.getElementById("filtrarDataPersonaje");
btnFilter.addEventListener("click", function () {
    document.getElementById("showFilters").style.display = "block";
});


// let filterByCategory = {};

// filterByCategory['gender'] = ['Femenino', 'Masculino', 'Sin género', 'Desconocido'];
// filterByCategory['species'] = ['Animal', 'Mutante', 'Desconocido', 'Enfermedad', 'Extraterrestre', 'Humano', 'Humanoide', 'Mitologia', 'Parásito', 'Poopybutthole', 'Robot', 'Vampiro'];
// filterByCategory['status'] = ['Desconocido', 'Muerto', 'Vivo'];

// document.getElementById("filterType").addEventListener("change", changeFilterList);

// function changeFilterList() {

//     let filterTypeList = document.getElementById("filterType");
//     let categoryList = document.getElementById("byCategory");
//     let selFilter = filterTypeList.options[filterTypeList.selectedIndex].value;
//     let filters = filterByCategory[selFilter];

//     while (categoryList.options.length) {
//         categoryList.remove(0);
//     }

//     if (filters) {
//         for (let i = 0; i < filters.length; i++) {
//             let filter = new Option(filters[i], i);
//             categoryList.options.add(filter);
//         }
//     }
// }



// let filterType = document.getElementById("filterType");
// let category = document.getElementById("byCategory");

// ['Femenino', 'Masculino', 'Sin género', 'Desconocido'];
 


document.getElementById("filterType").addEventListener("change",filterGender)
let arrayFilters = [];

function filterGender() {
        

        let filterTypeList = document.getElementById("filterType");
        let category = document.getElementById("byCategory");
        let selFilter = filterTypeList.options[filterTypeList.selectedIndex].value;
        let filters = filterByCategory[selFilter];
    
        while (category.options.length) {
            category.remove(0);
        }

        if (filters) {
            for (let i = 0; i < filters.length; i++) {
                console.log(filters[i])
                // arrayFilters.push(filters[i])
                // category.options.add(filters);

                }
        } console.log(arrayFilters)
}
     

    
    // filterGender()
// filterType.addEventListener("change",
    // function () {
    //     const selectOption = this.options[filterType.selectedIndex].value;

    //     switch (selectOption) {
    //         case "gender":
    //             alert(selectOption);



    //             break;
            
    //         case "species":

    //             alert("PRueba1")
    //             break;
            
    //         case "status":
    //             alert("PRueba2")
    //             break;
            
    //         default:
    //             console.log("sigue funcionando, tranquila")
    //             break;
    //     }
    
    // }
// );



// if (filterTypeList == gender) {
//     if (condition) {
        
//     }
    
// }


//---------- PRUEBAS DE CONECTAR DATA CON MAIN ------------>>>



let parrafo = document.getElementById("resultado")

parrafo.innerHTML = filters(dataRM);

// console.log(parrafo.innerHTML);


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
