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
const ordenNumerico= document.getElementById("ordenNumerico");
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
    const numero = document.createElement("p");
    const parrafo = document.createElement("div");
    const imagen = document.createElement("img");
    const cpPokemon = document.createElement("p");

    imagen.src = `${array[i].img}`;
    parrafo.innerHTML = `<p>Nombre:${array[i].name}</p>`;
    cpPokemon.innerHTML = `<p>CP: ${array[i].stats["max-cp"]}</p>`;
    numero.innerHTML = `<p>N° ${array[i].num}</p>`;
    
    container.appendChild(numero)
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
})

//filtrar pokemon por huevito
egg.addEventListener("change", (e)=>{
  container.innerHTML ="";
  const eggType= e.target.value;
  const arrayEgg=arrayPokemon.filter(item=>item.egg==eggType);

  mostrarPokemon(arrayEgg)

})

//Ordenar pokemon por N°
ordenNumerico.addEventListener("change", (e)=>{
  container.innerHTML = "";
  const ordenar=e.target.value;
  if(ordenar=="1_251"){
    arrayPokemon.sort((a,b) => {
      if(a.num<b.num){
        return -1;
      }
      return 1;
      })
  }

  else{
    arrayPokemon.sort((a,b) => {
      if(a.num>b.num){
        return -1;
      }
      return 1;
      })
  }
  mostrarPokemon(arrayPokemon) 
})

//buscador de pokemon 
search.addEventListener("keyup", (e)=>{
  container.innerHTML = ""
  const buscarPokemon = e.target.value;

  let array = [];
  for(let i=0; i<arrayPokemon.length; i++) {
    if(arrayPokemon[i].name==buscarPokemon){
      array.push(arrayPokemon[i])
    }
  }
  mostrarPokemon(array)
})


mostrarPokemon(arrayPokemon);


