
//funcion para filtrar
const functionAll = (array, condicion) => {
  return array.filter(condicion);
};


/* funcion para obtener un arreglo de solo paises y deportes*/
const allCountries = (countries) => {
  const newArrCountries = countries.map(newTeam => {
    return newTeam.team
  });
  return new Set(newArrCountries);
}

const allSport = (sport) => {
  const newArrSport = sport.map(newTeam => {
    return newTeam.sport
  });
  return new Set(newArrSport);
}

const allTeams = (athletes) => {
  const allTeamsWithDuplicates = athletes.map(person => {
    return person.team
  });
  return new Set(allTeamsWithDuplicates);
}

/*
 Este funcion recive 3 parametros, el primero es un Array de Athletas
 El segundo parametro es una funcion de comparacion que va a utilizar el metodo sort, de Array para ordernar.
 el tercer parametro se usara para ordenar de manera ascendente o descendente, este parametro es de tipo booleano: 
 Si es true entonces el ordenamiento sera ascendente, si es false entonces sera descendente
*/
const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder) {//true
    return data.sort(sortBy);/*con el metodo sort hago una ordenacion alfabetica. Con sortBy (funcion 
            de comparacion) ordenara bajo un mi criterio*/
  } else {//false
    return data.sort(sortBy).reverse();
  }

}
/*mis funciones de comparacion para utilizarlas en mi funcion sort y poder ordenar de una forma
mas natural (1,2,3,4 o a,b,c,d) ya que con sort los elementos si se ordenan pero de una forma predeterminada
del navegador y no es una ordenacion que deseo*/

const sortByName = (athlete1, athlete2) => {//ordeno atletas
  if (athlete1.name > athlete2.name) {
    /*si el primer elemento es mayor se colocara en una posicion
     despues del segundo*/
    return 1;
  }
  if (athlete1.name < athlete2.name) {
    return -1;
    /*si el lemento es menos que el segundo se resta y se coloca 
    en una posicion menor al segundo.*/
  }
  return 0;
  /* si los dos elementos son iguales se quedaran en la misma posicion*/
};

const sortByAge = (athlete1, athlete2) => {//ordeno por edad
  if (athlete1.age > athlete2.age) {
    return 1;
  }
  if (athlete1.age < athlete2.age) {
    return -1;
  }
  return 0;
};

//funcion para el medallero
const computeData = (datos, medal) => {
  const arrayOfTeam = [];
  const deportes = datos.filter(athletes => athletes.medal === medal)
  for (let i = 0; i < deportes.length; i++) {
    arrayOfTeam.push(deportes[i].team)
  }
  const teamOfSilver = [];
  for (let j = 0; j < arrayOfTeam.length; j++) {
    const totalSilverTeam = arrayOfTeam[j] + " " + arrayOfTeam.filter(team => team === arrayOfTeam[j]).length
    teamOfSilver.push(totalSilverTeam)
  }
  const uniqueTeam = new Set(teamOfSilver)
  console.log(uniqueTeam);
}

export {
  functionAll,
  allCountries,
  allSport,
  allTeams,
  sortData,
  sortByName,
  sortByAge,
  computeData,
}