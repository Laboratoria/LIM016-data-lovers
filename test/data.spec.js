import { huevitoPokemon , filtarCp , rarezaPokemon , ordenAlfaNumerico, typePokemones, regionFuncion, buscarPoke } from '../src/data.js';

import data from "../src/data/pokemon/pokemon.js";

const pikachu = {
  "num": "025",
  "name": "pikachu",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  "img": "https://www.serebii.net/pokemongo/pokemon/025.png",
  "size": {
    "height": "0.41 m",
    "weight": "6.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "electric"
  ],
  "encounter": {
    "base-flee-rate": "0.1",
    "base-capture-rate": "0.2"
  },
  "spawn-chance": "0.21",
  "stats": {
    "base-attack": "112",
    "base-defense": "96",
    "base-stamina": "111",
    "max-cp": "938",
    "max-hp": "99"
  },
  "resistant": [
    "electric",
    "flying",
    "steel"
  ],
  "weaknesses": [
    "ground"
  ],
  "quick-move": [
    {
      "name": "thunder shock",
      "type": "electric",
      "base-damage": "5",
      "energy": "8",
      "move-duration-seg": "0.6"
    },
    {
      "name": "quick attack",
      "type": "normal",
      "base-damage": "8",
      "energy": "10",
      "move-duration-seg": "0.8"
    }
  ],
  "special-attack": [
    {
      "name": "discharge",
      "type": "electric",
      "base-damage": "65",
      "energy": "-33",
      "move-duration-seg": "2.5"
    },
    {
      "name": "thunderbolt",
      "type": "electric",
      "base-damage": "80",
      "energy": "-50",
      "move-duration-seg": "2.5"
    },
    {
      "name": "wild charge",
      "type": "electric",
      "base-damage": "90",
      "energy": "-50",
      "move-duration-seg": "2.6"
    },
    {
      "name": "thunder",
      "type": "electric",
      "base-damage": "100",
      "energy": "-100",
      "move-duration-seg": "2.4"
    }
  ],
  "egg": "2 km",
  "buddy-distance-km": "1",
  "evolution": {
    "candy": "pikachu candy",
    "next-evolution": [{
      "num": "026",
      "name": "raichu",
      "candy-cost": "50"
    }],
    "prev-evolution": [{
      "num": "172",
      "name": "pichu",
      "candy-cost": "25"
    }]
  }
}

const eevee = {
  "num": "133",
  "name": "eevee",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
  "img": "https://www.serebii.net/pokemongo/pokemon/133.png",
  "size": {
    "height": "0.30 m",
    "weight": "6.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "normal"
  ],
  "encounter": {
    "base-flee-rate": "0.1",
    "base-capture-rate": "0.4"
  },
  "spawn-chance": "2.75",
  "stats": {
    "base-attack": "104",
    "base-defense": "114",
    "base-stamina": "146",
    "max-cp": "1071",
    "max-hp": "127"
  },
  "resistant": [
    "ghost"
  ],
  "weaknesses": [
    "fighting"
  ],
  "quick-move": [
    {
      "name": "quick attack",
      "type": "normal",
      "base-damage": "8",
      "energy": "10",
      "move-duration-seg": "0.8"
    },
    {
      "name": "tackle",
      "type": "normal",
      "base-damage": "5",
      "energy": "5",
      "move-duration-seg": "0.5"
    }
  ],
  "special-attack": [
    {
      "name": "dig",
      "type": "ground",
      "base-damage": "100",
      "energy": "-50",
      "move-duration-seg": "4.7"
    },
    {
      "name": "swift",
      "type": "normal",
      "base-damage": "60",
      "energy": "-50",
      "move-duration-seg": "2.8"
    },
    {
      "name": "body slam",
      "type": "normal",
      "base-damage": "50",
      "energy": "-33",
      "move-duration-seg": "1.9"
    }
  ],
  "egg": "5 km",
  "buddy-distance-km": "5",
  "evolution": {
    "candy": "eevee candy",
    "next-evolution": [
      {
        "num": "134",
        "name": "vaporeon",
        "candy-cost": "25"
      },
      {
        "num": "135",
        "name": "jolteon",
        "candy-cost": "25"
      },
      {
        "num": "136",
        "name": "flareon",
        "candy-cost": "25"
      },
      {
        "num": "196",
        "name": "espeon",
        "candy-cost": "25"
      },
      {
        "num": "197",
        "name": "umbreon",
        "candy-cost": "25"
      },
      {
        "num": "470",
        "name": "leafeon",
        "candy-cost": "25"
      },
      {
        "num": "471",
        "name": "glaceon",
        "candy-cost": "25"
      }
    ]
  }
}

const mewtwo = {
  "num": "150",
  "name": "mewtwo",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart",
  "img": "https://www.serebii.net/pokemongo/pokemon/150.png",
  "size": {
    "height": "2.01 m",
    "weight": "122.0 kg"
  },
  "pokemon-rarity": "legendary",
  "type": [
    "psychic"
  ],
  "encounter": {
    "base-flee-rate": "0.1",
    "base-capture-rate": "0.06"
  },
  "spawn-chance": "0",
  "stats": {
    "base-attack": "300",
    "base-defense": "182",
    "base-stamina": "214",
    "max-cp": "4178",
    "max-hp": "180"
  },
  "resistant": [
    "fighting",
    "psychic"
  ],
  "weaknesses": [
    "bug",
    "ghost",
    "dark"
  ],
  "quick-move": [
    {
      "name": "psycho cut",
      "type": "psychic",
      "base-damage": "5",
      "energy": "8",
      "move-duration-seg": "0.6"
    },
    {
      "name": "confusion",
      "type": "psychic",
      "base-damage": "20",
      "energy": "15",
      "move-duration-seg": "1.6"
    }
  ],
  "special-attack": [
    {
      "name": "psychic",
      "type": "psychic",
      "base-damage": "100",
      "energy": "-100",
      "move-duration-seg": "2.8"
    },
    {
      "name": "shadow ball",
      "type": "ghost",
      "base-damage": "100",
      "energy": "-50",
      "move-duration-seg": "3"
    },
    {
      "name": "hyper beam",
      "type": "normal",
      "base-damage": "150",
      "energy": "-100",
      "move-duration-seg": "3.8"
    },
    {
      "name": "focus blast",
      "type": "fight",
      "base-damage": "140",
      "energy": "-100",
      "move-duration-seg": "3.5"
    }
  ],
  "egg": "not in eggs",
  "buddy-distance-km": "20",
  "evolution": {
    "candy": "mewtwo candy"
  }
}

const wooper = {
  "num": "194",
  "name": "wooper",
  "generation": {
    "num": "generation ii",
    "name": "johto"
  },
  "about": "Wooper usually lives in water. However, it occasionally comes out onto land in search of food. On land, it coats its body with a gooey, toxic film.",
  "img": "https://www.serebii.net/pokemongo/pokemon/194.png",
  "size": {
    "height": "0.41 m",
    "weight": "8.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "water",
    "ground"
  ],
  "encounter": {
    "base-flee-rate": "0.1",
    "base-capture-rate": "0.4"
  },
  "spawn-chance": null,
  "stats": {
    "base-attack": "75",
    "base-defense": "66",
    "base-stamina": "146",
    "max-cp": "641",
    "max-hp": "127"
  },
  "resistant": [
    "fire",
    "poison",
    "rock",
    "steel"
  ],
  "weaknesses": [
    "grass"
  ],
  "quick-move": [
    {
      "name": "water gun",
      "type": "water",
      "base-damage": "5",
      "energy": "5",
      "move-duration-seg": "0.5"
    },
    {
      "name": "mud shot",
      "type": "ground",
      "base-damage": "5",
      "energy": "7",
      "move-duration-seg": "0.6"
    }
  ],
  "special-attack": [
    {
      "name": "mud bomb",
      "type": "ground",
      "base-damage": "55",
      "energy": "-33",
      "move-duration-seg": "2.3"
    },
    {
      "name": "dig",
      "type": "ground",
      "base-damage": "100",
      "energy": "-50",
      "move-duration-seg": "4.7"
    },
    {
      "name": "body slam",
      "type": "normal",
      "base-damage": "50",
      "energy": "-33",
      "move-duration-seg": "1.9"
    }
  ],
  "egg": "not in eggs",
  "buddy-distance-km": "3",
  "evolution": {
    "candy": "wooper candy",
    "next-evolution": [{
      "num": "195",
      "name": "quagsire",
      "candy-cost": "50"
    }]
  }
}

const arrayPrueba = [pikachu, eevee, mewtwo, wooper]


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
    expect(filtarCp("max", arrayPrueba)).toStrictEqual([mewtwo, eevee, pikachu, wooper])
  });
  it('should return', () => {
    expect(filtarCp("min", arrayPrueba)).toStrictEqual([wooper, pikachu, eevee, mewtwo])
});
});


describe('ordenAlfaNumerico', () => {
  it('is a function', () => {
    expect(typeof ordenAlfaNumerico).toBe('function');
  });


it('should return', () => {
  expect(ordenAlfaNumerico("az", arrayPrueba)).toStrictEqual([ eevee, mewtwo, pikachu, wooper])
});


it('should return', () => {
  expect(ordenAlfaNumerico("za", arrayPrueba)).toStrictEqual([wooper, pikachu, mewtwo, eevee])
});

it('should return', () => {
  expect(ordenAlfaNumerico("251_1",arrayPrueba)).toStrictEqual([wooper, mewtwo, eevee, pikachu])
});

it('should return', () => {
  expect(ordenAlfaNumerico("1_251", arrayPrueba)).toStrictEqual([pikachu, eevee, mewtwo, wooper])
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
    expect(buscarPoke("pika",arrayPrueba)).toStrictEqual([pikachu]);
  });

  it('returns `bulbasaur`', () => {
    expect(buscarPoke("194",data.pokemon)).toStrictEqual([wooper]);
  });
});
