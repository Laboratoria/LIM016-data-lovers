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

export const sortData = (array, sortBy, sortOrder) => {
 
  return
}

export const computeStats = (data) => {

  return 
}

