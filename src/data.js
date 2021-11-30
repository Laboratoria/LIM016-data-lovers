// BUSCAR POKEMON
export const buscarPokemon = (pokemons, palabra) =>{
  const pokemonsBuscados=pokemons.filter( function(pokemon) { return pokemon.name.includes(palabra); } );
  return pokemonsBuscados;
}

// FILTRAR POKEMONS POR REGION
export const filtrarRegion =  (pokemons, opcion) =>{
  const pokemonsFiltradosR=pokemons.filter( function(pokemon) { return pokemon.generation.name == opcion; } );
  return pokemonsFiltradosR;
}

// FILTRAR POKEMONS POR TIPO
export const filtrarTipo =  (pokemons, opcion) =>{
  const pokemonsFiltradosE=pokemons.filter( function(pokemon) { return pokemon.type[0] == opcion || pokemon.type[1] == opcion; } );
  return pokemonsFiltradosE;
}

//ORDENAR POKEMONS
export const ordenarPokemons = (pokemons, opcion) =>{
  let pokemonsOrdenados=pokemons;

  // ORDENAR ALFABETICAMENTE A - Z
  if (opcion == "az") {
      pokemonsOrdenados=pokemonsOrdenados.sort(function (a, b) {
          if (a.name > b.name) { return 1; }
          if (a.name < b.name) { return -1; }
          return 0;
      });  
  }

  // ORDENAR ALFABETICAMENTE Z - A
  if (opcion == "za") {
      pokemonsOrdenados = pokemonsOrdenados.sort(function (a, b) {
          if (a.name > b.name) { return -1; }
          if (a.name < b.name) { return 1; }
          return 0;
      });  
  } 

  // ORDENAR POR PUNTOS DE COMBATE ASCENDENTE
  if (opcion == "pc-as") {
      pokemonsOrdenados = pokemonsOrdenados.sort(function (a, b) {
          return a.stats["max-cp"] - b.stats["max-cp"];
      });  
  }     

  // ORDENAR POR PUNTOS DE COMBATE DESCENDENTE
  if (opcion == "pc-des") {
      pokemonsOrdenados = pokemonsOrdenados.sort(function (a, b) {
          return b.stats["max-cp"] - a.stats["max-cp"];
      });  
  }  

return pokemonsOrdenados;
}

// OBTENER POKEMON SELECCIONADO PARA ABRIR EL MODAL
export const obtenerPokemon=(pokemons, numPokedex)=>{
  const pokemonObtenido=pokemons.find(function(pokemon) { return pokemon.num == numPokedex; });
  return pokemonObtenido;
}