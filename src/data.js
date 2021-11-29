export const example = () => {

  return 'example';
};

export const filters =  (data,filtro,condicion) => {
  let filterCharacters;

  if (filtro==="gender"){
    switch (condicion) {
      case "1":
        filterCharacters = data.filter((personaje) => personaje.gender === "Female");
        break;
      case "2":
        filterCharacters = data.filter((personaje) => personaje.gender === "Male");
        break;
      case "3":
        filterCharacters = data.filter((personaje) => personaje.gender === "Genderless");
        break;
      case "4":
        filterCharacters = data.filter((personaje) => personaje.gender === "unknown");
        break;
      default:
        break;
    }
  }
  else if (filtro==="species") {
    switch (condicion) {
      case "1":
        filterCharacters = data.filter((personaje) => personaje.species === "Animal");
        break;
      case "2":
        filterCharacters = data.filter((personaje) => personaje.species === "Cronenberg");
        break;
      case "3":
        filterCharacters = data.filter((personaje) => personaje.species === "unknown");
        break;
      case "4":
        filterCharacters = data.filter((personaje) => personaje.species === "Disease");
        break;
      case "5":
        filterCharacters = data.filter((personaje) => personaje.species === "Alien");
        break;
      case "6":
        filterCharacters = data.filter((personaje) => personaje.species === "Human");
        break;
      case "7":
        filterCharacters = data.filter((personaje) => personaje.species === "Humanoid");
        break;
      case "8":
        filterCharacters = data.filter((personaje) => personaje.species === "Mytholog");
        break;
      case "9":
        filterCharacters = data.filter((personaje) => personaje.species === "Parasite");
        break;
      case "10":
        filterCharacters = data.filter((personaje) => personaje.species === "Poopybutthole");
        break;
      case "11":
        filterCharacters = data.filter((personaje) => personaje.species === "Robot");
        break;
      case "12":
        filterCharacters = data.filter((personaje) => personaje.species === "Vampire");
        break;

      default:
        break;
    } 
  }
  else if(filtro==="status"){
    switch (condicion) {
      case "1":
        filterCharacters = data.filter((personaje) => personaje.status === "unknown");
        break;
      case "2":
        filterCharacters = data.filter((personaje) => personaje.status === "Dead");
        break;
      case "3":
        filterCharacters = data.filter((personaje) => personaje.status === "Alive");
        break;
      default:
        break;
    }
  }
  // console.log(filterCharacters)
  return (filterCharacters);
}

export const sortCharacters = (data)=>{
  let o;
  function sortArray(a,b) {
    if (a.name < b.name) {return -1}
    else if (a.name > b.name) {return 1}
    else {return 0}
  }
  console.log(data);
  o = data.sort(sortArray)
  console.log(o)
  return o 
}
  
