import { example, filters } from './data.js';

// import filters from './data.js'
 
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

let dataRM = data.results.map(result => result);

    arrayData.push(dataRM)

console.log(arrayData)
 
// let filtrando = arrayData.filter(e => e.gender == "Male");


//---------- PRUEBAS DE CONECTAR DATA CON MAIN ------------>>>

let seltCategoria = document.getElementById("byCategory")

seltCategoria.addEventListener("change", (e) => {
    let options = e.target.value
  
    filters(dataRM, options);
});



//----------- Mostrar resultado----------------------------------->>>

let parrafo = document.getElementById("resultado")

parrafo.innerHTML = filters(dataRM);


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


// -------------------  Pruebas filtros 2---------------------->>>>>>

// document.getElementById("filterType").addEventListener("change",filterGender)
// let arrayFilters = [];

// function filterGender() {
        

//         let filterTypeList = document.getElementById("filterType");
//         let category = document.getElementById("byCategory");
//         let selFilter = filterTypeList.options[filterTypeList.selectedIndex].value;
//         let filters = filterByCategory[selFilter];
    
//         while (category.options.length) {
//             category.remove(0);
//         }

//         if (filters) {
//             for (let i = 0; i < filters.length; i++) {
//                 console.log(filters[i])
//                 // arrayFilters.push(filters[i])
//                 // category.options.add(filters);

//                 }
//         } console.log(arrayFilters)
// }
     
// -------------------  Pruebas filtros 2---------------------->>>>>>
    
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
