import { buscarPokemon, obtenerPokemon, filtrarRegion, filtrarTipo, ordenarPokemons } from '../src/data.js';

const dataEjemplo=[{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "type": [
    "grass",
    "poison"
  ],
  "stats": {
    "base-attack": "118",
    "base-defense": "111",
    "base-stamina": "128",
    "max-cp": "1115",
    "max-hp": "113"
  }
},
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ],
    "stats": {
      "base-attack": "116",
      "base-defense": "93",
      "base-stamina": "118",
      "max-cp": "980",
      "max-hp": "105"
    }
  },

  {
    "num": "006",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ],
    "stats": {
      "base-attack": "223",
      "base-defense": "173",
      "base-stamina": "186",
      "max-cp": "2889",
      "max-hp": "158"
    }
  },
    {
      "num": "161",
      "name": "sentret",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "type": [
        "normal"
      ],
      "stats": {
        "base-attack": "79",
        "base-defense": "73",
        "base-stamina": "111",
        "max-cp": "618",
        "max-hp": "99"
      }
    }

];
// TEST PARA FUNCION BUSCARPOKEMON POR NOMBRE
describe('buscarPokemon', () => {
  it('Debería ser una función', () => {
    expect(typeof buscarPokemon).toBe('function');
  });

  it('Debería retornar el objeto "bulbasaur"', () => {
    let pok=[];
    pok.push(dataEjemplo[0]);
    expect(buscarPokemon(dataEjemplo, 'bulbasaur')).toStrictEqual(pok);
  });
});


// TEST PARA FUNCION BUSCARPOKEMON POR NUM
describe('obtenerPokemon', () => {
  it('Debería ser una función', () => {
    expect(typeof obtenerPokemon).toBe('function');
  });

  it('Debería retornar el objeto "004"', () => {
    expect(obtenerPokemon(dataEjemplo, '004')).toStrictEqual(dataEjemplo[1]);
  });
});


// TEST PARA FUNCION FILTRARREGION
describe('filtrarRegion', () => {
  it('Debería ser una función', () => {
    expect(typeof filtrarRegion).toBe('function');
  });

  it('Debería retornar un arreglo con los pokemons de la region "johto"', () => {
    let poks=[];
      poks.push(dataEjemplo[3]);
    expect(filtrarRegion(dataEjemplo, 'johto')).toStrictEqual(poks);
  });
});


// TEST PARA FUNCION FILTRARTIPO
describe('filtrarTipo', () => {
  it('Debería ser una función', () => {
    expect(typeof filtrarTipo).toBe('function');
  });

  it('Debería retornar un arreglo con los pokemons de tipo "fire"', () => {
    let poks=[];
      poks.push(dataEjemplo[1]);
      poks.push(dataEjemplo[2]);
      expect(filtrarTipo(dataEjemplo, 'fire')).toStrictEqual(poks);
  });
});


// TEST PARA ORDENARPOKEMON
describe('ordenarPokemons', () => {
  it('Debería ser una función', () => {
    expect(typeof ordenarPokemons).toBe('function');
  });
  
  let pok2=[dataEjemplo[3], dataEjemplo[1], dataEjemplo[2], dataEjemplo[0]];
  let pok3=[dataEjemplo[3], dataEjemplo[1], dataEjemplo[0], dataEjemplo[2]];

  // ORDEN ALFABETICO
  it('Debería ordenar los pokemones de la Z - A', () => {
    expect(ordenarPokemons(dataEjemplo, 'za')).toStrictEqual(pok2);
  });

  it('Debería ordenar los pokemones de la A - Z"', () => {
    expect(ordenarPokemons(dataEjemplo, 'az')).toStrictEqual(pok2.reverse());
  });

  //ORDEN POR PUNTOS DE COMBATE
  it('Debería ordenar los pokemones por puntos de combate ascendente"', () => {
    expect(ordenarPokemons(dataEjemplo, 'pc-as')).toStrictEqual(pok3);
  });

  it('Debería ordenar los pokemones por puntos de combate descendente"', () => {
    expect(ordenarPokemons(dataEjemplo, 'pc-des')).toStrictEqual(pok3.reverse());
  });

});

