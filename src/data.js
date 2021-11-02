import data from './data/athletes/athletes.js';
export const example = () =>{

  let example= Object.entries(data)[4][1]; //convierto al objeto en array, luego me quedé solo con el último elemento del array
  //console.log(example);
  
  let equipos= example.map(example=> example.team);// me quedo solo con los equipos
  //console.log(equipos);
  return equipos;
};

export const anotherExample = () => {
  return 'OMG';
};
