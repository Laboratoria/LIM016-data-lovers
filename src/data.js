export const example = () => {

  return 'example';
};

export const filters = function (data, condicion) {

  return console.log(data, condicion)
  // return data.results.filter((filtro) => filtro.gender == condicion)

  //  arrayData.filter((personaje) => personaje.gender === "Female");
};