import { huevitoPokemon , filtarCp , rarezaPokemon , ordenAlfaNumerico, typePokemones, regionFuncion, buscarPoke } from '../src/data.js';

import data from "../src/data/pokemon/pokemon.js";

describe('huevitoPokemon', () => {
  it('is a function', () => {
    expect(typeof huevitoPokemon).toBe('function');
  });
  it('should return', () => {
    expect(huevitoPokemon("2 km", data.pokemon)).toHaveLength(23)
  });
});




describe('filtarCp', () => {
  it('is a function', () => {
    expect(typeof filtarCp).toBe('function');
  });
  it('should return', () => {
    expect((filtarCp("max", data.pokemon))[0].name).toBe("mewtwo")
  });
  it('should return', () => {
    expect((filtarCp("min", data.pokemon))[0].name).toBe("magikarp")
});
});


describe('ordenAlfaNumerico', () => {
  it('is a function', () => {
    expect(typeof ordenAlfaNumerico).toBe('function');
  });

  
it('should return', () => {
  expect((ordenAlfaNumerico("az", data.pokemon))[0].name).toBe("abra")
});


it('should return', () => {
  expect((ordenAlfaNumerico("za", data.pokemon))[0].name).toBe("zubat")
});

it('should return', () => {
  expect((ordenAlfaNumerico("251_1", data.pokemon))[0].name).toBe("celebi")
});

it('should return', () => {
  expect((ordenAlfaNumerico("1_251", data.pokemon))[0].name).toBe("bulbasaur")
});

  it('returns `charmander`', () => {
    expect((ordenAlfaNumerico("1_251",data.pokemon))[3].name).toBe('charmander');
  });

    it('returns `tyranitar`', () => {
      expect((ordenAlfaNumerico("251_1",data.pokemon))[3].name).toBe('tyranitar');
    });
});

describe('typePokemones', () => {
  it('is a function', () => {
    expect(typeof typePokemones).toBe('function');
  });
  it('returns `24`', () => {
    expect(typePokemones("grass",data.pokemon)).toHaveLength(24);
  });
});


describe('rarezaPokemon', () => {
  it('is a function', () => {
    expect(typeof rarezaPokemon).toBe('function');
  });
  it('should return', () => {
    expect(rarezaPokemon("normal", data.pokemon)).toHaveLength(240)
  });
});

describe('regionFuncion', () => {
  it('is a function', () => {
    expect(typeof regionFuncion).toBe('function');
  });

    it('returns `100`', () => {
      expect(regionFuncion("johto",data.pokemon)).toHaveLength(100);
    });
  });

describe('buscarPoke', () => {
  it('is a function', () => {
    expect(typeof buscarPoke).toBe('function');
  });

  it('returns `pikachu`', () => {
    expect((buscarPoke("pika",data.pokemon))[0].name).toBe('pikachu');
  });

  it('returns `bulbasaur`', () => {
    expect((buscarPoke("001",data.pokemon))[0].name).toBe('bulbasaur');
  });
});