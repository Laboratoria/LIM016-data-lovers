// estas funciones son de ejemplo

//Filtro de people, vehiculo, locations
export const filterPeopleLocationsVehicles = (property, array) => {
  let arrayPeople = [];
  for(let i=0; i<array.length;i++){
      arrayPeople.push(array[i][property])
  }
    return arrayPeople
};

//Barra de navegacion
/*export const filterItems = (textInputSearch, array) => {
  const searchInput = array.forEach((el) => {
   return el.toLowerCase().indexOf(textInputSearch.toLowerCase()) > -1
  });
  return searchInput
}*/

//Ordenar alfabticamente ascendente y descendente
export const ordenAlfabeticoAsc = (array,parametro) => {
  const compareTitle = array.sort((a, b ) => {
    if ( a[parametro].toLowerCase() < b[parametro].toLowerCase()){
      return -1;
    }
    else {
      return 0;
    }
})
return compareTitle
}

export const ordenAlfabeticoDesc = (array,parametro) => {
  const compareTitle = array.sort((a, b ) => {
    if ( a[parametro].toLowerCase() > b[parametro].toLowerCase()){
      return -1;
    }
    else {
      return 0;
    }
})
return compareTitle
}

//Filtrar por productores y directores
export const sortData = (array,property,parametro) => {  
  const arrayProperty = array.filter((arrayItem)=> {
     return arrayItem[parametro]=== property
  });
  return arrayProperty
};

//Filtrar por Score y Año de Lanzamiento ascendente
export const ordenNumericoAsc = (array,parametro) => {
  const compareNumber = array.sort((a, b) => {
    return b[parametro] - a[parametro];
  });
  return compareNumber
}
//Filtrar por Score y Año de Lanzamiento descendente
export const ordenNumericoDesc = (array,parametro) => {
  const compareNumber = array.sort((a, b) => {
    return a[parametro] - b[parametro];
  });
  return compareNumber
}

//Filtrar por lenght ascendente
export const ordenNumericoAscL = (array,parametro,llave) => {
  let sortArray = [];
  for(let i=0; i<array.length;i++){
    sortArray.push(array[i][llave])
  }

  if ((sortArray.includes(Number))!) {
  const compareNumber = sortArray.flat(1).sort((a, b) => {
    return b[parametro] - a[parametro];
  });
  return compareNumber
  }
}






export const sortPeopleLocationsVehicles = (array,llave,property,parametro) => { 
    let sortArray = [];
    for(let i=0; i<array.length;i++){
      sortArray.push(array[i][llave])
    }
    const arrayProperty = sortArray.flat(2).filter((arrayItem)=> {
     return arrayItem[parametro]=== property 
  });
  return arrayProperty
};
