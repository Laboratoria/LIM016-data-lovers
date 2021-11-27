import { example, filters } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

// --- Declaración de variables:

const allData = data.results; // Data general
let filterData = data.results; // Data filtrada

let dataPersonajes = document.querySelector("#showAllCharacters");
const characterType = document.getElementById("filterType");  // Lista de tipos de personaje seleccionado
const CharacterCategory = document.getElementById("byCategory"); // Lista de categorias de los personajes 
const sortCharacters = document.getElementById("sort"); //Ordenar de personajes.
// --- Botones: 
const btnAll = document.getElementById("getAll");

//----------- SELECT DINAMICO ------------>>>>

let filterByCategory = {};

filterByCategory["gender"] = ["Seleccione un género","Femenino","Masculino","Sin género","Desconocido",];
filterByCategory["species"] = [ "Seleccione una especie","Animal","Mutante","Desconocido","Enfermedad","Extraterrestre","Humano","Humanoide","Mitologico",  "Parásito","Poopybutthole","Robot","Vampiro" ];
filterByCategory["status"] = ["Selecione un estado de vida","Desconocido", "Muerto", "Vivo"];

document
  .getElementById("filterType")
  .addEventListener("change", changeFilterList);

function changeFilterList() {
  let selFilter = characterType.options[characterType.selectedIndex].value;
  let filters = filterByCategory[selFilter];
  let filter;

  while (CharacterCategory.options.length) {
    CharacterCategory.remove(0);
  };
    
    if (filters) {
        for (let i = 0; i < filters.length; i++) {
            filter = new Option(filters[i], i);
            CharacterCategory.options.add(filter);
      };
  };
};

//---------- FILTRADO DE PERSONAJES ------------>>>

// const filter = document.getElementById("filter");

// // filter.addEventListener('click', (e) => {
// //   let Tipo = document.getElementById("filterType");

// //   // characterType.addEventListener("change", (e) => {

// //   //     let options = e.target.value;

// //   let Categoria = document.getElementById("byCategory").value;

// //   console.log(characterType, CharacterCategory);
// // })

function filterCharacters(){ 
    characterType.addEventListener("change", (e) => {
  
    let options = e.target.value
          
      if (options === "gender") {

        CharacterCategory.addEventListener("change", () => {
            let gender = this.options[CharacterCategory.selectedIndex].value;
        
            switch (gender) {
              case "1":
                filterData = allData.filter((personaje) => personaje.gender === "Female");
                break;
              case "2":
                filterData = allData.filter((personaje) => personaje.gender === "Male");
                break;
              case "3":
                filterData = allData.filter((personaje) => personaje.gender === "Genderless");
                break;
              case "4":
                filterData = allData.filter((personaje) => personaje.gender === "unknown");
                break;
              default:
                break;
      
            } return printData(filterData);
          }
        );
      } else if (options === "species") {
        
        CharacterCategory.addEventListener("change", () => {
            let species = this.options[CharacterCategory.selectedIndex].value;
        
            switch (species) {
              case "1":
                filterData = allData.filter((personaje) => personaje.species === "Animal");
                break;
              case "2":
                filterData = allData.filter((personaje) => personaje.species === "Mutant");
                break;
              case "3":
                filterData = allData.filter((personaje) => personaje.species === "unknown");
                break;
              case "4":
                filterData = allData.filter((personaje) => personaje.species === "Disease");
                break;
              case "5":
                filterData = allData.filter((personaje) => personaje.species === "Alien");
                break;
              case "6":
                filterData = allData.filter((personaje) => personaje.species === "Human");
                break;
              case "7":
                filterData = allData.filter((personaje) => personaje.species === "Humanoid");
                break;
              case "8":
                filterData = allData.filter((personaje) => personaje.species === "Mytholog");
                break;
              case "9":
                filterData = allData.filter((personaje) => personaje.species === "Parasite");
                break;
              case "10":
                filterData = allData.filter((personaje) => personaje.species === "Poopybutthole");
                break;
              case "11":
                filterData = allData.filter((personaje) => personaje.species === "Robot");
                break;
              case "12":
                filterData = allData.filter((personaje) => personaje.species === "Vampire");
                break;

              default:
                break;
            } return printData(filterData);
          });
        
      } else {
        
        CharacterCategory.addEventListener("change", () => {
            let status = this.options[CharacterCategory.selectedIndex].value;

            switch (status) {
              case "1":
                filterData = allData.filter((personaje) => personaje.status === "unknown");
                break;
              case "2":
                filterData = allData.filter((personaje) => personaje.status === "Dead");
                break;
              case "3":
                filterData = allData.filter((personaje) => personaje.status === "Alive");
                break;
              default:
                break;
            } return printData(filterData);
          });
      };
    });
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

//-------------------  BOTON "MOSTRAR TODO" -------------->>>>>

function showAllCharacters() {
  btnAll.addEventListener("click", () => {
    clearCharacters();
    printData(allData);
  });
} showAllCharacters();

function clearCharacters() {
  dataPersonajes.innerHTML = "";
};

// -------- ORDENAR PERSONAJES ------------------>>>

// console.table(filterData);

let name = filterData.map((data) => data.name)

console.log(name);
// console.table(filterData.sort((a, b) => b.name < a.name));