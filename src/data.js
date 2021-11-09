
export const functionAll = (datos) => {
  const arr = datos.athletes;
  const arr2 = [];
  arr.filter(function (person) { //person es el nuevo objeto recorrido
    console.table(person);
    return person.age;
    
  });


  //console.log(data.athletes, 'holi');

  //FILTRAR POR EDAD
  /*let ageFilter = data.filter(function(data){
    return data.age===21;
  })
  console.log(ageFilter);*/


  // let gender = athletes.filter(function(athletes){
  // return athletes.gender === 'M';
  // });
  // console.log(gender);


};

/*exporto mi funcion para usarla en otro partes de la aplicacion*/ 
// Este funcion recive 3 parametros, el primero es un Array de Athletas
// El segundo parametro es una funcion de comparacion que va a utilizar el metodo sort, de Array para ordernar.
// el tercer parametro se usara para ordenar de manera ascendente o descendente, este parametro es de tipo booleano: 
// Si es true entonces el ordenamiento sera ascendente, si es false entonces sera descendente
export const sortData = (data, sortBy, sortOrder) =>{
    
    if (sortOrder) {
        return data.sort(sortBy);/*con el metodo sort hago una ordenacion alfabetica. Con sortBy (funcion 
            de comparacion) ordenara bajo un criterio*/
    } else {
        return data.sort(sortBy).reverse();
    }
   
   }