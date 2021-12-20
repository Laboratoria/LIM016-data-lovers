
//Filtro de people, vehiculo, locations para mostrar los items
export const filterItems = (property, array) => {

  if(property === ""){
    return[]
  }
  let arrayItems= array.map((ele) => ele[property])
  return arrayItems
};


//Filtrar por directores
export const filterDirector = (array, property ) => {
  const arrayProperty = array.filter((arrayItem) =>  {
    // eslint-disable-next-line no-undef
    return arrayItem.director === property
  });
  return arrayProperty
};


//Filtrar por productores
export const filterProducer = (array, property) => {
  const arrayProperty = array.filter((arrayItem) =>  {
    // eslint-disable-next-line no-undef
    return arrayItem.producer === property
  });
  return arrayProperty
};


//Ordenar alfabticamente ascendente y descendente
export const sortOrdenAlfabeticoAsc = (array) => {
  const compareTitle = array.sort((a, b ) => {
    if ( a.title.toLowerCase() < b.title.toLowerCase()){
      return -1;
    }
    else {
      return 0;
    }
})
return compareTitle
}


export const sortOrdenAlfabeticoDesc = (array) => {
  const compareTitle = array.sort((a, b ) => {
    if ( a.title.toLowerCase() > b.title.toLowerCase()){
      return -1;
    }
    else {
      return 0;
    }
})
return compareTitle
}


//Filtrar por Score  descendente
export const sortOrdenNumericoDescScore = (array) => {
  const compareNumber = array.sort((a, b) => {
    return b.rt_score - a.rt_score;
  });
  return compareNumber
}


//Filtrar por Score ascendente
export const sortOrdenNumericoAscScore = (array) => {
  const compareNumber = array.sort((a, b) => {
    return a.rt_score - b.rt_score;
  });
  return compareNumber
} 

//Filtrar por año de lanzamiento ascendente
export const sortOrdenNumericoDescAñoLanz = (array) => {
  const compareNumber = array.sort((a, b) => {
    return b.release_date - a.release_date;
  });
  return compareNumber
}

//Filtrarpor año de lanzamiento descendente
export const sortOrdenNumericoAscAñoLanz = (array) => {
  const compareNumber = array.sort((a, b) => {
    return a.release_date - b.release_date;
  });
  return compareNumber
}

   export const filterClima = (array,property) => { 
    let sortArray = [];
    for(let i=0; i<array.length;i++){
      sortArray.push(array[i].locations)
    }
    const arrayProperty = sortArray.flat(2).filter((arrayItem)=> {
     return arrayItem.climate=== property 
  });
      return arrayProperty
    }


export const filterTerreno = (array,property) => { 
  let sortArray = [];
  for(let i=0; i<array.length;i++){
    sortArray.push(array[i].locations)
  }
  const arrayProperty = sortArray.flat(2).filter((arrayItem)=> {
  return arrayItem.terrain === property 
  });
  return arrayProperty
}


export const filterGenero = (array,property) => { 
  let sortArray = [];
  for(let i=0; i<array.length;i++){
    sortArray.push(array[i].people)
  }
  const arrayProperty = sortArray.flat(2).filter((arrayItem)=> {
  return arrayItem.gender === property 
  });
  return arrayProperty
}

export const filterEspecie = (array,property) => { 
  let sortArray = [];
  for(let i=0; i<array.length;i++){
    sortArray.push(array[i].people)
  }
  const arrayProperty = sortArray.flat(2).filter((arrayItem)=> {
  return arrayItem.specie=== property 
  });
  return arrayProperty
}

export const filterVehiculo = (array,property) => { 
  let sortArray = [];
  for(let i=0; i<array.length;i++){
    sortArray.push(array[i].vehicles)
  }
  const arrayProperty = sortArray.flat(2).filter((arrayItem)=> {
  return arrayItem.vehicle_class=== property 
  });
  return arrayProperty
}


export const filterAge = (array, sliderValue) => {
 let arrayPeople = array.map((el) => el.people);
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
    
  