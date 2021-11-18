// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

// export const data = () => {

//   console.log(data.results);

//   return data.results;

  
// };

const comidas = [
  { id: 1, momento: 'Desayuno' },
  { id: 2, momento: 'Almuerzo' },
  { id: 3, momento: 'Comida' },
  { id: 4, momento: 'Merienda' },
  { id: 5, momento: 'Cena' },
];

const momentoComida = comidas.map((comida) => comida.momento);

console.log(momentoComida);