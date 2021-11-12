import { huevitoPokemon , filtarCp , rarezaPokemon , ordenAlfaNumerico} from '../src/data.js';

import data from"../src/data/pokemon/pokemon"


describe('huevitoPokemon', () => {
  it('is a function', () => {
    expect(typeof huevitoPokemon).toBe('function');
  });

})



it('should return', () => {
  expect(huevitoPokemon("2 km", data.pokemon)).toHaveLength(23)
});






describe('filtarCp', () => {
  it('is a function', () => {
    expect(typeof filtarCp).toBe('function');
  });

})

it('should return', () => {
  expect((filtarCp("max", data.pokemon))[0].name).toBe("mewtwo")
});


it('should return', () => {
  expect((filtarCp("min", data.pokemon))[0].name).toBe("magikarp")
});




describe('rarezaPokemon', () => {
  it('is a function', () => {
    expect(typeof rarezaPokemon).toBe('function');
  });

})


it('should return', () => {
  expect(rarezaPokemon("normal", data.pokemon)).toHaveLength(240)
});



describe('ordenAlfaNumerico', () => {
  it('is a function', () => {
    expect(typeof ordenAlfaNumerico).toBe('function');
  });

})


it('should return', () => {
  expect((ordenAlfaNumerico("az", data.pokemon))[0].name).toBe("abra")
});


it('should return', () => {
  expect((ordenAlfaNumerico("za", data.pokemon))[0].name).toBe("zubat")
});

it('should return', () => {
  expect((ordenAlfaNumerico("1_251", data.pokemon))[0].name).toBe("bulbasaur")
});


it('should return', () => {
  expect((ordenAlfaNumerico("251_1", data.pokemon))[0].name).toBe("celebi")
});
