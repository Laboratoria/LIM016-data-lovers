//buscador de pokemon
export function buscarPoke(buscarPokemon, arrayPokemon) {
  let array = [];
  for (let i = 0; i < arrayPokemon.length; i++) {
    if (arrayPokemon[i].name == buscarPokemon) {
      array.push(arrayPokemon[i]);
    }
  }
  return array;
}

//Ordenar pokemon por N°
export function ordenNumeroPokemon(ordenar, arrayPokemon) {
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
  return arrayPokemon;
}

//filtrar pokemon por huevito
export function huevitoPokemon(eggType, arrayPokemon) {
  const arrayEgg = arrayPokemon.filter((item) => item.egg == eggType);
  return arrayEgg;
}

//filtro por Cp de pokemon
export function filtarCp(tipoCp , arrayCambiante){
  if (tipoCp == "max") {
    arrayCambiante.sort((a, b) => {
      if (Number(a.stats["max-cp"]) > Number(b.stats["max-cp"])) {
        return -1;
      }
      return 1;
    });
  } else if (tipoCp == "min") {
    arrayCambiante.sort((a, b) => {
      if (Number(a.stats["max-cp"]) < Number(b.stats["max-cp"])) {
        return -1;
      }
      return 1;
    });
  }
  return arrayCambiante
}

//filtro por rareza de pokemon
export function rarezaPokemon(tipoRareza,arrayPokemon){
  let arrayRareza = arrayPokemon.filter(
    (array) => array["pokemon-rarity"] == tipoRareza
  );
  return arrayRareza;

}

//orden alfabetico de pokemones
export function ordenAlfabetico(typeOrden, arrayCambiante){
  if (typeOrden == "az") {
    arrayCambiante.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      return 1;
    });

    return arrayCambiante

  } else {
    arrayCambiante.sort((a, b) => {
      if (a.name > b.name) {
        return -1;
      }
      return 1;
    });

    return arrayCambiante
  }
}

//tipos de pokemones
export function typePokemones(tipoPokemon, arrayPokemon) {
  let tipos = arrayPokemon.filter((element) =>
    element.type.includes(tipoPokemon)
  );
  return tipos
}

//region de pokemones
export function regionFuncion(valor , arrayPokemon) {
  let array = [];
  for (let i = 0; i < arrayPokemon.length; i++) {
    if (arrayPokemon[i].generation.name == valor) {
      array.push(arrayPokemon[i]);
    }
  }
  return array
}
