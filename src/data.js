

//Filtro de people, vehiculo, locations para mostrar los items
export const filterItems = (property, array) => {
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
export const sortOrdenAlfabeticoAsc = (array,parametro) => {
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

export const sortOrdenAlfabeticoDesc = (array,parametro) => {
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
export const filterData = (array,property,parametro) => {  
  const arrayProperty = array.filter((arrayItem)=> {
     return arrayItem[parametro]=== property
  });
  return arrayProperty
};

//Filtrar por Score y Año de Lanzamiento ascendente
export const sortOrdenNumericoAsc = (array,parametro) => {
  const compareNumber = array.sort((a, b) => {
    return b[parametro] - a[parametro];
  });
  return compareNumber
}
//Filtrar por Score y Año de Lanzamiento descendente
export const sortOrdenNumericoDesc = (array,parametro) => {
  const compareNumber = array.sort((a, b) => {
    return a[parametro] - b[parametro];
  });
  return compareNumber
}


  /*const compareNumber = sortArray.flat(1).sort((a,b) => {
   if(a.parametro !== "NA" )
    return b[parametro] - a[parametro];
  });
  return compareNumber
  }*/


   export const filterPeopleLocationsVehicles = (array,llave,property,parametro) => { 
    let sortArray = [];
    for(let i=0; i<array.length;i++){
      sortArray.push(array[i][llave])
    }
    const arrayProperty = sortArray.flat(2).filter((arrayItem)=> {
     return arrayItem[parametro]=== property 
  });
      return arrayProperty
    }