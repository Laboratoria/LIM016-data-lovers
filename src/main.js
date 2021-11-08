import data from "./data/pokemon/pokemon.js";
import {
  //buscarPoke,
  huevitoPokemon,
  filtarCp,
  rarezaPokemon,
  ordenAlfaNumerico,
  typePokemones,
  regionFuncion,
} from "./data.js";

// const botones del navegador

const btnInicio = document.getElementById('btnInicio');
const btnPokedex = document.getElementById('btnPokedex');
const btnTipo = document.getElementById('btnTipo');
const btnRegion = document.getElementById('btnRegion');
const btnRareza = document.getElementById('btnRareza');


//const modalContainer = document.querySelector(".modal-container");
const container = document.querySelector(".pokemon-container");
const region = document.getElementById("region");
const orden = document.getElementById("orden");
const tipos = document.getElementById("tipos");
const rareza = document.getElementById("rareza");
const cp = document.getElementById("cp");
const egg = document.getElementById("egg");
const search = document.getElementById("search");
const botonBuscar = document.getElementById("botonBuscar");

const arrayPokemon = data.pokemon;
let arrayCambiante = "";
console.log(arrayPokemon[175].evolution["next-evolution"][0].name);
// var dataArray = new Array;
// for(const i in arrayPokemon){
//   dataArray.push(arrayPokemon[i].stats["max-cp"]);
// }
// console.log(dataArray)
// console.log(Math.max(...dataArray))

//BOTON PARA VOLVER AL INICION

btnInicio.addEventListener("click",()=>{
  document.querySelector("#welcome").style.display="block";
  document.querySelector("#pokedex").style.display="none";
  document.querySelector(".menu").style.display="none";
  btnPokedex.className = "";
  btnInicio.className="activeButton"

})

//PASAR DE INICIO AL POKEDEX

const verPokedex = document.getElementById("verPokedex");

verPokedex.addEventListener("click",()=>{
  document.querySelector("#welcome").style.display="none";
  document.querySelector("#pokedex").style.display="block";
  document.querySelector(".menu").style.display="block";
  btnPokedex.className = "activeButton";
  btnInicio.className=""
})

//funcion que muestra los pokemones

function mostrarPokemon(array) {
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

    nombreNumero.appendChild(nombre);
    nombreNumero.appendChild(numero);

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
          // evolucion.appendChild(next1);
        }
      }
      if (obj["next-evolution"][0]["next-evolution"]) {
        let next2 = document.createElement("p");
        next2.innerHTML = `Next-evolution ${obj["next-evolution"][0]["next-evolution"][0].name}`;
        nextEvolciones.push(obj["next-evolution"][0]["next-evolution"][0].name);
        // evolucion.appendChild(next2);
      }
    }

    if (obj["prev-evolution"]) {
      let prev1 = document.createElement("p");
      prev1.innerHTML = `Pre-evolution ${obj["prev-evolution"][0].name}`;
      // evolucion.appendChild(prev1);
      prevEvoluciones.push(obj["prev-evolution"][0].name);

      if (obj["prev-evolution"][0]["prev-evolution"]) {
        let prev2 = document.createElement("p");
        prev2.innerHTML = `Pre-evolution  ${obj["prev-evolution"][0]["prev-evolution"][0].name}`;
        // evolucion.appendChild(prev2);
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
        cardInfo.style.display = "none";
        modalContainer.style.display = "none";
        container.removeChild(modalContainer);
        container.removeChild(cardInfo)
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
      console.log(array[i].name);

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
        button1.className = "active";
        button2.className = "";
        button3.className = "";
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
        button1.className = "";
        button3.className = "";
        button2.className = "active";
      });

      //------------btn3-------------------------------
      const button3 = document.createElement("button");
      button3.type = "button";
      button3.classList.add("btn");
      button3.textContent = "Moves";

      //crear Vista 1
      const vista1 = document.createElement("div");
      vista1.classList.add("vista1");

      //crear DIV de descripción
      const description_box = document.createElement("div");
      description_box.classList.add("description");
      const titulo = document.createElement("h");
      titulo.innerHTML = "Descripción" + "<br>";
      const about = document.createElement("p");
      about.innerHTML = array[i].about;

      //crear DIV con info del pokemon eso, etc...
      const features = document.createElement("div");
      features.classList.add("features");

      //-------------agregar peso---------------
      const weight = document.createElement("div");
      weight.innerHTML = array[i].size.weight;

      //-------------agregar tipo---------------
      const typePokemon = document.createElement("div");
      typePokemon.classList.add('divTipo');
      (array[i].type).forEach(element=>{
      const tipoLog=document.createElement('p')
      tipoLog.innerHTML=`${element}<img class="logo-${element}">`
        typePokemon.appendChild(tipoLog)
      })

      //............agregar tamaño--------------
      const height = document.createElement("div");
      height.innerHTML = array[i].size.height;

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

      candyContainer.appendChild(imgCandy);
      candyContainer.appendChild(candy);
      candyContainerPadre.appendChild(palabraEvolucion);
      candyContainerPadre.appendChild(candyContainer);

      //................div de las evoluciones.....
      const divTotalEvoluciones = document.createElement("div");
      divTotalEvoluciones.classList.add("divTotal");

      //VISTA 2
      const vista2 = document.createElement("div");
      vista1.classList.add("vista2");

      vista2.style.display = "none";

      //-----------contenedor de cada habilidad----------

      const arrayStats = array[i].stats;
      console.log(arrayStats);

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
          for (const i in arrayPokemon) {
            dataArray.push(arrayPokemon[i].stats["max-hp"]);
          }
          //console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto);
        }
        if (nombreStats == "base-attack") {
          let dataArray = new Array();
          for (const i in arrayPokemon) {
            dataArray.push(arrayPokemon[i].stats["base-attack"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto);
        }
        if (nombreStats == "max-cp") {
          let dataArray = new Array();
          for (const i in arrayPokemon) {
            dataArray.push(arrayPokemon[i].stats["max-cp"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto);
        }
        if (nombreStats == "base-defense") {
          let dataArray = new Array();
          for (const i in arrayPokemon) {
            dataArray.push(arrayPokemon[i].stats["base-defense"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto);
        }
        if (nombreStats == "base-stamina") {
          let dataArray = new Array();
          for (const i in arrayPokemon) {
            dataArray.push(arrayPokemon[i].stats["base-stamina"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto);
        }

        let porcentaje = ((numStats / valorAlto) * 100).toFixed(2);

        progreso.style.setProperty(`--w`, `${porcentaje}%`);
        progreso.setAttribute(`id`, `${property}`);

        const valorStat = document.createElement("p");
        valorStat.innerHTML = stringStats;

        barra.appendChild(progreso);
        prueba.appendChild(nameStats);
        prueba.appendChild(barra);
        prueba.appendChild(valorStat);
        vista2.appendChild(prueba);

        // console.log(nameStats)
        // console.log(stringStats)
        // console.log(typeof(nombreStats))
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
        button1.className = "";
        button2.className = "";
        button3.className = "active";
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

      table.appendChild(thead);
      table.appendChild(tbody);
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

      titulo1.appendChild(heading_1);
      titulo1.appendChild(heading_2);
      titulo1.appendChild(heading_3);
      titulo1.appendChild(heading_4);
      titulo1.appendChild(heading_5);
      thead.appendChild(titulo1);

      for (let a = 0; a < quickName.length; a++) {
        // Creating and adding data to second row of the table
        let row_2 = document.createElement("tr");

        let row_2_data_1 = document.createElement("td");
        row_2_data_1.innerHTML = `${quickName[a].name}`;

        let row_2_data_2 = document.createElement("td");
        row_2_data_2.innerHTML = `${quickName[a].type}`;
        row_2_data_2.classList.add(`${quickName[a].type}`);

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
        row2_data_2.classList.add(`${specialName[a].type}`);

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

      features.appendChild(weight);
      features.appendChild(typePokemon);
      features.appendChild(height);
      description_box.appendChild(titulo);
      description_box.appendChild(about);
      navTarjeta.appendChild(button1);
      navTarjeta.appendChild(button2);
      navTarjeta.appendChild(button3);
      containerImg.appendChild(infoPokemon);
      containerVista.appendChild(nameCardPokemon);
      containerVista.appendChild(navTarjeta);
      containerVista.appendChild(vista1);
      containerVista.appendChild(vista2);
      containerVista.appendChild(vista3);
      vista1.appendChild(description_box);
      vista1.appendChild(features);
      vista1.appendChild(candyContainerPadre);
      vista1.appendChild(divTotalEvoluciones);
      cardInfo.appendChild(btnCerrar);
      cardInfo.appendChild(containerImg);
      cardInfo.appendChild(containerVista);
      container.appendChild(modalContainer);
      container.appendChild(cardInfo);
      evoluciones(
        prevEvoluciones,
        divTotalEvoluciones,
        nombrePrev,
        array[i]["pokemon-rarity"]
      );
      evoluciones(
        nextEvolciones,
        divTotalEvoluciones,
        nombreNext,
        array[i]["pokemon-rarity"]
      );
    });

    //Items que se agregan al container y card
    // console.log(evolucionesPokemones);

    card.appendChild(spriteContainer);
    card.appendChild(nombreNumero);
    // card.appendChild(numero);
    // card.appendChild(nombre);
    // card.appendChild(cpPokemon);
    //card.appendChild(evolucion);
    card.appendChild(tarjetaPokemon);
    container.appendChild(card);

    //items que se agregaran al infocard y container
  }
}

function evoluciones(array, divTotalEvoluciones, nombre, tipo) {
  if (array.length > 0) {
    const divGrupoEvol = document.createElement("div");
    divGrupoEvol.classList.add("grupo");
    const nombreEvol = document.createElement("p");

    nombreEvol.innerHTML = `<strong>${nombre}</strong>`;

    const divGrupoPok = document.createElement("div");
    divGrupoPok.classList.add("solo");

    divGrupoEvol.appendChild(nombreEvol);
    divGrupoEvol.appendChild(divGrupoPok);

    array.forEach((element) => {
      for (let i = 0; i < arrayPokemon.length; i++) {
        if (arrayPokemon[i].name === element) {
          const divEvol = document.createElement("div");
          divEvol.classList.add("evol");

          const imgEvol = document.createElement("img");
          imgEvol.classList.add("imgEvol");
          imgEvol.src = arrayPokemon[i].img;

          const nombreEvol = document.createElement("p");
          nombreEvol.classList.add("nombreEvol");
          nombreEvol.innerHTML = arrayPokemon[i].name;

          divEvol.appendChild(imgEvol);
          divEvol.appendChild(nombreEvol);
          divGrupoPok.appendChild(divEvol);
        }
      }
    });
    divTotalEvoluciones.appendChild(divGrupoEvol);
  } else {
    if (tipo == "legendary") {
      console.log(tipo);
      divTotalEvoluciones.innerHTML = `<div class="logo"><h3>Pokemon Legendary</h3><br><img src="./img/logo1.png"></div>`

    }
    else if (tipo == "mythic") {
      console.log(tipo);
      divTotalEvoluciones.innerHTML = `<div class="logo"><h3>Pokemon Mithic</h3><br><img src="./img/logo2.jpg"></div>`
    }

  }
}

//region pokemon
region.addEventListener("change", (e) => {
  e.preventDefault();
  container.innerHTML = "";
  const valor = e.target.value;
  const arrayRegion = regionFuncion(valor, arrayPokemon);
  mostrarPokemon(arrayRegion);
});

//tipos de pokemones
tipos.addEventListener("change", (e) => {
  container.innerHTML = "";
  const tipoPokemon = e.target.value;
  const arraytipoPoke = typePokemones(tipoPokemon, arrayPokemon);
  mostrarPokemon(arraytipoPoke);
});

//pokemon rarity
rareza.addEventListener("change", (e) => {
  const tipoRareza = e.target.value;
  container.innerHTML = "";
  const rarezaPoke = rarezaPokemon(tipoRareza, arrayPokemon);
  mostrarPokemon(rarezaPoke);
});

//cp
cp.addEventListener("change", (e) => {
  container.innerHTML = "";
  const tipoCp = e.target.value;
  const filtroPoke = filtarCp(tipoCp, arrayCambiante);
  mostrarPokemon(filtroPoke);
});

//filtrar pokemon por huevito
egg.addEventListener("change", (e) => {
  container.innerHTML = "";
  const eggType = e.target.value;

  const arrayEgg = huevitoPokemon(eggType, arrayPokemon);
  mostrarPokemon(arrayEgg);
});

//orden alfabetico
orden.addEventListener("change", (e) => {
  container.innerHTML = "";
  const typeOrden = e.target.value;
  const ordenAlfaNum = ordenAlfaNumerico(typeOrden, arrayCambiante);
  mostrarPokemon(ordenAlfaNum);
});

//buscador de pokemon

const filtrar = () => {
  // console.log(search.value)
  container.innerHTML = "";
  const texto = search.value.toLowerCase();
  let array = [];
  for (let pokemon of arrayPokemon) {
    let namePokemon = pokemon.name;
    let numPokemon = pokemon.num;
    if (namePokemon.indexOf(texto) !== -1) {
      array.push(pokemon);
    } else if (numPokemon.indexOf(texto) !== -1) {
      array.push(pokemon);
    }
  }
  mostrarPokemon(array);
};

botonBuscar.addEventListener("click", filtrar);
search.addEventListener("keyup", filtrar);

// Boton subir

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
mostrarPokemon(arrayPokemon);
