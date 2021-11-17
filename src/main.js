// import data from "./data/pokemon/pokemon.js";

import {
  buscarPoke,
  huevitoPokemon,
  filtarCp,
  rarezaPokemon,
  ordenAlfaNumerico,
  typePokemones,
  regionFuncion,
  tiposSelect,
  regionSelect,
  rarezaSelect
} from "./data.js";

import { start } from "./carrusel.js";

window.addEventListener("load", () => {
  document.getElementById("loader").classList.toggle("loader2")
})

start()

const container = document.querySelector(".pokemon-container");
const orden = document.getElementById("orden");
const cp = document.getElementById("cp");
const eggPoke = document.getElementById("egg");
const search = document.getElementById("search");
const tipos = document.getElementById("tipos");
const region = document.getElementById("region");
const rareza = document.getElementById("rareza");
const navToggle = document.querySelector("#toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible")
})

// let arrayPokemon;

let arrayCambiante = "";

async function fetchPokemon() {
  const jsondata = await fetch("./data/pokemon/pokemon.json");
  const data = await jsondata.json();

  const arrayPokeP = data.pokemon;

  console.log(data.pokemon)

  mostrarPokemon(data.pokemon, arrayPokeP);
  handleDivRegion(data, arrayPokeP);
  eggPokemon(data, arrayPokeP);
  buscarPokemon(data, arrayPokeP);
  filtrarTiposPokemon(data, arrayPokeP);
  filtrarRarezaPokemon(data, arrayPokeP);
  filtroCP(arrayPokeP);
  filtroOrdenAlfaNumerico(arrayPokeP);
  filtrarTiposSelect(data, arrayPokeP);
  filtrarRegionSelect(data, arrayPokeP);
  filtrarRarezaSelect(data, arrayPokeP);

  return data.pokemon;
}


fetchPokemon();

// const arrayPokeP =  data.pokemon

function handleDivRegion(data, arrayPokeP) {
  document.getElementById("divRegionPokemon").addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.getAttribute("id")) {
      container.innerHTML = "";
      // console.log(e.target.getAttribute('id'))
      const regionP = e.target.getAttribute("id");
      const arrayRegionPoke = regionFuncion(regionP, data.pokemon);
      mostrarPokemon(arrayRegionPoke, arrayPokeP);
    }
  });
}

//cp

function filtroCP(arrayPokeP) {
  cp.addEventListener("change", (e) => {
    container.innerHTML = "";
    const tipoCp = e.target.value;
    const filtroPoke = filtarCp(tipoCp, arrayCambiante);
    mostrarPokemon(filtroPoke, arrayPokeP);
  });
}

// filtrar pokemon por huevito

function eggPokemon(data, arrayPokeP) {
  eggPoke.addEventListener("change", (e) => {
    container.innerHTML = "";
    const eggType = e.target.value;

    const arrayEgg = huevitoPokemon(eggType, data.pokemon);
    mostrarPokemon(arrayEgg, arrayPokeP);
  });
}

//orden alfabetico

function filtroOrdenAlfaNumerico(arrayPokeP) {
  orden.addEventListener("change", (e) => {
    container.innerHTML = "";
    const typeOrden = e.target.value;
    const ordenAlfaNum = ordenAlfaNumerico(typeOrden, arrayCambiante);
    mostrarPokemon(ordenAlfaNum, arrayPokeP);
  });
}
//buscar pokemon
function buscarPokemon(data, arrayPokeP) {
  search.addEventListener("keyup", () => {
    container.innerHTML = "";
    const texto = search.value.toLowerCase();
    const arrayBuscar = buscarPoke(texto, data.pokemon);
    mostrarPokemon(arrayBuscar, arrayPokeP);
  });
}

//tipos de pokemon x botones
function filtrarTiposPokemon(data, arrayPokeP){
  document.getElementById("divTiposPokemones").addEventListener("click", (e) => {
  e.preventDefault();

      if (e.target.getAttribute("id")) {
        container.innerHTML = "";
        // console.log(e.target.getAttribute('id'))
        const tipoP = e.target.getAttribute("id");
        const arraytipoPoke = typePokemones(tipoP, data.pokemon);
        mostrarPokemon(arraytipoPoke, arrayPokeP);
      }
    });
}

//tipos de pokemon x select
function filtrarTiposSelect(data, arrayPokeP) {
  tipos.addEventListener("change", (e) => {
    container.innerHTML = "";
    const tipoSelect = e.target.value;
    const arrayTipoSelect = tiposSelect(tipoSelect, data.pokemon);
    mostrarPokemon(arrayTipoSelect, arrayPokeP);
  });
}

//region de pokemon x select 

function filtrarRegionSelect(data, arrayPokeP){
  region.addEventListener("change", (e) => {
    e.preventDefault();
    container.innerHTML = "";
    const valorSelect = e.target.value;
    const arrayRegionSelect = regionSelect(valorSelect, data.pokemon);

    mostrarPokemon(arrayRegionSelect, arrayPokeP);
  });
}

//rareza de pokemon x select

function filtrarRarezaSelect(data, arrayPokeP) {
  rareza.addEventListener("change", (e) => {
    container.innerHTML = "";
    const rarezaPoke = e.target.value;
    const arrayRarezaSelect = rarezaSelect(rarezaPoke, data.pokemon)

    mostrarPokemon(arrayRarezaSelect, arrayPokeP)
});
}

function filtrarRarezaPokemon(data, arrayPokeP) {
  document.getElementById("divRarezaPokemon").addEventListener("click", (e) => {
    e.preventDefault();

    let pruebaFetch = data.pokemon;
    if (e.target.getAttribute("value")) {
      container.innerHTML = "";
      const rarezaP = e.target.getAttribute("value");
      const arrayRarezaPoke = rarezaPokemon(rarezaP, pruebaFetch);
      mostrarPokemon(arrayRarezaPoke, arrayPokeP);
    }
  });
}

//-------------funcion que muestra los pokemones

export function mostrarPokemon(array, arrayPokeP) {
  arrayCambiante = array;

  const numero = document.getElementById("parrafo");
  numero.classList.add("totalPokemons");
  numero.innerHTML = `<p> Total :${array.length}</p>`;

  for (let i = 0; i < array.length; i++) {
    //div que contendrá todas las caracteristicas de cada pokemon
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    //cp del pokemon
    const cpPokemon = document.createElement("p");
    cpPokemon.classList.add("cp");
    cpPokemon.innerHTML = `<p>CP: ${array[i].stats["max-cp"]}</p>`;

    //div que contiene las evoluciones
    const evolucion = document.createElement("div");
    evolucion.classList.add("evolucion");

    //div que contiene la imagen
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = `${array[i].img}`;
    spriteContainer.appendChild(sprite);

    //numero de pokemon
    const numero = document.createElement("div");
    numero.classList.add("numero");
    numero.innerHTML = `<p>#${array[i].num}</p>`;

    //nombre del pokemon
    const nombre = document.createElement("div");
    nombre.classList.add("name");
    nombre.innerHTML = `<p>${array[i].name}</p>`;

    //div que contiene el nombre y numero de pokemon
    const nombreNumero = document.createElement("div");
    nombreNumero.classList.add("nombreNumero");

    nombreNumero.append(nombre, numero);

    //evoluciones
    let obj = array[i].evolution;

    const nombrePrev = "Pre Evolutions";
    const nombreNext = "Next Evolutions";

    let nextEvolciones = [];
    let prevEvoluciones = [];
    if (obj["next-evolution"]) {
      if (obj["next-evolution"][0].name) {
        for (let a = 0; a < obj["next-evolution"].length; a++) {
          let next1 = document.createElement("p");
          next1.innerHTML = `Next-evolution ${obj["next-evolution"][a].name}`;
          let nombrePoke = obj["next-evolution"][a].name;
          nextEvolciones.push(nombrePoke);
        }
      }
      if (obj["next-evolution"][0]["next-evolution"]) {
        let next2 = document.createElement("p");
        next2.innerHTML = `Next-evolution ${obj["next-evolution"][0]["next-evolution"][0].name}`;
        nextEvolciones.push(obj["next-evolution"][0]["next-evolution"][0].name);
      }
    }

    if (obj["prev-evolution"]) {
      let prev1 = document.createElement("p");
      prev1.innerHTML = `Pre-evolution ${obj["prev-evolution"][0].name}`;
      prevEvoluciones.push(obj["prev-evolution"][0].name);

      if (obj["prev-evolution"][0]["prev-evolution"]) {
        let prev2 = document.createElement("p");
        prev2.innerHTML = `Pre-evolution  ${obj["prev-evolution"][0]["prev-evolution"][0].name}`;
        prevEvoluciones.push(
          obj["prev-evolution"][0]["prev-evolution"][0].name
        );
      }
    }

    //boton para mostrar pokemon

    const tarjetaPokemon = document.createElement("button");
    tarjetaPokemon.classList.add("mostrarTarjeta");
    tarjetaPokemon.type = "button";
    tarjetaPokemon.innerText = "Saber más";

    tarjetaPokemon.addEventListener("click", () => {
      //contenedor de la tarjeta pokemon
      const modalContainer = document.createElement("div");
      modalContainer.classList.add("modal-container");
      //modalContainer.style.display="block";
      const cardInfo = document.createElement("div");
      cardInfo.classList.add("cardInfo");
      cardInfo.setAttribute(`id`, `${array[i].num}`);

      //boton de cerrar tarjeta de informacion
      const btnCerrar = document.createElement("button");
      btnCerrar.classList.add("btnCerrar");

      btnCerrar.type = "button";
      btnCerrar.innerHTML = `<i class="fas fa-times-circle"></i>`;

      btnCerrar.addEventListener("click", () => {
        cardInfo.remove();
        modalContainer.remove();
      });

      //Crear imagen del pokemon
      const containerImg = document.createElement("div");
      containerImg.classList.add("containerImg");
      const infoPokemon = document.createElement("img");
      infoPokemon.src = array[i].img;

      //crear contenedor de informacion pokemon
      const containerVista = document.createElement("div");
      containerVista.classList.add("containerVista");
      const nameCardPokemon = document.createElement("h");
      nameCardPokemon.innerHTML = array[i].name;

      //crear div que contiene nombre y número

      //Crear botones de vista de la tarjeta
      //---------------btn1--------------------------
      const navTarjeta = document.createElement("div");
      navTarjeta.classList.add("botones-tarjetas");
      const button1 = document.createElement("button");
      button1.type = "button";
      button1.classList.add("active");
      button1.textContent = "About";

      button1.addEventListener("click", () => {
        vista2.style.display = "none";
        vista1.style.display = "block";
        vista3.style.display = "none";
        vista4.style.display = "none";
        button1.className = "active";
        button2.className = "";
        button3.className = "";
        button4.className = "";
      });

      //-------------btn2------------------------------
      const button2 = document.createElement("button");
      button2.type = "button";
      button2.classList.add("btn");
      button2.textContent = "Power";

      button2.addEventListener("click", () => {
        vista2.style.display = "block";
        vista1.style.display = "none";
        vista3.style.display = "none";
        vista4.style.display = "none";
        button1.className = "";
        button3.className = "";
        button2.className = "active";
        button4.className = "";
      });

      //------------btn3-------------------------------
      const button3 = document.createElement("button");
      button3.type = "button";
      button3.classList.add("btn");
      button3.textContent = "Moves";

      //------------btn4-------------------------------
      const button4 = document.createElement("button");
      button4.type = "button";
      button4.classList.add("btn");
      button4.textContent = "Fortalezas";

      button4.addEventListener("click", () => {
        vista4.style.display = "block";
        vista1.style.display = "none";
        vista3.style.display = "none";
        vista2.style.display = "none";
        button1.className = "";
        button3.className = "";
        button2.className = "";
        button4.className = "active";
      });

      //crear Vista 1
      const vista1 = document.createElement("div");
      vista1.classList.add("vista1");

      //crear DIV de descripción
      const description_box = document.createElement("div");
      description_box.classList.add("description");
      const titulo = document.createElement("h");
      titulo.innerHTML = "Description";
      const about = document.createElement("p");
      about.innerHTML = array[i].about;

      //crear DIV con info del pokemon eso, etc...
      const features = document.createElement("div");
      features.classList.add("features");

      //-------------agregar peso---------------
      const weight = document.createElement("div");
      weight.innerHTML = `Weight: <br> ${array[i].size.weight}`;

      //-------------agregar tipo---------------
      const typePokemon = document.createElement("div");
      typePokemon.classList.add("divTipo");
      array[i].type.forEach((element) => {
        const tipoLog = document.createElement("p");
        tipoLog.innerHTML = `${element}<img class="logo-${element}">`;
        typePokemon.appendChild(tipoLog);
      });

      //............agregar tamaño--------------
      const height = document.createElement("div");
      height.innerHTML = `Height:<br>${array[i].size.height}`;

      //CREANDO DIV DE CARAMELOS POKEMON
      const candyContainerPadre = document.createElement("div");
      candyContainerPadre.classList.add("candyContainerPadre");

      const palabraEvolucion = document.createElement("div");
      palabraEvolucion.classList.add("palabraEvolucion");
      palabraEvolucion.innerHTML = "Next evolution";

      const candyContainer = document.createElement("div");
      candyContainer.classList.add("candyContainer");

      const imgCandy = document.createElement("img");
      imgCandy.src = "img/caramelos.png";

      let caramelos = "";

      let evolutionProperty = Object.keys(obj);

      if (evolutionProperty[1] == "next-evolution") {
        caramelos = obj["next-evolution"][0]["candy-cost"];
      } else {
        candyContainerPadre.style.display = "none";
      }

      const candy = document.createElement("p");
      candy.innerHTML = caramelos;

      candyContainer.append(imgCandy, candy);
      candyContainerPadre.append(palabraEvolucion, candyContainer);

      //................div de las evoluciones.....
      const divTotalEvoluciones = document.createElement("div");
      divTotalEvoluciones.classList.add("divTotal");

      //-----------------VISTA 2
      const vista2 = document.createElement("div");
      vista2.classList.add("vista2");

      vista2.style.display = "none";

      //-----------contenedor de cada habilidad----------

      const arrayStats = array[i].stats;
      // console.log(arrayStats);

      for (const property in arrayStats) {
        const prueba = document.createElement("div");
        prueba.classList.add("prueba");

        const nameStats = document.createElement("h");
        nameStats.innerHTML = `${property}`;
        const barra = document.createElement("div");
        barra.classList.add("barra");
        const progreso = document.createElement("div");
        progreso.classList.add("progreso");
        const nombreStats = property;
        //progreso.style("--w:")
        const stringStats = parseInt(arrayStats[property]);
        const numStats = stringStats;
        let valorAlto = "";

        if (nombreStats == "max-hp") {
          let dataArray = new Array();
          for (const i in arrayPokeP) {
            dataArray.push(arrayPokeP[i].stats["max-hp"]);
          }
          //console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          // console.log(valorAlto);
        }
        if (nombreStats == "base-attack") {
          let dataArray = new Array();
          for (const i in arrayPokeP) {
            dataArray.push(arrayPokeP[i].stats["base-attack"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          // console.log(valorAlto);
        }
        if (nombreStats == "max-cp") {
          let dataArray = new Array();
          for (const i in arrayPokeP) {
            dataArray.push(arrayPokeP[i].stats["max-cp"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          // console.log(valorAlto);
        }
        if (nombreStats == "base-defense") {
          let dataArray = new Array();
          for (const i in arrayPokeP) {
            dataArray.push(arrayPokeP[i].stats["base-defense"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          // console.log(valorAlto);
        }
        if (nombreStats == "base-stamina") {
          let dataArray = new Array();
          for (const i in arrayPokeP) {
            dataArray.push(arrayPokeP[i].stats["base-stamina"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          // console.log(valorAlto);
        }

        let porcentaje = ((numStats / valorAlto) * 100).toFixed(2);

        progreso.style.setProperty(`--w`, `${porcentaje}%`);
        progreso.setAttribute(`id`, `${property}`);

        const valorStat = document.createElement("p");
        valorStat.innerHTML = stringStats;

        barra.appendChild(progreso);
        prueba.append(nameStats, barra, valorStat);
        vista2.appendChild(prueba);
      }

      //VISTA 3
      const vista3 = document.createElement("div");
      const tabla1 = document.createElement("div");
      const tabla2 = document.createElement("div");
      vista3.style.display = "none";
      vista3.classList.add("vista3");
      //vista1.classList.add("vista3");

      button3.addEventListener("click", () => {
        vista3.style.display = "block";
        vista2.style.display = "none";
        vista1.style.display = "none";
        vista4.style.display = "none";
        button1.className = "";
        button2.className = "";
        button3.className = "active";
        button4.className = "";
      });

      let quickName = array[i]["quick-move"];
      let specialName = array[i]["special-attack"];

      const description = document.createElement("p");
      description.innerHTML = `BD:Base Damage<br>
        MD:Moves Duration(seg)`;

      //quick-moves
      let tituloTabla1 = document.createElement("h3");
      tituloTabla1.innerHTML = `Quick Move`;

      let table = document.createElement("table");
      let thead = document.createElement("thead");
      let tbody = document.createElement("tbody");

      table.append(thead, tbody);
      vista3.appendChild(tituloTabla1);
      tabla1.appendChild(table), vista3.appendChild(tabla1);

      let titulo1 = document.createElement("tr");
      let heading_1 = document.createElement("th");
      heading_1.classList.add("nameTable");
      heading_1.innerHTML = "Name";

      let heading_2 = document.createElement("th");
      heading_2.innerHTML = "Move";
      heading_2.classList.add("moveTable");

      let heading_3 = document.createElement("th");
      heading_3.innerHTML = "BD";
      heading_3.classList.add("bdTable");

      let heading_4 = document.createElement("th");
      heading_4.innerHTML = "Energy";
      heading_4.classList.add("energyTable");

      let heading_5 = document.createElement("th");
      heading_5.innerHTML = "MD";
      heading_5.classList.add("mdTable");

      titulo1.append(heading_1, heading_2, heading_3, heading_4, heading_5),
        thead.appendChild(titulo1);

      for (let a = 0; a < quickName.length; a++) {
        // Creating and adding data to second row of the table
        let row_2 = document.createElement("tr");

        let row_2_data_1 = document.createElement("td");
        row_2_data_1.innerHTML = `${quickName[a].name}`;

        let row_2_data_2 = document.createElement("td");
        row_2_data_2.innerHTML = `${quickName[a].type}`;
        row_2_data_2.classList.add(`tabla-${quickName[a].type}`);

        let row_2_data_3 = document.createElement("td");
        row_2_data_3.innerHTML = `${quickName[a]["base-damage"]}`;

        let row_2_data_4 = document.createElement("td");
        row_2_data_4.innerHTML = `${quickName[a].energy}`;

        let row_2_data_5 = document.createElement("td");
        row_2_data_5.innerHTML = `${quickName[a]["move-duration-seg"]}`;

        row_2.appendChild(row_2_data_1);
        row_2.appendChild(row_2_data_2);
        row_2.appendChild(row_2_data_3);
        row_2.appendChild(row_2_data_4);
        row_2.appendChild(row_2_data_5);
        tbody.appendChild(row_2);
      }

      //special-attack
      let tituloTabla2 = document.createElement("h3");
      tituloTabla2.innerHTML = `Special Attack`;

      let table2 = document.createElement("table");
      let thead2 = document.createElement("thead");
      let tbody2 = document.createElement("tbody");

      table2.appendChild(thead2);
      table2.appendChild(tbody2);
      vista3.appendChild(tituloTabla2);
      tabla2.appendChild(table2);
      vista3.appendChild(tabla2);
      vista3.appendChild(description);

      let row_3 = document.createElement("tr");
      let heading1 = document.createElement("th");
      heading1.classList.add("nameTable");
      heading1.innerHTML = "Name";

      let heading2 = document.createElement("th");
      heading2.innerHTML = "Move";
      heading2.classList.add("moveTable");

      let heading3 = document.createElement("th");
      heading3.innerHTML = "BD";
      heading3.classList.add("bdTable");

      let heading4 = document.createElement("th");
      heading4.innerHTML = "Energy";
      heading4.classList.add("energyTable");

      let heading5 = document.createElement("th");
      heading5.innerHTML = "MD";
      heading5.classList.add("mdTable");

      row_3.appendChild(heading1);
      row_3.appendChild(heading2);
      row_3.appendChild(heading3);
      row_3.appendChild(heading4);
      row_3.appendChild(heading5);
      thead2.appendChild(row_3);

      for (let a = 0; a < specialName.length; a++) {
        // Creating and adding data to second row of the table
        let row2 = document.createElement("tr");

        let row2_data_1 = document.createElement("td");
        row2_data_1.innerHTML = `${specialName[a].name}`;

        let row2_data_2 = document.createElement("td");
        row2_data_2.innerHTML = `${specialName[a].type}`;
        row2_data_2.classList.add(`tabla-${specialName[a].type}`);

        let row2_data_3 = document.createElement("td");
        row2_data_3.innerHTML = `${specialName[a]["base-damage"]}`;

        let row2_data_4 = document.createElement("td");
        row2_data_4.innerHTML = `${specialName[a].energy}`;

        let row2_data_5 = document.createElement("td");
        row2_data_5.innerHTML = `${specialName[a]["move-duration-seg"]}`;

        row2.appendChild(row2_data_1);
        row2.appendChild(row2_data_2);
        row2.appendChild(row2_data_3);
        row2.appendChild(row2_data_4);
        row2.appendChild(row2_data_5);
        tbody2.appendChild(row2);
      }
      //-----------------VISTA 4----------------------
      const vista4 = document.createElement("div");
      vista4.classList.add("vista2");
      vista4.style.display = "none";

      //--------------contenedor de resistencias----------------
      const containerResistant = document.createElement("div");
      containerResistant.classList.add("containerResistant");

      const tituloUno = document.createElement("h");
      tituloUno.innerHTML = `Is resistant to:`;

      const resistant = document.createElement("div");
      resistant.classList.add("resistant");

      let arrayResistant = array[i].resistant;

      for (let i = 0; i < arrayResistant.length; i++) {
        const imgResistant = document.createElement("div");
        imgResistant.classList.add("imgResistant");
        imgResistant.innerHTML = `<img class="logo-${arrayResistant[i]}">`;

        const typeResistant = document.createElement("p");
        typeResistant.classList.add("typeResistant");
        typeResistant.innerHTML = `${arrayResistant[i]}`;

        imgResistant.appendChild(typeResistant);
        resistant.appendChild(imgResistant);
      }

      //--------------contenedor de debilidades----------------
      const containerWeaknesses = document.createElement("div");
      containerWeaknesses.classList.add("containerWeaknesses");

      const tituloDos = document.createElement("h");
      tituloDos.innerHTML = `Is weaknesses to:`;

      const weaknesses = document.createElement("div");
      weaknesses.classList.add("weaknesses");

      let arrayWeaknesses = array[i].weaknesses;

      for (let i = 0; i < arrayWeaknesses.length; i++) {
        const imgWeaknesses = document.createElement("div");
        imgWeaknesses.classList.add("imgWeaknesses");
        imgWeaknesses.innerHTML = `<img class="logo-${arrayWeaknesses[i]}">`;

        const typeWeaknesses = document.createElement("p");
        typeWeaknesses.classList.add("typeWeaknesses");
        typeWeaknesses.innerHTML = `${arrayWeaknesses[i]}`;

        imgWeaknesses.appendChild(typeWeaknesses);
        weaknesses.appendChild(imgWeaknesses);
      }

      containerResistant.append(tituloUno, resistant, tituloDos, weaknesses);
      vista4.append(containerResistant, containerWeaknesses);
      features.append(weight, typePokemon, height);
      description_box.append(titulo, about);
      navTarjeta.append(button1, button2, button3, button4);
      containerImg.append(infoPokemon);

      containerVista.append(
        nameCardPokemon,
        navTarjeta,
        vista1,
        vista2,
        vista3,
        vista4
      );

      vista1.append(
        description_box,
        features,
        candyContainerPadre,
        divTotalEvoluciones
      );

      cardInfo.appendChild(btnCerrar);
      cardInfo.appendChild(containerImg);
      cardInfo.appendChild(containerVista);
      container.appendChild(modalContainer);
      container.appendChild(cardInfo);

      evoluciones(
        arrayPokeP,
        prevEvoluciones,
        divTotalEvoluciones,
        nombrePrev,
        array[i]["pokemon-rarity"]
      );
      evoluciones(
        arrayPokeP,
        nextEvolciones,
        divTotalEvoluciones,
        nombreNext,
        array[i]["pokemon-rarity"]
      );
    });

    card.appendChild(spriteContainer);
    card.appendChild(nombreNumero);
    card.appendChild(tarjetaPokemon);
    container.appendChild(card);
  }
}

function evoluciones(arrayPokeP, arrayP, divTotalEvoluciones, nombre, tipo) {
  // console.log("hola" + arrayP);
  if (arrayP.length > 0) {
    const divGrupoEvol = document.createElement("div");
    divGrupoEvol.classList.add("grupo");
    const nombreEvol = document.createElement("p");

    nombreEvol.innerHTML = `<strong>${nombre}</strong>`;

    const divGrupoPok = document.createElement("div");
    divGrupoPok.classList.add("solo");

    divGrupoEvol.appendChild(nombreEvol);
    divGrupoEvol.appendChild(divGrupoPok);

    arrayP.forEach((element) => {
      for (let i = 0; i < arrayPokeP.length; i++) {
        if (arrayPokeP[i].name === element) {
          const divEvol = document.createElement("div");
          divEvol.classList.add("evol");

          const imgEvol = document.createElement("img");
          imgEvol.classList.add("imgEvol");
          imgEvol.src = arrayPokeP[i].img;

          const nombreEvol = document.createElement("p");
          nombreEvol.classList.add("nombreEvol");
          nombreEvol.innerHTML = arrayPokeP[i].name;

          divEvol.appendChild(imgEvol);
          divEvol.appendChild(nombreEvol);
          divGrupoPok.appendChild(divEvol);
        }
      }
    });
    divTotalEvoluciones.appendChild(divGrupoEvol);
  } else {
    if (tipo == "legendary") {
      divTotalEvoluciones.innerHTML = `<div class="logo"><h3>Pokemon Legendary</h3><br><img src="./img/2.png"></div>`;
    } else if (tipo == "mythic") {
      divTotalEvoluciones.innerHTML = `<div class="logo"><h3>Pokemon Mithic</h3><br><img src="./img/1.png"></div>`;
    }
  }
}

const buttonUp = document.getElementById("button-up");

buttonUp.addEventListener("click", scrollUp);
function scrollUp() {
  let currentScroll = document.documentElement.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 15);
  }
}

window.onscroll = () => {
  let scroll = document.documentElement.scrollTop;

  if (scroll > 600) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};

// //cp
// cp.addEventListener("change", (e) => {
//   container.innerHTML = "";
//   const tipoCp = e.target.value;
//   const filtroPoke = filtarCp(tipoCp, arrayCambiante);
//   mostrarPokemon(filtroPoke);
// });

// // filtrar pokemon por huevito
// eggPoke.addEventListener("change", (e) => {
//   fetch("./data/pokemon/pokemon.json")
//     .then((resp) => resp.json())
//     .then((data) => {
//       container.innerHTML = "";
//       const eggType = e.target.value;

//       const arrayEgg = huevitoPokemon(eggType, data.pokemon);
//       mostrarPokemon(arrayEgg);
//     });
// });

// //orden alfabetico
// orden.addEventListener("change", (e) => {
//   container.innerHTML = "";
//   const typeOrden = e.target.value;
//   const ordenAlfaNum = ordenAlfaNumerico(typeOrden, arrayCambiante);
//   mostrarPokemon(ordenAlfaNum);
// });

// // botonBuscar.addEventListener("click", filtrar);
// search.addEventListener("keyup", () => {
//   fetch("./data/pokemon/pokemon.json")
//     .then((resp) => resp.json())
//     .then((data) => {
//       container.innerHTML = "";
//       const texto = search.value.toLowerCase();
//       const arrayBuscar = buscarPoke(texto, data.pokemon);
//       mostrarPokemon(arrayBuscar);
//     });
// });

// document.getElementById("divTiposPokemones").addEventListener("click", (e) => {
//   e.preventDefault();
//   fetch("./data/pokemon/pokemon.json")
//     .then((resp) => resp.json())
//     .then((data) => {
//       if (e.target.getAttribute("id")) {
//         container.innerHTML = "";
//         // console.log(e.target.getAttribute('id'))
//         const tipoP = e.target.getAttribute("id");
//         const arraytipoPoke = typePokemones(tipoP, data.pokemon);
//         mostrarPokemon(arraytipoPoke);
//       }
//     });
// });

// document.getElementById("divRarezaPokemon").addEventListener("click", (e) => {
//   e.preventDefault();
//   fetch("./data/pokemon/pokemon.json")
//     .then((resp) => resp.json())
//     .then((data) => {
//       let pruebaFetch = data.pokemon;
//       if (e.target.getAttribute("value")) {
//         container.innerHTML = "";
//         const rarezaP = e.target.getAttribute("value");
//         const arrayRarezaPoke = rarezaPokemon(rarezaP, pruebaFetch);
//         mostrarPokemon(arrayRarezaPoke);
//       }
//     });
// });

// let arrayPokemon=data.pokemon
// mostrarPokemon(arrayPokemon);
// fetchPokemon();
