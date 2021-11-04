
// estas funciones son de ejemplo
/* export const example = () => {
   return 'example';
 };
 export const anotherExample = () => {
   return 'OMG';
 };*/

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

