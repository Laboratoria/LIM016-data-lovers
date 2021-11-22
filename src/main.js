import datos from "./data/athletes/athletes.js";
import { computeData, functionAll, sortData, sortByAge, sortByName, allCountries, allSport } from "./data.js";

const arrayAthletes = datos.athletes;//aqui guardo la data de todos los atletas
const arrayCountries = sortData(Array.from(allCountries(arrayAthletes))).reverse();//array de paises
const arraySport = sortData(Array.from(allSport(arrayAthletes))).reverse();// array de dportes
const team = document.getElementById('team');//select de paises
const sport = document.getElementById('sport');//select de dorpote
const orderBySelect = document.getElementById('orderBySelect');//select para ordenar 


// una funcion  que retorna con la plantilla de un solo atleta que es un string (es un html)
const generateAthleteTemplate = (athlete) => {

  const athletegender = athlete.gender === "F" ? "./imagenes/atletafemenino2.jpg" : "./imagenes/atletasmasculinos.jpg"
  return `<article class="sportsContainer">
    <section class="boxImgAthlete">
        <img class="classAthlete" src= ${athletegender}>
    </section>
    <section class="tableAthletes">
        <p class="nameAthlete">Nombre:${athlete.name}</p>
        <p>&#128308 Genero:${athlete.gender}</p>
        <p>&#128308 Altura:${athlete.height}</p>
        <p>&#128308 Deporte:${athlete.sport}</p>
        <p>&#128308 Peso:${athlete.weight}</p>
        <p>&#128308 Pais:${athlete.team}</p>
        <p>&#128308 Edad:${athlete.age}</p>
        <p>&#128308 Medalla:${athlete.medal}</p>
    </section>
  </article>`
}
// funcion que retorna plantilla de  optiones de los filtros
const generateOptionTemplate = (arrayF) => {

  return `<option value="${arrayF}"> ${arrayF} </option> `
}
// variable que tiene al opcion predeterminada de los select
const OptionselectedTemplate = `<option value="todos" selected="selected"> Todos </option>`;

//funcion para insertar las opciones de los dos select en html
const insertHtmArray = (elemet, htmlArray) => {

  elemet.innerHTML = OptionselectedTemplate + htmlArray;/*aqui voy a insertar mi plantilla que esta
 en generateOptionTemplate*/
}

//funcion para insertar los atletas en mi web.En mi id"gridForTest" inserto con innerHTML. 
const insertHtmlAtheles = (htmlAthletes) => {

  const grid = document.getElementById("gridForTest");
  grid.innerHTML = htmlAthletes;/*aqui voy a insertar mi plantilla que esta
   en generateAthleteTemplate*/
}

//aqui genero la lista de opciones para el filtro de paises y deportes.
let htmlCountrie = arrayCountries.map(generateOptionTemplate).join("");
insertHtmArray(team, htmlCountrie);
let htmlSport = arraySport.map(generateOptionTemplate).join("");
insertHtmArray(sport, htmlSport);

//declaro estas dos funciones afuera porque necesito usarlas en los dos addEventListener
const filterByTeamFunc = (teamSelected) => {/*funcion que me retorna una funcion los atletas de un pais 
  que sean igual al valor del select */
  return (athlete) => athlete.team == teamSelected;
}

const filterBySportFunc = (sportSelected) => {/*funcion que me retorna una funcion de atletas por deportes 
  que sean igual al valor del select */
  return (athlete) => athlete.sport == sportSelected;
}
let filtersToSort = [];/*esta varieble la utilizo para guardar todos los filtros realizados y 
utilizarlos para ordenar.*/

//funcion que trabaja con todos los filtros.
const functionFilterGrouping = () => {

  const sportSelected = sport.value;//*guardo el valor(la accion del usuario)
  const teamSelected = team.value;//*guardo el valor(la accion del usuario)

  /* uso condicionales para comparar: si el valor de mis dos select es igual igual a "todos" se mostrara 
   la data completa sin filtrar  y con un map nos debuelve el arreglo modificado con la platilla de los atletas */
  if (teamSelected === "todos" && sportSelected === "todos") {

    insertHtmlAtheles(arrayAthletes.map(generateAthleteTemplate).join(''));
    filtersToSort = arrayAthletes;

  }
  if (teamSelected !== "todos" && sportSelected === "todos") {
    let filterOnlyByCountry = functionAll(arrayAthletes, filterByTeamFunc(teamSelected));
    filtersToSort = filterOnlyByCountry;
    insertHtmlAtheles(filterOnlyByCountry.map(generateAthleteTemplate).join(''));

  }

  /*pero si el usuario selecciona la opcion todos en el filtro "pais" y selecciona un deporte que no es igual "todos"
  utilizo mi funcion para filtrar donde le paso como argumento la data de los altetas y el otro argumento seria mi 
  condicion que es la funcion que me retorna una funcion que filtra  atletas por pais que sean igual al valor del select */
  if (teamSelected === "todos" && sportSelected !== "todos") {
    let filteredAthletes = functionAll(arrayAthletes, filterBySportFunc(sportSelected));
    filtersToSort = filteredAthletes;
    insertHtmlAtheles(filteredAthletes.map(generateAthleteTemplate).join(''));

  }
  if (teamSelected !== "todos" && sportSelected !== "todos") {
    //primero hago el filtro de atletas por pais que sean igual al valor del select
    const filteredByTeam = functionAll(arrayAthletes, filterByTeamFunc(teamSelected));
    /*despues ese nuevo arreglo filtrado lo vuelvo a filtrar  y le coloco como condicion mi funcion que filtra atletas
    por deporte que sea igual al valor seleccionado por el usuario.*/
    const filteredByTeamAndSport = functionAll(filteredByTeam, filterBySportFunc(sportSelected));
    filtersToSort = filteredByTeamAndSport;
    insertHtmlAtheles(filteredByTeamAndSport.map(generateAthleteTemplate).join(''));

  }
  //console.log("containerFatherMain: ", document.getElementById('containerFatherMain'));
  document.getElementById('imgBetterWord').style.display = 'none';//ocultamos
  document.getElementById('carousel').style.display = 'none';//ocultamos
  //document.getElementById('displaySport').style.display = 'block';//mostramos
  document.getElementById('displayOrder').style.display = 'block';//mostramos

};


team.addEventListener('change', functionFilterGrouping);
sport.addEventListener('change', functionFilterGrouping);


//orderBySelect es donde se encuentra el select de mis opciones para ordenar.
orderBySelect.addEventListener('change', (event) => {
  const sortByValue = event.target.value;/*guardo el eveto(la accion del usuario), su target y el valor que le puse*/
  if (sortByValue === "1") { //lo comparo
    //Aqui utilizo mi funcion sortData para ordenar mi arreglo original "arrayAthletes", le paso mi 
    //funcion de comparacion "sorByAge" y le indico la ordenacion que es ascendente con "true"

    let athleteSortByAge = sortData(filtersToSort, sortByAge, true);/*utilizo como argumento mi nuevo 
    arreglo que converti en string.*/
    insertHtmlAtheles(athleteSortByAge.map(generateAthleteTemplate).join(''));
  }

  if (sortByValue === "2") {
    let athleteSortByName = sortData(filtersToSort, sortByName, true);
    insertHtmlAtheles(athleteSortByName.map(generateAthleteTemplate).join(''));
  }

  if (sortByValue === "3") {
    let sortByNameReverse = sortData(filtersToSort, sortByName, false);
    insertHtmlAtheles(sortByNameReverse.map(generateAthleteTemplate).join(''));
  }
});

//Nai
computeData(datos.athletes, "Gold")
computeData(datos.athletes, "Silver")
computeData(datos.athletes, "Bronze")

