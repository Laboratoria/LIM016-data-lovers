import { inputSearch,filterItems, filterDirector, filterProducer, filterClima, filterTerreno, filterGenero, filterEspecie, filterVehiculo ,filterAge, sortOrdenAlfabeticoAsc, sortOrdenAlfabeticoDesc, sortOrdenNumericoAscScore, sortOrdenNumericoDescScore ,sortOrdenNumericoAscAñoLanz, sortOrdenNumericoDescAñoLanz} from '../src/data.js';
import  data from '../src/data/ghibli/ghibli.js';

describe('filterItems', () => {
  it('is a function', () => {
    expect(typeof filterItems).toBe('function');
  });

  it('returns el array  que contiene todos los elementos de la seccion vehicles`', () => {
    const result= filterItems('property',array)
    expect(result.length).toEqual(20);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene vehiculos ``', () => {
    const result= filterItems('',array)
    expect(result.length).toEqual(0);
  }); 

});



const array = data.films
  
describe('inputSearch', () => {
  it('is a function', () => {
    expect(typeof inputSearch).toBe('function');
  });


  it('returns true para titulo `Whisper of the Heart`', () => {
    expect(inputSearch(array,"Whisper of the Heart")[0].title.includes("Whisper of the Heart")).toBe(true);
  });


  it('returns 0 para titulo `la caperucita roja', () => {
    expect(inputSearch(array,"la caperucita roja").length).toBe(0);
  });
  
});


describe('filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });


  it('returns el array de 9 elementos que contiene el nombre del Director filtrado `', () => {
    const result= filterDirector(array,'Hayao Miyazaki')
    expect(result.length).toEqual(9);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene el Director filtrado ``', () => {
    const result= filterDirector(array,'totoro')
    expect(result.length).toEqual(0);
  }); 

});

describe('filterProducer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });


  it('returns el array de 1 elementos que contiene el nombre del Director filtrado `', () => {
    const result= filterProducer(array,'Isao Takahata')
    expect(result.length).toEqual(1);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene el Productor filtrado `', () => {
    const result= filterProducer(array,'totoro')
    expect(result.length).toEqual(0);
  }); 

});




 
describe('filterClima', () => {
  it('is a function', () => {
    expect(typeof filterClima).toBe('function');
  });


  it('returns el array de 2 elementos que contiene el tipo de clima filtrado `', () => {
    const result= filterClima (array,'Tropical')
    expect(result.length).toEqual(2);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene el tipo de clima filtrado `', () => {
    const result= filterTerreno(array,'muy lluvioso')
    expect(result.length).toEqual(0);
  }); 

});
  
 
describe('filterTerreno', () => {
  it('is a function', () => {
    expect(typeof filterTerreno).toBe('function');
  });


  it('returns el array de 3 elementos que contiene el tipo de terreno filtrado `', () => {
    const result= filterTerreno (array,'City')
    expect(result.length).toEqual(3);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene el tipo de terreno filtrado `', () => {
    const result= filterTerreno(array,'cielo')
    expect(result.length).toEqual(0);
  }); 

});


describe('filterGenero', () => {
  it('is a function', () => {
    expect(typeof filterGenero).toBe('function');
  });


  it('returns el array de 2 elementos que contiene el género filtrado `', () => {
    const result= filterGenero (array,'NA')
    expect(result.length).toEqual(2);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene genero filtrado `', () => {
    const result= filterGenero(array,'totoro')
    expect(result.length).toEqual(0);
  }); 

});

describe('filterEspecie', () => {
  it('is a function', () => {
    expect(typeof filterEspecie).toBe('function');
  });


  it('returns el array de 1 elemento que contiene la especie filtrada `', () => {
    const result= filterEspecie (array,'Wolf')
    expect(result.length).toEqual(1);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene la especie filtrada `', () => {
    const result= filterEspecie(array,'dinosaurio')
    expect(result.length).toEqual(0);
  }); 

});


describe('filterVehiculo', () => {
  it('is a function', () => {
    expect(typeof filterVehiculo).toBe('function');
  });


  it('returns el array de 1 elemento que contiene el tipo de vehiculo filtrada `', () => {
    const result= filterVehiculo (array,'Moving castle')
    expect(result.length).toEqual(1);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene el tipo de vehiculo filtrada `', () => {
    const result= filterVehiculo(array,'nubecita')
    expect(result.length).toEqual(0);
  }); 

});


describe('filterAge', () => {
  it('is a function', () => {
    expect(typeof filterAge).toBe('function');
  });


  it('returns el array de 1 elemento que contiene la edad filtrada `', () => {
    const result= filterAge (array,'23')
    expect(result.length).toEqual(1);
  }); 
  
  it('returns el array con 0 elementos cuando no contiene la edad filtrada`', () => {
    const result= filterAge(array,'viejita')
    expect(result.length).toEqual(0);
  }); 

});

// test par funciones sort


describe('sortOrdenAlfabeticoAsc', () => {
  it('is a function', () => {
    expect(typeof sortOrdenAlfabeticoAsc).toBe('function');
  });


  it('returns el primer elemento del arreglo es Castle in the Sky`', () => {
    const result= sortOrdenAlfabeticoAsc (array)
    expect(result[0].title).toEqual('Castle in the Sky');
  }); 
  
  it('returns el ultimo elemento del array es Whisper of the Heart`', () => {
    const result= sortOrdenAlfabeticoAsc(array)
    expect(result[result.length-1].title).toEqual('Whisper of the Heart');
  }); 

});


describe('sortOrdenAlfabeticoDesc', () => {
  it('is a function', () => {
    expect(typeof sortOrdenAlfabeticoDesc).toBe('function');
  });


  it('returns el primer elemento del arreglo es Whisper of the Heart`', () => {
    const result= sortOrdenAlfabeticoDesc (array)
    expect(result[0].title).toEqual('Whisper of the Heart');
  }); 
  
  it('returns el ultimo elemento del array es Castle in the Sky`', () => {
    const result= sortOrdenAlfabeticoDesc(array)
    expect(result[result.length-1].title).toEqual('Castle in the Sky');
  }); 

});


describe('sortOrdenNumericoAscScore', () => {
  it('is a function', () => {
    expect(typeof sortOrdenNumericoAscScore).toBe('function');
  });


  it('returns el primer elemento del arreglo es  41`', () => {
    const result= sortOrdenNumericoAscScore (array)
    expect(result[0].rt_score).toEqual('41');
  }); 
  
  it('returns el ultimo elemento del array es 100`', () => {
    const result= sortOrdenNumericoAscScore(array)
    expect(result[result.length-1].rt_score).toEqual('100');
  }); 

});


describe('sortOrdenNumericoDescScore', () => {
  it('is a function', () => {
    expect(typeof sortOrdenNumericoDescScore).toBe('function');
  });


  it('returns el primer elemento del arreglo es  100`', () => {
    const result= sortOrdenNumericoDescScore (array)
    expect(result[0].rt_score).toEqual('100');
  }); 
  
  it('returns el ultimo elemento del array es 41`', () => {
    const result= sortOrdenNumericoDescScore(array)
    expect(result[result.length-1].rt_score).toEqual('41');
  }); 

});




describe('sortOrdenNumericoAscAñoLanz', () => {
  it('is a function', () => {
    expect(typeof sortOrdenNumericoAscAñoLanz).toBe('function');
  });


  it('returns el primer elemento del arreglo es 1986 `', () => {
    const result= sortOrdenNumericoAscAñoLanz (array)
    expect(result[0].release_date).toEqual('1986');
  }); 
  
  it('returns el ultimo elemento del array es 2014`', () => {
    const result= sortOrdenNumericoAscAñoLanz(array)
    expect(result[result.length-1].release_date).toEqual('2014');
  }); 
});



describe('sortOrdenNumericoDescAñoLanz', () => {
  it('is a function', () => {
    expect(typeof sortOrdenNumericoDescAñoLanz).toBe('function');
  });


  it('returns el primer elemento del arreglo es 2014 `', () => {
    const result= sortOrdenNumericoDescAñoLanz (array)
    expect(result[0].release_date).toEqual('2014');
  }); 
  
  it('returns el ultimo elemento del array es 1986`', () => {
    const result= sortOrdenNumericoDescAñoLanz(array)
    expect(result[result.length-1].release_date).toEqual('1986');
  }); 
});
