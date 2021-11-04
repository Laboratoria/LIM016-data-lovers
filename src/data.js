
export const teams = (data) =>{

  let rio= Object.entries(data)[4][1]; //convierto al objeto en array, luego me quedé solo con el último elemento del array
 // console.log(rio);
  
  let equipos= rio.map(rio=>rio.team);
  //console.log(equipos);
  return equipos;
  
};
export const rioDe = () =>{

  let rioDe= Object.entries(data)[4][1]; //convierto al objeto en array, luego me quedé solo con el último elemento del array
  //console.log(example);
  
  let deport= rioDe.map(rioDe=>`<h4>${rioDe.sport}</h4>`)
  console.log(deport);
  return deport;
  
};

export const anotherExample = () => {
  return 'OMG';
};
