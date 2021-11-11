import data from './data/pokemon/pokemon.js';
const lista=document.getElementById("container-pokemons");
const fragment=document.createDocumentFragment();
const template=document.getElementById("templateCard").content;

for(let i=0;i<data.pokemon.length;i++){
template.querySelector(".numPokemon").textContent=data.pokemon[i].num;
template.querySelector(".imgPokemon").src=data.pokemon[i].img;
template.querySelector(".nomPokemon").textContent=data.pokemon[i].name;
template.querySelector(".nomRegion").textContent=data.pokemon[i].generation.name;

const clone=template.cloneNode(true);
fragment.appendChild(clone);
}
lista.appendChild(fragment);
