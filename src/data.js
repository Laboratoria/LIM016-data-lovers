//filtrar pokemon por huevito

export function huevitoPokemon(eggType, arrayPokemon) {
  const arrayEgg = arrayPokemon.filter((item) => item.egg == eggType);
  return arrayEgg;
}

//filtro por Cp de pokemon
export function filtarCp(tipoCp, arrayCambiante) {
  arrayCambiante.sort((a, b) => {
    if (Number(a.stats["max-cp"]) < Number(b.stats["max-cp"])) {
      return -1;
    }
  });
  if (tipoCp == "min") {
    return arrayCambiante;
  } else {
    return arrayCambiante.reverse();
  }
}
//filtro por rareza de pokemon
export function rarezaPokemon(rarezaP, arrayPokemon) {
  let arrayRareza = arrayPokemon.filter(
    (array) => array["pokemon-rarity"] == rarezaP
  );
  return arrayRareza;
}
//orden alfabetico de pokemones
export function ordenAlfaNumerico(typeOrden, arrayCambiante) {
  if (typeOrden == "az" || typeOrden == "za") {
      arrayCambiante.sort((a, b) => {
        if (a.name < b.name)
        {return -1}
      })
  if (typeOrden=="az") {
        return arrayCambiante}
      else{
        return arrayCambiante.reverse();
      }
    }
  else {
    arrayCambiante.sort((a, b) => {
      if (a.num < b.num) {
        return -1;
      }
    });
    if (typeOrden == "1_251") {
      return arrayCambiante;
    } else {
      return arrayCambiante.reverse();
    }
  }
}

//tipos de pokemones
export function typePokemones(tipoPokemon, arrayPokemon) {
  let tipos = arrayPokemon.filter((element) =>
    element.type.includes(tipoPokemon)
  );
  return tipos;
}


//region de pokemones
export function regionFuncion(regionP, arrayPokemon) {
  let array = [];
  for (let i = 0; i < arrayPokemon.length; i++) {
    if (arrayPokemon[i].generation.name == regionP) {
      array.push(arrayPokemon[i]);
    }
  }
  return array;
}


//buscador de pokemon
export function buscarPoke(texto, arrayPokemon) {
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
  return array;
}
