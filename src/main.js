import { example, filters } from "./data.js";

import data from "./data/rickandmorty/rickandmorty.js";

//SELECT DINAMICO

let filterByCategory = {};

filterByCategory["gender"] = ["Seleccione un género","Femenino","Masculino","Sin género","Desconocido",];
filterByCategory["species"] = [ "Seleccione una especie","Animal","Mutante","Desconocido","Enfermedad","Extraterrestre","Humano","Humanoide","Mitologico",  "Parásito","Poopybutthole","Robot","Vampiro" ];
filterByCategory["status"] = ["Selecione un estado de vida","Desconocido", "Muerto", "Vivo"];

document
  .getElementById("filterType")
  .addEventListener("change", changeFilterList);

function changeFilterList() {
  let filterTypeList = document.getElementById("filterType");
  let categoryList = document.getElementById("byCategory");
  let selFilter = filterTypeList.options[filterTypeList.selectedIndex].value;

  let filters = filterByCategory[selFilter];
  let filter;

  while (categoryList.options.length) {
      categoryList.remove(0);
    }
    
    if (filters) {
        for (let i = 0; i < filters.length; i++) {
            filter = new Option(filters[i], i);
            categoryList.options.add(filter);
      }
  }
}

//------- MOSTRAR PERSONAJES ------>>>>>>>>>>>

let allData = data.results; // Data general

let filterData = data.results; // Data filtrada

//---------- FILTRADO DE PERSONAJES ------------>>>

let selCategoria = document.getElementById("byCategory");

let selTipo = document.getElementById("filterType");

function filterCharacters()
{
    selTipo.addEventListener("change", (e) => {
  
    let options = e.target.value;
    console.log(options);
 
    if (options === "gender") {

      selCategoria.addEventListener("change",
        function () {
          let gender = this.options[selCategoria.selectedIndex].value;
      
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
      
      selCategoria.addEventListener("change",
        function () {
          let species = this.options[selCategoria.selectedIndex].value;
      
          switch (species) {
            case "1":
              filterData = allData.filter(
                (personaje) => personaje.species === "Animal"
              );
              break;
            case "2":
              filterData = allData.filter(
                (personaje) => personaje.species === "Mutant"
              );
              break;
            case "3":
              filterData = allData.filter(
                (personaje) => personaje.species === "unknown"
              );
              break;
            case "4":
              filterData = allData.filter(
                (personaje) => personaje.species === "Disease"
              );
              break;
            case "5":
              filterData = allData.filter(
                (personaje) => personaje.species === "Alien"
              );
              break;
            case "6":
              filterData = allData.filter(
                (personaje) => personaje.species === "Human"
              );
              break;
            case "7":
              filterData = allData.filter(
                (personaje) => personaje.species === "Humanoid"
              );
              break;
            case "8":
              filterData = allData.filter(
                (personaje) => personaje.species === "Mytholog"
              );
              break;
            case "9":
              filterData = allData.filter(
                (personaje) => personaje.species === "Parasite"
              );
              break;
            case "10":
              filterData = allData.filter(
                (personaje) => personaje.species === "Poopybutthole"
              );
              break;
            case "11":
              filterData = allData.filter(
                (personaje) => personaje.species === "Robot"
              );
              break;
            case "12":
              filterData = allData.filter(
                (personaje) => personaje.species === "Vampire"
              );
              break;

            default:
              break;
          } return printData(filterData);
        });
      
    } else {
      
      selCategoria.addEventListener("change",
        function () {
          let status = this.options[selCategoria.selectedIndex].value;
      
          switch (status) {
            case "1":
              filterData = allData.filter(
                (personaje) => personaje.status === "unknown"
              );
              break;
            case "2":
              filterData = allData.filter(
                (personaje) => personaje.status === "Dead"
              );
              break;
            case "3":
              filterData = allData.filter(
                (personaje) => personaje.status === "Alive"
              );
              break;
            default:
              break;
          } return printData(filterData);
        });
    };
  });
}
filterCharacters();
 
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

}
);