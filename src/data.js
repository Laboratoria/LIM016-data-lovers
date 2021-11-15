export const mostraPokemon = (pokemon, fragment, template, container) => {
  for(let i=0;i<pokemon.length;i++){
  template.content.querySelector(".numPokemon").textContent=pokemon[i].num;
  template.content.querySelector(".imgPokemon").src=pokemon[i].img;
  template.content.querySelector(".nomPokemon").textContent=pokemon[i].name;
  template.content.querySelector(".nomRegion").textContent=pokemon[i].generation.name;
  
  const clone=template.content.cloneNode(true);
  fragment.appendChild(clone); 
  }
  container.appendChild(fragment);
};

export const buscarPokemon = (pokemon, input, fragment, template, container) => {
  for(let i=0;i<pokemon.length;i++){
    if(pokemon[i].name.includes(input)){
      template.content.querySelector(".numPokemon").textContent=pokemon[i].num;
      template.content.querySelector(".imgPokemon").src=pokemon[i].img;
      template.content.querySelector(".nomPokemon").textContent=pokemon[i].name;
      template.content.querySelector(".nomRegion").textContent=pokemon[i].generation.name;
      console.log(pokemon[i].img);
      const clone=template.content.cloneNode(true);
      fragment.appendChild(clone); 
    }
  }
      container.appendChild(fragment);
};