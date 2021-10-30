import data from "./data/pokemon/pokemon.js";

console.log(data.pokemon[0].stats["max-cp"]);
// console.log(data.pokemon[0].evolution["next-evolution"][0]["next-evolution"][0].name)
// console.log(data.pokemon[0].type.includes('grass'));
// console.log(data.pokemon[0].stats["max-hp"]);
// console.log(data.pokemon.length);
// console.log(data.pokemon.length);

const container = document.getElementById("root");
const region = document.getElementById("region");
const orden = document.getElementById("orden");
const tipos = document.getElementById("tipos");
const rareza = document.getElementById("rareza");
const cp = document.getElementById("cp");

const arrayPokemon = data.pokemon;
let arrayCambiante = "";

//funcion que muestra los pokemones
function mostrarPokemon(array) {
  arrayCambiante = array;

  const numero = document.getElementById("parrafo");
  numero.innerHTML = `<p> Total :${array.length}</p>`;
  for (let i = 0; i < array.length; i++) {
    const parrafo = document.createElement("div");
    const imagen = document.createElement("img");
    const cpPokemon = document.createElement("p");

    imagen.src = `${array[i].img}`;
    parrafo.innerHTML = `<p>Nombre:${array[i].name}</p>`;
    cpPokemon.innerHTML = `<p>CP: ${array[i].stats["max-cp"]}</p>`;

    container.appendChild(parrafo);
    container.appendChild(cpPokemon);
    container.appendChild(imagen);
  }
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

  // console.log(dataPoke[0].type.includes(tipoPokemon))
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

  console.log(tipoRareza);
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
})



function prueba(){

  const x=1
return x
}

prueba()

mostrarPokemon(arrayPokemon);

document.querySelector(".hola").addEventListener("click",()=>{
  alert("hola")
}
)