import data from "./data/pokemon/pokemon.js";
import {
  //buscarPoke,
  huevitoPokemon,
  filtarCp,
  rarezaPokemon,
  ordenAlfaNumerico,
  typePokemones,
  regionFuncion
} from "./data.js";


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

// var dataArray = new Array;
// for(const i in arrayPokemon){
//   dataArray.push(arrayPokemon[i].stats["max-cp"]);
// }
// console.log(dataArray)
// console.log(Math.max(...dataArray))




//funcion que muestra los pokemones

function mostrarPokemon(array) {
  arrayCambiante = array;

  const numero = document.getElementById("parrafo");
  numero.classList.add("totalPokemons")
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

    let evolucionesPokemones = [];
    if (obj["next-evolution"] != null) {
      for (let a = 0; a < obj["next-evolution"].length; a++) {
        let next1 = document.createElement("p");
        next1.innerHTML = `Next-evolution ${obj["next-evolution"][a].name}`;
        let nombrePoke = obj["next-evolution"][a].name;
        evolucionesPokemones.push(nombrePoke);
        // evolucion.appendChild(next1);
      }

      if (obj["next-evolution"][0]["next-evolution"]) {
        let next2 = document.createElement("p");
        next2.innerHTML = `Next-evolution ${obj["next-evolution"][0]["next-evolution"][0].name}`;
        evolucionesPokemones.push(
          obj["next-evolution"][0]["next-evolution"][0].name
        );
        // evolucion.appendChild(next2);
      }
    }

    if (obj["prev-evolution"]) {
      let prev1 = document.createElement("p");
      prev1.innerHTML = `Pre-evolution ${obj["prev-evolution"][0].name}`;
      // evolucion.appendChild(prev1);
      evolucionesPokemones.push(obj["prev-evolution"][0].name);

      if (obj["prev-evolution"][0]["prev-evolution"]) {
        let prev2 = document.createElement("p");
        prev2.innerHTML = `Pre-evolution  ${obj["prev-evolution"][0]["prev-evolution"][0].name}`;
        // evolucion.appendChild(prev2);
        evolucionesPokemones.push(
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
      cardInfo.setAttribute(`id`,`${array[i].num}`);

      //boton de cerrar tarjeta de informacion
      const btnCerrar = document.createElement("button");
      btnCerrar.classList.add("btnCerrar");
      btnCerrar.type = "button";
      btnCerrar.innerHTML = `<i class="fas fa-times-circle"></i>`;

      btnCerrar.addEventListener("click", () => {
        cardInfo.style.display = "none";
        modalContainer.style.display="none";
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
      button1.classList.add("btn");
      button1.textContent = "About";

      button1.addEventListener("click",()=>{
        vista2.style.display="none";
        vista1.style.display="block";

      })


      //-------------btn2------------------------------
      const button2 = document.createElement("button");
      button2.type = "button";
      button2.classList.add("btn");
      button2.textContent = "Power";

      button2.addEventListener("click",()=>{
        vista2.style.display="block"
        vista1.style.display="none"
      })

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
      typePokemon.innerHTML = array[i].type;

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
      imgCandy.src = "img/caramelos.png"


      let caramelos = ""

      let evolutionProperty = Object.keys(obj)

      if(evolutionProperty[1]=="next-evolution"){
        caramelos = obj["next-evolution"][0]["candy-cost"]
      }
      else{
        candyContainerPadre.style.display = "none"
      }

      const candy = document.createElement("p");
      candy.innerHTML = caramelos

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

      vista2.style.display="none"

      //-----------contenedor de cada habilidad----------

      const arrayStats = array[i].stats
      console.log(arrayStats)

      for(const property in arrayStats){
        const prueba = document.createElement("div");
        prueba.classList.add("prueba");

        const nameStats = document.createElement("h");
        nameStats.innerHTML = `${property}`;
        const barra = document.createElement("div");
        barra.classList.add("barra");
        const progreso = document.createElement("div");
        progreso.classList.add("progreso");
        const nombreStats = property
        //progreso.style("--w:")
        const stringStats = parseInt(arrayStats[property]);
        const numStats = stringStats
        let valorAlto = "";

        if(nombreStats=="max-hp"){
          let dataArray = new Array;
          for(const i in arrayPokemon){
          dataArray.push(arrayPokemon[i].stats["max-hp"]);
          }
          //console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto)
        }
        if(nombreStats=="base-attack"){
          let dataArray = new Array;
          for(const i in arrayPokemon){
          dataArray.push(arrayPokemon[i].stats["base-attack"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto)
        }
        if(nombreStats=="max-cp"){
          let dataArray = new Array;
          for(const i in arrayPokemon){
          dataArray.push(arrayPokemon[i].stats["max-cp"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto)
        }
        if(nombreStats=="base-defense"){
          let dataArray = new Array;
          for(const i in arrayPokemon){
          dataArray.push(arrayPokemon[i].stats["base-defense"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto)
        }
        if(nombreStats=="base-stamina"){
          let dataArray = new Array;
          for(const i in arrayPokemon){
          dataArray.push(arrayPokemon[i].stats["base-stamina"]);
          }
          // console.log(dataArray)
          valorAlto = Math.max(...dataArray);
          console.log(valorAlto)
        }


        let porcentaje = ((numStats/valorAlto) *100).toFixed(2)

        progreso.style.setProperty(`--w`, `${porcentaje}%`);
        progreso.setAttribute(`id`,`${property}`);

        const valorStat = document.createElement("p");
        valorStat.innerHTML= stringStats

        barra.appendChild(progreso);
        prueba.appendChild(nameStats);
        prueba.appendChild(barra);
        prueba.appendChild(valorStat);
        vista2.appendChild(prueba)


        // console.log(nameStats)
        // console.log(stringStats)
        // console.log(typeof(nombreStats))
      }

      // });
      // const statsPokemon = document.createElement("div");
      // statsPokemon.classList.add("statsPokemon");

      // const statsName = document.createElement("h");
      // titulo.innerHTML = array[i];

      //Items que se agregaran a la tarjeta de informacion del pokemon

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
      vista1.appendChild(description_box);
      vista1.appendChild(features);
      vista1.appendChild(candyContainerPadre);
      vista1.appendChild(divTotalEvoluciones);
      cardInfo.appendChild(btnCerrar);
      cardInfo.appendChild(containerImg);
      cardInfo.appendChild(containerVista);
      container.appendChild(modalContainer);
      container.appendChild(cardInfo);
      evoluciones(evolucionesPokemones, divTotalEvoluciones);
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

function evoluciones(array, divTotalEvoluciones) {
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
        divTotalEvoluciones.appendChild(divEvol);
      }
    }
  });
}

//region pokemon
region.addEventListener("change", (e) => {
  e.preventDefault();
  container.innerHTML = "";
  const valor = e.target.value;
  const arrayRegion=regionFuncion(valor, arrayPokemon)
  mostrarPokemon(arrayRegion)
});




//tipos de pokemones
tipos.addEventListener("change", (e) => {
  container.innerHTML = "";
  const tipoPokemon = e.target.value;
  const arraytipoPoke=typePokemones(tipoPokemon, arrayPokemon);
  mostrarPokemon(arraytipoPoke)
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

const filtrar = ()=>{
  // console.log(search.value)
  container.innerHTML = "";
  const texto = search.value.toLowerCase();
  let array=[]
  for(let pokemon of arrayPokemon){
    let namePokemon = pokemon.name
    let numPokemon = pokemon.num
    if(namePokemon.indexOf(texto) !== -1){
      array.push(pokemon);
    }
    else if(numPokemon.indexOf(texto) !== -1){
      array.push(pokemon);
    }
  }
  mostrarPokemon(array)
}

botonBuscar.addEventListener("click",filtrar)
search.addEventListener("keyup",filtrar)
// search.addEventListener("keyup", (e) => {
//   container.innerHTML = "";
//   const buscarPokemon = e.target.value;

//   const search = buscarPoke(buscarPokemon, arrayPokemon);
//   mostrarPokemon(search);
// });



mostrarPokemon(arrayPokemon);
