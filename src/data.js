//import athletes from "./data/athletes/athletes";

 
 
  export const computeData = (datos, medal) =>{
    const arrayOfTeam =[];
    const deportes= datos.filter(athletes => athletes.medal === medal  )
      for (let i= 0; i < deportes.length; i ++){
        arrayOfTeam.push(deportes[i].team)
      }
      const teamOfSilver = [];
      for (let j=0; j < arrayOfTeam.length; j++){
        const totalSilverTeam = arrayOfTeam[j] + " " + arrayOfTeam.filter(team => team === arrayOfTeam[j]).length
        teamOfSilver.push(totalSilverTeam)
      }
      const uniqueTeam = new Set (teamOfSilver)
      console.log(uniqueTeam);
   } 

   


   

   

  /* 
  medalSilver: (medal, team) => {
    const medalForTeam = athletes.filter(athletes => athletes.medal === "Silver")
    for (i= 0; i < deportes.length; i ++){
      array.push(deportes[i].team +" " + deportes[i].medal)

    }
  }
 }
 console.log(objeto);
 */



  




////ESTO ES DE LAS CHICAS -- NO TOCAR --  

//import data from './data/athletes/athletes';// el punto es para indicar que quiero buscar justo donde me encuentro
// export const sortData = (data, sortBy, sortOrder) =>{
//   return dataAthletes.sort(sortBy);
 
//  },
 
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
     });
    return person.age;

 
    console.log(data.athletes, 'holi');
 
    //FILTRAR POR EDAD
   /*let ageFilter = data.filter(function(data){
//      return data.age===21;
//    })
//    console.log(ageFilter);*/
 
 
//    // let gender = athletes.filter(function(athletes){
//    // return athletes.gender === 'M';
//    // });
//    // console.log(gender);
 
 
 }
