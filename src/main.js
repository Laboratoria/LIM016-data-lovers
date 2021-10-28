import data from "./data/pokemon/pokemon.js";

console.log(data.pokemon);
console.log(data.pokemon[0].about);
// console.log(data.pokemon[0].type.includes('grass'));
// console.log(data.pokemon[0].stats["max-hp"]);
// console.log(data.pokemon.length);
// console.log(data.pokemon.length);

const container = document.getElementById("root");
const region = document.getElementById("region");
const orden = document.getElementById("orden");
const tipos = document.getElementById("tipos");



const arrayPokemon=data.pokemon

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
    arrayPokemon.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });
    mostrarPokemon(arrayPokemon);
  } else {
    arrayPokemon.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 1;
    });

    mostrarPokemon(arrayPokemon);
  }
});



//tipos de pokemones
tipos.addEventListener("change", (e) => {
  container.innerHTML = "";
  const tipoPokemon = e.target.value;



// console.log(dataPoke[0].type.includes(tipoPokemon))

  let tipos= arrayPokemon.filter(element=>
    element.type.includes(tipoPokemon)
    )

console.log(tipos)
mostrarPokemon(tipos)
});






//funcion que muestra los pokemones
function mostrarPokemon(array) {
const numero=document.getElementById('parrafo')
 numero.innerHTML=`<p> Total :${array.length}</p>`
  for (let i = 0; i < array.length; i++) {


    const parrafo = document.createElement("div");
    const imagen = document.createElement("img");
    imagen.src = `${array[i].img}`;
    parrafo.innerHTML = `<p>Nombre:${array[i].name}</p>`;
    document.getElementById("root").appendChild(parrafo);
    document.getElementById("root").appendChild(imagen);
  }


}
