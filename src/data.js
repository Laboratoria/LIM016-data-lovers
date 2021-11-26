export const example = () => {

  return 'example';
};

export const filters =  (data, condicion) => {

  return data.filter((personaje) => personaje.gender === condicion);

};

