import data from './data/pokemon/pokemon.js';
import { buscarPokemon, mostraPokemon } from './data.js';

const input=document.querySelector(".buscarPokemon");
const container=document.querySelector(".container-pokemons");

const fragment=document.createDocumentFragment();
const template=document.getElementById("templateCard");

window.onload=()=>{
mostraPokemon(data.pokemon, fragment, template, container);}


function limpiar(){ 
    let nodosEliminar=document.querySelectorAll(".card");
    nodosEliminar.forEach((nodo)=>{nodo.remove();});
}

input.addEventListener("keyup",(e)=>{
        limpiar();
        let valorInput = e.target.value;
        input.value = valorInput;
        buscarPokemon(data.pokemon,valorInput,fragment, template, container);
    
});
