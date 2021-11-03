import data from "./data/pokemon/pokemon.js";

console.log(data.pokemon[0].stats["max-cp"]);
// console.log(data.pokemon[0].evolution["next-evolution"]);
// console.log(data.pokemon[0].type.includes('grass'));
// console.log(data.pokemon[0].stats["max-hp"]);
// console.log(data.pokemon.length);
// console.log(data.pokemon.length);

const container = document.querySelector(".pokemon-container");
const region = document.getElementById("region");
const orden = document.getElementById("orden");
const tipos = document.getElementById("tipos");
const rareza = document.getElementById("rareza");
const cp = document.getElementById("cp");
const ordenNumerico = document.getElementById("ordenNumerico");
const egg = document.getElementById("egg");
const search = document.getElementById("search");


const arrayPokemon = data.pokemon;
let arrayCambiante = "";

//funcion que muestra los pokemones
function mostrarPokemon(array) {
  arrayCambiante = array;

  const numero = document.getElementById("parrafo");

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
    const numero = document.createElement("p");
    numero.innerHTML = `<p>N° ${array[i].num}</p>`;

    //nombre del pokemon
    const nombre = document.createElement("div");
    nombre.classList.add("name");
    nombre.innerHTML = `<strong><p>Nombre:${array[i].name}</p></strong>`;

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
    tarjetaPokemon.classList.add("mostrarTarjeta")
    tarjetaPokemon.type="button";
    tarjetaPokemon.innerText="Más información";

    tarjetaPokemon.addEventListener("click",()=>{
      //contenedor de la tarjeta pokemon
      const cardInfo = document.createElement("div")
      cardInfo.classList.add("cardInfo")

      //boton de cerrar tarjeta de informacion
      const btnCerrar = document.createElement("button");
      btnCerrar.classList.add("btnCerrar");
      btnCerrar.type="button";
      btnCerrar.innerHTML=`<i class="fas fa-times-circle"></i>` //<button type="button" id="btnCerra"><i..................></button>
      /*const crear_i = document.createElement("i");
      crear_i.classList.add("far fa-times-circle")
      btnCerrar.innerText=crear_i;*/

      //Crear imagen del pokemon
      const containerImg = document.createElement("div");
      containerImg.classList.add("containerImg")
      const infoPokemon = document.createElement("img");
      infoPokemon.src=array[i].img;


      //crear contenedor de informacion pokemon
      const containerVista = document.createElement("div");
      containerVista.classList.add("containerVista");
      const nameCardPokemon = document.createElement("h");
      nameCardPokemon.innerHTML = array[i].name
      console.log(array[i].name)

      //Crear botones de vista de la tarjeta
      //---------------btn1--------------------------
      const navTarjeta = document.createElement("div");
      navTarjeta.classList.add("botones-tarjetas")
      const button1 = document.createElement("button");
      button1.type="button";
      button1.classList.add("btn");
      button1.textContent = "About";

      //-------------btn2------------------------------
      const button2 = document.createElement("button");
      button2.type="button";
      button2.classList.add("btn");
      button2.textContent = "Power";

      //------------btn3-------------------------------
      const button3 = document.createElement("button");
      button3.type="button";
      button3.classList.add("btn");
      button3.textContent = "Moves";

      //crear Vista 1
      const vista1= document.createElement("div")
      vista1.classList.add("vista1")

      //crear DIV de descripción
      const description_box = document.createElement("div");
      description_box.classList.add("description")
      const titulo = document.createElement("h");
      titulo.innerHTML = "Descripción"+"<br>"
      const about = document.createElement("p")
      about.innerHTML = array[i].about;

      //crear DIV con info del pokemon eso, etc...
      const features = document.createElement("div");
      features.classList.add("features");

      //-------------agregar peso---------------
      const weight = document.createElement("div");
      weight.innerHTML=array[i].size.weight;

      //-------------agregar tipo---------------
      const typePokemon = document.createElement("div")
      typePokemon.innerHTML=array[i].type
      

      //............agregar tamaño--------------
      const height = document.createElement("div");
      height.innerHTML=array[i].size.height;


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
      containerVista.appendChild(navTarjeta)
      containerVista.appendChild(vista1)
      vista1.appendChild(description_box)
      vista1.appendChild(features);
      cardInfo.appendChild(btnCerrar);
      cardInfo.appendChild(containerImg);
      cardInfo.appendChild(containerVista);
      container.appendChild(cardInfo);

    })





    //Items que se agregan al container y card
    console.log(evolucionesPokemones)
    evoluciones(evolucionesPokemones, evolucion);

    card.appendChild(spriteContainer);
    card.appendChild(numero);
    card.appendChild(nombre);
    card.appendChild(cpPokemon);
    card.appendChild(evolucion);
    card.appendChild(tarjetaPokemon);
    container.appendChild(card);

    //items que se agregaran al infocard y container

  }
}


//imagenes de evoluciones pokemones

// const imgNextEvol = document.createElement("img");
// const divNextEvol=document.createElement("div");
// divNextEvol.classList.add('divEvolucion')

// for (let i = 0; i < arrayPokemon.length; i++) {
//   if (arrayPokemon[i].name == nombrePokemon) {
//     imgNextEvol.src = arrayPokemon[i].img;
//     divNextEvol.appendChild(imgNextEvol)
//     evolucion.appendChild(divNextEvol)
//   }
// }

function evoluciones(array, evolucion) {
  array.forEach((element) => {
    for (let i = 0; i < arrayPokemon.length; i++) {
      if (arrayPokemon[i].name === element) {

        const divEvol = document.createElement("div");
        divEvol.classList.add("evol");

        const imgEvol = document.createElement("img");
        imgEvol.classList.add("imgEvol");
        imgEvol.src = arrayPokemon[i].img;

        const nombreEvol=document.createElement('p')
        nombreEvol.classList.add('nombreEvol')
        nombreEvol.innerHTML=arrayPokemon[i].name

        divEvol.appendChild(imgEvol);
        divEvol.appendChild(nombreEvol)
        evolucion.appendChild(divEvol);
      }
    }
  });
}

//region pokemon
region.addEventListener("change", (e) => {
  e.preventDefault();
  container.innerHTML = "";
  const valor = e.target.value;
  console.log(valor);

  regionFuncion(valor);
});

function regionFuncion(valor) {
  let array = [];
  for (let i = 0; i < arrayPokemon.length; i++) {
    if (arrayPokemon[i].generation.name == valor) {
      array.push(arrayPokemon[i]);
    }
  }

  mostrarPokemon(array);
}

//orden alfabetico
orden.addEventListener("change", (e) => {
  container.innerHTML = "";
  const typeOrden = e.target.value;

  if (typeOrden == "az") {
    arrayCambiante.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });

    mostrarPokemon(arrayCambiante);
  } else {
    arrayCambiante.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 1;
    });

    mostrarPokemon(arrayCambiante);
  }
});

//tipos de pokemones
tipos.addEventListener("change", (e) => {
  container.innerHTML = "";
  const tipoPokemon = e.target.value;

  let tipos = arrayPokemon.filter((element) =>
    element.type.includes(tipoPokemon)
  );

  console.log(tipos);
  mostrarPokemon(tipos);
});

//pokemon rarity
rareza.addEventListener("change", (e) => {
  const tipoRareza = e.target.value;
  container.innerHTML = "";
  let arrayRareza = arrayPokemon.filter(
    (array) => array["pokemon-rarity"] == tipoRareza
  );
  mostrarPokemon(arrayRareza);

  console.log(arrayRareza);
});

//cp
cp.addEventListener("change", (e) => {
  container.innerHTML = "";
  const tipoCp = e.target.value;
  if (tipoCp == "max") {
    arrayPokemon.sort((a, b) => {
      if (Number(a.stats["max-cp"]) > Number(b.stats["max-cp"])) {
        return -1;
      }
      return 1;
    });
  } else if (tipoCp == "min") {
    arrayPokemon.sort((a, b) => {
      if (Number(a.stats["max-cp"]) < Number(b.stats["max-cp"])) {
        return -1;
      }
      return 1;
    });
  }

  mostrarPokemon(arrayPokemon);
});

//filtrar pokemon por huevito
egg.addEventListener("change", (e) => {
  container.innerHTML = "";
  const eggType = e.target.value;
  const arrayEgg = arrayPokemon.filter((item) => item.egg == eggType);

  mostrarPokemon(arrayEgg);
});

//Ordenar pokemon por N°
ordenNumerico.addEventListener("change", (e) => {
  container.innerHTML = "";
  const ordenar = e.target.value;
  if (ordenar == "1_251") {
    arrayPokemon.sort((a, b) => {
      if (a.num < b.num) {
        return -1;
      }
      return 1;
    });
  } else {
    arrayPokemon.sort((a, b) => {
      if (a.num > b.num) {
        return -1;
      }
      return 1;
    });
  }
  mostrarPokemon(arrayPokemon);
});

//buscador de pokemon
search.addEventListener("keyup", (e) => {
  container.innerHTML = "";
  const buscarPokemon = e.target.value;

  let array = [];
  for (let i = 0; i < arrayPokemon.length; i++) {
    if (arrayPokemon[i].name == buscarPokemon) {
      array.push(arrayPokemon[i]);
    }
  }
  mostrarPokemon(array);
});


mostrarPokemon(arrayPokemon);
