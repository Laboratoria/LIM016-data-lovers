// estas funciones son de ejemplo

export const filterPeopleLocationsVehicles = (property, array) => {
  let arrayPeople = [];
  for(let i=0; i<array.length;i++){
      arrayPeople.push(array[i][property])
  }
    return arrayPeople
};

export const filterItems = (textInputSearch, array) => {
  return array.filter((el) =>
    el.toLowerCase().indexOf(textInputSearch.toLowerCase()) > -1
  );
}


export const computeStats = (data) => {
  return 
}

<<<<<<< HEAD
export const sortData = (array, property) => {  
 
    const arrayProperty = array.filter((arrayItem)=> {
      conteinerScrollFilmo.innertHtml=""
       return arrayItem.director === property
=======
export const sortData = (array,property,parametro) => {  
  const arrayProperty = array.filter((arrayItem)=> {
     return arrayItem[parametro]=== property
  });
  console.log(arrayProperty);
  return arrayProperty
};


/*export const sortData = (array,property,callback, parametro) => {  

    const arrayProperty = array.filter((arrayItem)=> {
       return arrayItem[parametro]=== property
>>>>>>> be65427192dbdf720cbfb29ca07f18108e0578d9
    });
 console.log(arrayProperty);
      if(property === "clean")
      {
        return callback(films)      
      }
      else{
        return arrayProperty;        
      }   
  };*/


