export const example = () => {

  return 'example';
};

export const filters = function (data, genero) {

  return data.results.filter((filtro) => filtro.gender == genero)

  //  arrayData.filter((personaje) => personaje.gender === "Female");
};