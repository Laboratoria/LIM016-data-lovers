

/*exporto mi funcion para usarla en otro partes de la aplicacion*/
// Este funcion recibe 3 parametros, el primero es un Array de Athletas
// El segundo parametro es una funcion de comparacion que va a utilizar el metodo sort, de Array para ordernar.
// el tercer parametro se usara para ordenar de manera ascendente o descendente, este parametro es de tipo booleano: 
// Si es true entonces el ordenamiento sera ascendente, si es false entonces sera descendente


const sortData = (data, sortBy, sortOrder) => {

  if (sortOrder) {
    return data.sort(sortBy);/*con el metodo sort hago una ordenacion alfabetica. Con sortBy (funcion 
            de comparacion) ordenara bajo un criterio*/
  } else {
    return data.sort(sortBy).reverse();
  }

}



const computeDataTwo = (datos) =>{
  const mapCountry = new Map(); 
  //Aqui inicializamos nuetro mapa de paises con todas las medallas en cero 
 for (let index = 0; index < datos.length; index++) {
   const element = datos[index];
   if (!mapCountry.has(element.team)) { 
     const initValue = {silver: 0, gold: 0,bronze: 0, total: 0}
     mapCountry.set(element.team, initValue); //creando por primera vez el set dentro del Map 
   }
 }
 
 //Aqui vamos a contar todas las medallas 
 for (let index = 0; index < datos.length; index++) {
  const element = datos[index];
  const country = mapCountry.get(element.team); 
  if (element.medal === "Gold") {
   country.gold = country.gold +1;
  }
  if (element.medal === "Bronze") {
    country.bronze = country.bronze +1;
   }
   if (element.medal === "Silver") {
    country.silver = country.silver +1;
   }
   country.total = country.total +1;
   mapCountry.set(element.team, country) ///Aqui reemplazamos con el nuevo objeto 
}

//transformando el Map en un array de noc y total 
 const array = [];
mapCountry.forEach((value,key)=>{
  const totalMedalByNoc = {team: key, gold:value.gold, silver:value.silver, bronce:value.bronze, total: value.total};
  array.push(totalMedalByNoc);
  console.log(totalMedalByNoc);
}) 
//Ordenando de mayor a menor el total de medallas por pais
 return array.sort(function(prev, next){
  if(prev.total < next.total){
    return 1;
  }
  if (prev.total > next.total){
    return -1;
  } return 0;
});
}
  
export {
  sortData,
  computeDataTwo,
  computeData
} 