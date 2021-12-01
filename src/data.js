

//Filtro de people, vehiculo, locations para mostrar los items
export const filterItems = (property, array) => {
  let arrayItems = array.map((ele) => ele[property])
  return arrayItems
};



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

    

    export const filterAge = (array, parametro, sliderValue) => {

      let arrayPeople = array.map((el) => el[parametro]);
      //const intento = slider.value;
      const arrayAges = [];
      arrayPeople.flat(1).forEach((p) => {
          let edades= p.age;
            if (edades.includes(sliderValue)){
              arrayAges.push(p)
            }
      })
      return arrayAges
    }

   
    export const inputSearch = (array,texto) => {
      const arrayFilms = [ ];
      array.forEach((film) => {
        let textTitle = film.title.toLowerCase() ;
        if (textTitle.includes(texto.toLowerCase())) {
          arrayFilms.push(film)
      }
    })
     return arrayFilms;
    }
    
  