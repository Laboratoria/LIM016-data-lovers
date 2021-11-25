import { example, filters } from "./data.js";

// import filters from './data.js'

import data from "./data/rickandmorty/rickandmorty.js";

//SELECT DINAMICO

let filterByCategory = {};

filterByCategory["gender"] = [
  "Femenino",
  "Masculino",
  "Sin género",
  "Desconocido",
];
filterByCategory["species"] = [
  "Animal",
  "Mutante",
  "Desconocido",
  "Enfermedad",
  "Extraterrestre",
  "Humano",
  "Humanoide",
  "Mitologia",
  "Parásito",
  "Poopybutthole",
  "Robot",
  "Vampiro",
];
filterByCategory["status"] = ["Desconocido", "Muerto", "Vivo"];

document
  .getElementById("filterType")
  .addEventListener("change", changeFilterList);

function changeFilterList() {
  let filterTypeList = document.getElementById("filterType");
  let categoryList = document.getElementById("byCategory");
  let selFilter = filterTypeList.options[filterTypeList.selectedIndex].value;

  console.log(selFilter);

  let filters = filterByCategory[selFilter];

  console.log(filters);

  while (categoryList.options.length) {
    categoryList.remove(0);
  }

  if (filters) {
    for (let i = 0; i < filters.length; i++) {
      let filter = new Option(filters[i], i);
      categoryList.options.add(filter);
    }
    console.log(categoryList);
  }
}

//------- MOSTRAR PERSONAJES ------>>>>>>>>>>>

let arrayData = data.results;

let dataRM = data.results.map((result) => result);

// arrayData.push(dataRM)

console.log(dataRM);

// let filtrando = arrayData.filter(e => e.gender == "Male");

//---------- PRUEBAS DE CONECTAR DATA CON MAIN ------------>>>

// seltCategoria.addEventListener("change", (e) => {
//     let options = e.target.value

//     filters(dataRM, options);
// });

/////-----------

// function filterGender(data, condicion) {

//     let generoFiltrado;

//     switch (condicion) {

//         case '0':
//             // generoFiltrado = arrayData.filter("Female")
//             console.log("hola")
//             break;

//         case '1':

//             let genero = this.options[seltCategoria.selectedIndex];

//             console.log(genero.value +":"+ genero.text)

//             generoFiltrado = "1"

//             break;

//         case '2':
//             generoFiltrado = filters(data, "Genderless")

//             break;

//         case '3':
//             generoFiltrado = filters(data, "unknown")

//             break;

//         default:
//             break;

//         // }; console.log(generoFiltrado)
//     }

//     return generoFiltrado

// } filterGender()

let selCategoria = document.getElementById("byCategory");

selCategoria.addEventListener(
  "change",

  function () {
    document.getElementById("conteinerCharacters").remove();

    let category = this.options[selCategoria.selectedIndex].value;

    console.log(category);

    // console.log(genero.value +":"+ genero.text)

    // let resultado = filterGender(genero.value, data)

    switch (category) {
      case "0":
        dataRM = arrayData.filter((personaje) => personaje.gender === "Female");

        console.log("FEMENINO");

        printData(dataRM);
        break;

      case "1":
        dataRM = arrayData.filter((personaje) => personaje.gender === "Male");

        console.log(dataRM);
        console.log("MASCULINO");

        printData(dataRM);

        break;

      case "status":
        console.log("Genderless");

        break;

      case "3":
        console.log("unknown");

        break;

      default:
        break;
    }
    // printData(filterGender)

    // console.log(generoFiltrado)
  }
);

// let seltCategoria = document.getElementById("byCategory");

// seltCategoria.addEventListener('change',

//     function () {

//         // showAllCharacters.innerHTML = "";

//         let genero = this.options[seltCategoria.selectedIndex];

//         console.log(genero.value +":"+ genero.text)

//         let resultado  = filterGender(genero.value, data)

//         printData(filterGender)

//         // console.log(generoFiltrado)
//     }
// )

//----------- Mostrar resultado----------------------------------->>>

// let parrafo = document.getElementById("resultado")

// parrafo.innerHTML = filters(dataRM);

// -------- FUNCION PrintData --------->

function printData(data) {
  let dataPersonajes = document.querySelector("#showAllCharacters");
  dataPersonajes.innerHTML = "";

  let dataPersonaje = data.map(function (result) {
    // console.log(result.type)

    let showCards = `
        
            <div id="conteinerCharacters" class="div-personaje">
                <div class="data-frente-personaje" style="background-image:url(${result.image})">
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
    `;
    return showCards;
  });
  // console.log(printData())
  dataPersonaje.forEach(function (element) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-personaje");

    card.innerHTML = element;

    dataPersonajes.appendChild(card);
  });
}
printData(arrayData);

//-------------------  BOTON "MOSTRAR TODO" -------------->>>>>

// let btnAll = document.getElementById("getAll");
// btnAll.addEventListener("click", function () {
//     document.getElementById("showFilters").style.display = "none";
//     printData()
// });

//-------------------  BOTON "FILTRADO" -------------->>>>>

// let btnFilter = document.getElementById("filtrarDataPersonaje");
// btnFilter.addEventListener("click", function () {
//     document.getElementById("showFilters").style.display = "block";
// });

//-----------------  Ordenado --------------------->>

// let sortName = document.getElementById("sort")
// let name = dataRM.name

// console.log(name)

// sortName.addEventListener("change", (e) => {
//     let options = e.target.value
//     let arrayName = [];

//     // let name = data.results.map(result => result.name);
//     // arrayName.push(name)

//     // console.log(arrayName)

//     sort(arrayName, options);
// });

// let name = data.results.map(result => result.name);
// arrayName.push(name)

// console.log(arrayName)
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
