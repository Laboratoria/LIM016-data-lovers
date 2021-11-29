
export const rio_teams = (data) =>{  //pasó test

  let justCountries= data.athletes.map(item=>item.team);
   return justCountries;
   
};

export const sportsEvents = (data) =>{  //pasó test

  let justSportsEvents= data.athletes.reduce(       //un objeto con los deportes y las coincidencias de los eventos
    (acc, element) => 
    Object.assign(acc, {[element.sport]:(acc[element.sport] || [])
      .concat([element.event])
    }), {}
    )
   return justSportsEvents;
   
};

export const athletes_rio = (data)=>{  //pasó test

  let justAthletes= data.athletes.map(item=>[item.name,item]);
  return justAthletes;
}

export const multipleMedalsWinners = (data)=>{
  let multipleMedals= data.athletes.reduce(
    (acc, element) => 
    Object.assign(acc, {[element.name]:(acc[element.name] || [])
      .concat([element.event]).concat([element.medal])
    }), {}
    )
    return multipleMedals;
}

export const timesRepeated = arr =>{
  return arr.reduce((acc, item) =>{
    if(!acc[item]){  
      acc[item]= 1;
    }
    else{
      acc[item] = acc[item]+1;
    }
    return acc
  }, {});
};

export const noRepeated = data =>{
  return data.reduce((acc, item) =>{
    if(!acc[item]){  
      acc[item]= "";
    }
    else{
      acc[item] = acc[item]+ "";
    }
    return acc
  }, {});
};

export const spliceIntoChunks= (arr, chunkSize) =>{
  const res = [];
  while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
  }
  return res;
}

export const justFemale=(data)=>{ // pasó test
  let female= data.athletes.filter(item=> (item.gender=== "F"));
  let female_sport= female.map(item=>[item.name,item.sport]);
  return female_sport;
}

// export const anotherExample = (data) => {
//   return 'OMG';
// };

export const medals = (data) => {
   let datos = data.athletes.map(item => [item.gender, item.medal]);
   return datos;
};




