// import { filtersTests, sortDataTests } from "../src/dataTest.js";
import { filters, sortData } from "../src/data.js";

// import data from "../src/data/rickandmorty/rickandmorty.js";
import data from "../src/data/rickandmorty/dataEstatica.js";

let dataFija = data.dataEstatica;
// let dataPersonajes = data.results;

describe("la función filtro de personajes => filters", () => {
  it("is a function", () => {
    expect(typeof filters).toBe("function");
  });

  it("retorna a array de 15 personajes cuando no contiene filtros", () => {
    const personajes = filters(dataFija, "", "");
    expect(personajes.length).toEqual(15);
  });

  it("retorna a array de 1 personaje cuando contiene filtro por genero desconocido", () => {
    const personajesGeneroDesconocido = filters(dataFija, "gender", "1");
    expect(personajesGeneroDesconocido.length).toEqual(1);
  });

  it("retorna a array de 2 personajes cuando contiene filtro por genero femenino", () => {
  const personajesGeneroFemenino = filters(dataFija, "gender", "2");
  expect(personajesGeneroFemenino.length).toEqual(2);
  });

  it("retorna a array de 6 personaje cuando contiene filtro por genero masculino", () => {
    const personajesGeneroMasculino = filters(dataFija, "gender", "3");
    expect(personajesGeneroMasculino.length).toEqual(6);
  });

  it("retorna a array de 6 personajes cuando contiene filtro por genero - sin genero", () => {
    const personajesSinGenero = filters(dataFija, "gender", "4");
    expect(personajesSinGenero.length).toEqual(6);
  });

  it("retorna a array de 1 personaje cuando contiene filtro por especie animal", () => {
     const personajesAnimales = filters(dataFija, "species", "1");
        expect(personajesAnimales.length).toEqual(1);
  });

  it("retorna a array de 2 personajes cuando contiene filtro por especie desconocida", () => {
    const personajesEspecieDesconocida = filters(dataFija, "species", "2");
    expect(personajesEspecieDesconocida.length).toEqual(2);
  });

  it("retorna a array de 1 personajes cuando contiene filtro por especie enfermedad", () => {
    const personajesEspecieEnfermedad = filters(dataFija,"species","3");
    expect(personajesEspecieEnfermedad.length).toEqual(1);
  });

  it("retorna a array de 3 personajes cuando contiene filtro por especie extraterrestre o alien", () => {
    const personajesEspecieAlien = filters(dataFija, "species", "4");
    expect(personajesEspecieAlien.length).toEqual(3);
  });

  it("retorna a array de 1 personajes cuando contiene filtro por especie humana", () => {
    const personajesEspecieHumano = filters(dataFija, "species", "5");
    expect(personajesEspecieHumano.length).toEqual(1);
  });

  it("retorna a array de 1 personaje cuando contiene filtro por especie humanoide", () => {
    const personajesEspecieHumanoide = filters(dataFija, "species", "6");
    expect(personajesEspecieHumanoide.length).toEqual(1);
  });

  it("retorna a array de 1 personaje cuando contiene filtro por especie mitologico", () => {
    const personajesEspecieMitologico = filters(dataFija, "species", "7");
    expect(personajesEspecieMitologico.length).toEqual(1);
  });

  it("retorna a array de 1 personaje cuando contiene filtro por especie mutante o Cronenberg", () => {
    const personajesEspecieMutante = filters(dataFija, "species", "8");
    expect(personajesEspecieMutante.length).toEqual(1);
  });

  it("retorna a array de 1 personaje cuando contiene filtro por especie parasito", () => {
    const personajesEspecieParasito = filters(dataFija, "species", "9");
    expect(personajesEspecieParasito.length).toEqual(1);
  });

  it("retorna a array de 1 personajes cuando contiene filtro por especie Poopybutthole", () => {
    const personajesEspeciePoopybutthole = filters(dataFija,"species","10");
    expect(personajesEspeciePoopybutthole.length).toEqual(1);
  });

  it("retorna a array de 1 personajes cuando contiene filtro por especie robot", () => {
    const personajesEspecieRobot = filters(dataFija,"species","11");
    expect(personajesEspecieRobot.length).toEqual(1);
  });

  it("retorna a array de 1 personajes cuando contiene filtro por especie vampiro", () => {
    const personajesEspecieVampiro = filters(dataFija,"species","12");
    expect(personajesEspecieVampiro.length).toEqual(1);
  });

  it("retorna a array de 1 personajes cuando contiene filtro por estado de vida desconocido", () => {
    const personajesEstadoDesconocido = filters(dataFija, "status", "1");
    expect(personajesEstadoDesconocido.length).toEqual(1);
  });

  it("retorna a array de 5 personajes cuando contiene filtro por estado de vida muerto", () => {
    const personajesEstadoMuerto = filters(dataFija, "status", "2");
    expect(personajesEstadoMuerto.length).toEqual(5);
  });

  it("retorna a array de 9 personajes cuando contiene filtro por estado de vida vivo", () => {
    const personajesEstadoVivo = filters(dataFija, "status", "3");
    expect(personajesEstadoVivo.length).toEqual(9);
  });

});

describe("Personajes ordenados alfabeticamente en forma ascende o descendente", () => {
  it("Debe ser una funcion de orden alfabetico", () => {
    expect(typeof sortData).toBe("function");
  });

  it("El primer personaje sino se selecciona el orden sería Rick Sanchez", () => {
    const personajesDesordenados = sortData(dataFija, "");
    // console.log(personajesDesordenados[0]);
    expect(personajesDesordenados[0].name).toEqual("Rick Sanchez");
  });

  it("El último personaje sino se selecciona el orden sería Little Voltron", () => {
    const personajesDesordenados = sortData(dataFija, "");
    expect(personajesDesordenados[14].name).toEqual("Little Voltron");
  });

  it("Retorna el nombre del primer personaje si selecciona A-Z", () => {
    const sortNombrePersonajeAsc = sortData(dataFija, "AZ");
    expect(sortNombrePersonajeAsc[0].name).toEqual("Beth's Mytholog");
  });
  
  it("Retorna el nombre del primer personaje si selecciona Z-A", () => {
    const sortNombrePersonajeAsc = sortData(dataFija, "ZA");
    expect(sortNombrePersonajeAsc[0].name).toEqual("Vampire Master");
  });
});

//------ pruebas 
// describe(" la función filtro de personajes => filters", () => {
//   it("is a function", () => {
//     expect(typeof filters).toBe("function");
//   });

//   it("retorna a array de 493 personajes cuando no contiene filtros", () => {
//     const personajes = filters(dataPersonajes, "", "");
//     expect(personajes.length).toEqual(493);
//   });

//   it("retorna a array de 42 personajes cuando contiene filtro por genero desconocido", () => {
//     const personajesGeneroDesconocido = filters(dataPersonajes, "gender", "1");
//     expect(personajesGeneroDesconocido.length).toEqual(42);
//   });

//   it("retorna a array de 73 personajes cuando contiene filtro por genero femenino", () => {
//     const personajesGeneroFemenino = filters(dataPersonajes, "gender", "2");
//     expect(personajesGeneroFemenino.length).toEqual(73);
//   });

//   it("retorna a array de 372 personajes cuando contiene filtro por genero masculino", () => {
//     const personajesGeneroMasculino = filters(dataPersonajes, "gender", "3");
//     expect(personajesGeneroMasculino.length).toEqual(372);
//   });

//   it("retorna a array de 6 personajes cuando contiene filtro por genero - sin genero", () => {
//     const personajesSinGenero = filters(dataPersonajes, "gender", "4");
//     expect(personajesSinGenero.length).toEqual(6);
//   });

//   it("retorna a array de 17 personajes cuando contiene filtro por especie animal", () => {
//     const personajesAnimales = filters(dataPersonajes, "species", "1");
//     expect(personajesAnimales.length).toEqual(17);
//   });

//   it("retorna a array de 5 personajes cuando contiene filtro por especie desconocida", () => {
//     const personajesEspecieDesconocida = filters(dataPersonajes, "species", "2");
//     expect(personajesEspecieDesconocida.length).toEqual(5);
//   });

//   it("retorna a array de 6 personajes cuando contiene filtro por especie enfermedad", () => {
//     const personajesEspecieEnfermedad = filters(dataPersonajes,"species","3");
//     expect(personajesEspecieEnfermedad.length).toEqual(6);
//   });

//   it("retorna a array de 132 personajes cuando contiene filtro por especie extraterrestre o alien", () => {
//     const personajesEspecieAlien = filters(dataPersonajes, "species", "4");
//     expect(personajesEspecieAlien.length).toEqual(132);
//   });

//   it("retorna a array de 244 personajes cuando contiene filtro por especie humana", () => {
//     const personajesEspecieHumano = filters(dataPersonajes, "species", "5");
//     expect(personajesEspecieHumano.length).toEqual(244);
//   });

//   it("retorna a array de 53 personajes cuando contiene filtro por especie humanoide", () => {
//     const personajesEspecieHumanoide = filters(dataPersonajes, "species", "6");
//     expect(personajesEspecieHumanoide.length).toEqual(53);
//   });

//   it("retorna a array de 7 personajes cuando contiene filtro por especie mitologico", () => {
//     const personajesEspecieMitologico = filters(dataPersonajes, "species", "7");
//     expect(personajesEspecieMitologico.length).toEqual(7);
//   });

//   it("retorna a array de 8 personajes cuando contiene filtro por especie mutante o Cronenberg", () => {
//     const personajesEspecieMutante = filters(dataPersonajes, "species", "8");
//     expect(personajesEspecieMutante.length).toEqual(8);
//   });

//   it("retorna a array de 1 personaje cuando contiene filtro por especie parasito", () => {
//     const personajesEspecieParasito = filters(dataPersonajes, "species", "9");
//     expect(personajesEspecieParasito.length).toEqual(1);
//   });

//   it("retorna a array de 6 personajes cuando contiene filtro por especie Poopybutthole", () => {
//     const personajesEspeciePoopybutthole = filters(dataPersonajes,"species","10");
//     expect(personajesEspeciePoopybutthole.length).toEqual(6);
//   });

//   it("retorna a array de 11 personajes cuando contiene filtro por especie robot", () => {
//     const personajesEspecieRobot = filters(dataPersonajes,"species","11");
//     expect(personajesEspecieRobot.length).toEqual(11);
//   });

//   it("retorna a array de 3 personajes cuando contiene filtro por especie vampiro", () => {
//     const personajesEspecieVampiro = filters(dataPersonajes,"species","12");
//     expect(personajesEspecieVampiro.length).toEqual(3);
//   });

//   it("retorna a array de 65 personajes cuando contiene filtro por estado de vida desconocido", () => {
//     const personajesEstadoDesconocido = filters(dataPersonajes, "status", "1");
//     expect(personajesEstadoDesconocido.length).toEqual(65);
//   });

//   it("retorna a array de 147 personajes cuando contiene filtro por estado de vida muerto", () => {
//     const personajesEstadoMuerto = filters(dataPersonajes, "status", "2");
//     expect(personajesEstadoMuerto.length).toEqual(147);
//   });

//   it("retorna a array de 281 personajes cuando contiene filtro por estado de vida vivo", () => {
//     const personajesEstadoVivo = filters(dataPersonajes, "status", "3");
//     expect(personajesEstadoVivo.length).toEqual(281);
//   });

// });

// //  test para la funcion sort

// describe('Personajes ordenados alfabeticamente en forma ascende o descendente', () => {
//   it('Debe ser una funcion de orden alfabetico', () => {
//     expect(typeof sortData).toBe('function');
//   });

//   it("El primer personaje sino se selecciona el orden sería Rick Sanchez", () => {
//     const personajesDesordenados = sortData(dataPersonajes,"");
//     console.log(personajesDesordenados[0]);
//     expect(personajesDesordenados[0].name).toEqual("Rick Sanchez");
//   });

//   it("El último personaje sino se selecciona el orden sería Secretary of the Interior", () => {
//     const personajesDesordenados = sortData(dataPersonajes, "");
//     expect(personajesDesordenados[492].name).toEqual("Secretary of the Interior");
//   });

//   it('Retorna el nombre del primer personaje si selecciona A-Z ', () => {
//     const sortNombrePersonajeAsc = sortData(dataPersonajes, "AZ")
//     expect(sortNombrePersonajeAsc[0].name).toEqual("Abadango Cluster Princess");
//   });

//   it('Retorna el nombre del primer personaje si selecciona Z-A ', () => {
//     const sortNombrePersonajeAsc = sortData(dataPersonajes, "ZA")
//     expect(sortNombrePersonajeAsc[0].name).toEqual("Zick Zack");
//   });

// });