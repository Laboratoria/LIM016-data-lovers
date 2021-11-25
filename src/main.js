import { example, filters } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

//SELECT DINAMICO

let filterByCategory = {};

filterByCategory["gender"] = [
  "Seleccione un género",
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

let allData = data.results; // Data general

let filterData = data.results; // Data filtrada

//---------- PRUEBAS DE CONECTAR DATA CON MAIN ------------>>>

// seltCategoria.addEventListener("change", (e) => {
//     let options = e.target.value

//     filters(filterData, options);
// });

let selCategoria = document.getElementById("byCategory");

selCategoria.addEventListener("change",

  function () {

    let category = this.options[selCategoria.selectedIndex].value;

    // console.log(category);

    switch (category) {
        case "1":
        filterData = allData.filter((personaje) => personaje.gender === "Female");
            printData(filterData);
            
        break;

      case "2":
        filterData = allData.filter((personaje) => personaje.gender === "Male");

        printData(filterData);

        break;

      case "3":
        filterData = allData.filter((personaje) => personaje.gender === "Genderless");

        printData(filterData);

        break;

      case "4":
        filterData = allData.filter((personaje) => personaje.gender === "unknown");

        printData(filterData);

        break;

      default:
        break;
    }
  }
);

// -------- FUNCION PrintData --------->

function printData(data) {
  let dataPersonajes = document.querySelector("#showAllCharacters");
  dataPersonajes.innerHTML = "";

  let dataPersonaje = data.map(function (result) {
   
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
  
  dataPersonaje.forEach(function (element) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-personaje");

    card.innerHTML = element;

    dataPersonajes.appendChild(card);
  });
}
printData(allData);

//-------------------  BOTON "MOSTRAR TODO" -------------->>>>>

let btnAll = document.getElementById("getAll");
btnAll.addEventListener("click", function () {
    let dataPersonajes = document.querySelector("#showAllCharacters");
    dataPersonajes.innerHTML = "";

    printData(allData)

});

//-------------------  BOTON "FILTRADO" -------------->>>>>

// let btnFilter = document.getElementById("filtrarDataPersonaje");
// btnFilter.addEventListener("click", function () {
//     document.getElementById("showFilters").style.display = "block";
// });

