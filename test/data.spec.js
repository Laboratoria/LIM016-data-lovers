import { filters, sortData } from "../src/data.js";

import data from "../src/data/rickandmorty/dataEstatica.js";

let dataFija = data.dataEstatica;

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