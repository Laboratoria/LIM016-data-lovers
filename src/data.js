export const example = () => {

  return 'example';
};

export const filters = function (data, genero) {
  
  switch (genero) {
  
    case '1':
      let fem = data.filter(item => { item.gender == "Male" })
    
     
      console.log(fem)
      
  
      break;
  
    default:
      break;
  
    }
};
  
export const filterByDirectorProducer = (data, name, items) => {
  switch (items) {
    case 'director': {
      return data.filter(film => film.director === name);
    }
    case 'producer': {
      return data.filter(film => film.producer === name);
    }
    default: {
      break;
    }
  }
};
