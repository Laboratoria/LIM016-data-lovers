import { filters } from "../src/data.js";
import data from "../src/data/rickandmorty/rickandmorty.js";

let dataPersonajes = data.results;

describe(" la función filtro de personajes => filters", () => {
  it("is a function", () => {
    expect(typeof filters).toBe("function");
  });

  it("retorna a array de 493 personajes cuando no contiene filtros", () => {
    const personajes = filters(dataPersonajes, "", "");
    expect(personajes.length).toEqual(493);
  });

  it("retorna a array de 42 personajes cuando contiene filtro por genero desconocido", () => {
    const personajesGeneroDesconocido = filters(dataPersonajes, "gender", "1");
    expect(personajesGeneroDesconocido.length).toEqual(42);
  });

  it("retorna a array de 73 personajes cuando contiene filtro por genero femenino", () => {
    const personajesGeneroFemenino = filters(dataPersonajes, "gender", "2");
    expect(personajesGeneroFemenino.length).toEqual(73);
  });

  it("retorna a array de 372 personajes cuando contiene filtro por genero masculino", () => {
    const personajesGeneroMasculino = filters(dataPersonajes, "gender", "3");
    expect(personajesGeneroMasculino.length).toEqual(372);
  });

  it("retorna a array de 6 personajes cuando contiene filtro por genero - sin genero", () => {
    const personajesSinGenero = filters(dataPersonajes, "gender", "4");
    expect(personajesSinGenero.length).toEqual(6);
  });

  it("retorna a array de 17 personajes cuando contiene filtro por especie animal", () => {
    const personajesAnimales = filters(dataPersonajes, "species", "1");
    expect(personajesAnimales.length).toEqual(17);
  });

  it("retorna a array de 5 personajes cuando contiene filtro por especie desconocida", () => {
    const personajesEspecieDesconocida = filters(dataPersonajes, "species", "2");
    expect(personajesEspecieDesconocida.length).toEqual(5);
  });

  it("retorna a array de 6 personajes cuando contiene filtro por especie enfermedad", () => {
    const personajesEspecieEnfermedad = filters(dataPersonajes,"species","3");
    expect(personajesEspecieEnfermedad.length).toEqual(6);
  });

  it("retorna a array de 132 personajes cuando contiene filtro por especie extraterrestre o alien", () => {
    const personajesEspecieAlien = filters(dataPersonajes, "species", "4");
    expect(personajesEspecieAlien.length).toEqual(132);
  });

  it("retorna a array de 244 personajes cuando contiene filtro por especie humana", () => {
    const personajesEspecieHumano = filters(dataPersonajes, "species", "5");
    expect(personajesEspecieHumano.length).toEqual(244);
  });

  it("retorna a array de 53 personajes cuando contiene filtro por especie humanoide", () => {
    const personajesEspecieHumanoide = filters(dataPersonajes, "species", "6");
    expect(personajesEspecieHumanoide.length).toEqual(53);
  });

  it("retorna a array de 7 personajes cuando contiene filtro por especie mitologico", () => {
    const personajesEspecieMitologico = filters(dataPersonajes, "species", "7");
    expect(personajesEspecieMitologico.length).toEqual(7);
  });

  it("retorna a array de 8 personajes cuando contiene filtro por especie mutante o Cronenberg", () => {
    const personajesEspecieMutante = filters(dataPersonajes, "species", "8");
    expect(personajesEspecieMutante.length).toEqual(8);
  });

  it("retorna a array de 1 personaje cuando contiene filtro por especie parasito", () => {
    const personajesEspecieParasito = filters(dataPersonajes, "species", "9");
    expect(personajesEspecieParasito.length).toEqual(1);
  });

  it("retorna a array de 6 personajes cuando contiene filtro por especie Poopybutthole", () => {
    const personajesEspeciePoopybutthole = filters(dataPersonajes,"species","10");
    expect(personajesEspeciePoopybutthole.length).toEqual(6);
  });

  it("retorna a array de 11 personajes cuando contiene filtro por especie robot", () => {
    const personajesEspecieRobot = filters(dataPersonajes,"species","11");
    expect(personajesEspecieRobot.length).toEqual(11);
  });

  it("retorna a array de 3 personajes cuando contiene filtro por especie vampiro", () => {
    const personajesEspecieVampiro = filters(dataPersonajes,"species","12");
    expect(personajesEspecieVampiro.length).toEqual(3);
  });

  it("retorna a array de 65 personajes cuando contiene filtro por estado de vida desconocido", () => {
    const personajesEstadoDesconocido = filters(dataPersonajes, "status", "1");
    expect(personajesEstadoDesconocido.length).toEqual(65);
  });

  it("retorna a array de 147 personajes cuando contiene filtro por estado de vida muerto", () => {
    const personajesEstadoMuerto = filters(dataPersonajes, "status", "2");
    expect(personajesEstadoMuerto.length).toEqual(147);
  });

  it("retorna a array de 281 personajes cuando contiene filtro por estado de vida vivo", () => {
    const personajesEstadoVivo = filters(dataPersonajes, "status", "3");
    expect(personajesEstadoVivo.length).toEqual(281);
  });

});
