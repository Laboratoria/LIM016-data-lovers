import { filters, sortData } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

// --- Declaración de variables:

const allData = data.results; // Data general
let filterData = data.results; // Data filtrada

let dataPersonajes = document.querySelector("#showAllCharacters");
const characterType = document.getElementById("filterType");  // Lista de tipos de personaje seleccionado
const characterCategory = document.getElementById("byCategory"); // Lista de categorias de los personajes 
let order = document.getElementById("sort"); // Select "ORDENANDO"

// --- Botones: 
const btnAll = document.getElementById("getAll");

//----------- SELECT DINAMICO ------------>>>>

let filterByCategory = {};

filterByCategory["gender"] = ["Seleccione un género","Desconocido","Femenino","Masculino","Sin género"];
filterByCategory["species"] = [ "Seleccione una especie","Animal","Desconocido","Enfermedad","Extraterrestre","Humano","Humanoide","Mitologico","Mutante", "Parásito","Poopybutthole","Robot","Vampiro" ];
filterByCategory["status"] = ["Selecione un estado de vida", "Desconocido", "Muerto", "Vivo"];

function changeFilterList() {
  
  characterType.addEventListener("change", () => {

    let selFilter = characterType.options[characterType.selectedIndex].value;
    let filters = filterByCategory[selFilter];
    
    while (characterCategory.options.length) {
      characterCategory.remove(0);
      // characterCategory.innerHTML = "";
    };
    
    if (filters) {
      for (let i = 0; i < filters.length; i++) {
        let filter = new Option(filters[i], i);

        characterCategory.options.add(filter);
      }; 
    };
  });
}changeFilterList();

//---------- FILTRADO DE PERSONAJES ------------>>>

function filterCharacters() {
  
  characterType.addEventListener("change", (e) => {
    clearSort();

    let selectFilter = e.target.value;

    if (((selectFilter === "gender") || (selectFilter === "species" ))|| (selectFilter === "status")) {

      characterCategory.addEventListener("change", (category) => {
        category = category.target.value
        filterData = filters(allData, selectFilter, category);
        printData(filterData);
        clearSort();
      });
    }

  })

} filterCharacters();

// -------- FUNCION PrintData --------->

function printData(data) {
  clearCharacters()

  let dataPersonaje = data.map((result) => {
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
  
  dataPersonaje.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card-personaje");
    card.innerHTML = element;
    dataPersonajes.appendChild(card);
  });
} printData(allData);

// -------- ORDENAR PERSONAJES ------------------>>>

function sortCharacters() {
  clearSort();

  order.addEventListener("change", (o) => {

    let sortOrder = o.target.value;
    
    let sortCharacter = sortData(filterData, sortOrder);
    printData(sortCharacter);
  }); 

} sortCharacters();

//-------------------  BOTON "MOSTRAR TODO" -------------->>>>>

function showAllCharacters() {
  btnAll.addEventListener("click", () => {
    clearSort();
    clearSelect();
    clearCharacters();
    printData(allData);
  });
} showAllCharacters();

//-------------------  LIMPIAR CAMPOS -------------->>>>>

function clearCharacters() {
  dataPersonajes.innerHTML = "";
};

function clearSelect() {
  // characterCategory.value = "";
  characterType.value = "";

}; 

function clearSort() {
  order.value = "";
};