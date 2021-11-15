import data from './data/pokemon/pokemon.js';
import { buscarPokemon, mostraPokemon } from './data.js';

const input=document.querySelector(".buscarPokemon");
const container=document.querySelector(".container-pokemons");

const fragment=document.createDocumentFragment();
const template=document.getElementById("templateCard");

window.onload = () => mostraPokemon(data.pokemon, fragment, template, container);

function limpiar(){ 
    let nodosEliminar=document.querySelectorAll(".card");
    nodosEliminar.forEach(nodo => nodo.remove());
}

input.addEventListener("keyup",(e)=>{
        limpiar();
        let valorInput = e.target.value;
        input.value = valorInput;
        buscarPokemon(data.pokemon,valorInput,fragment, template, container);
    
});

// Filtros
const opcion = document.querySelectorAll('.opcion');

// Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {

    // Añadimos un evento a cada elemento seleccionado
    e.addEventListener('click', function(e){

        // Alteranmos las clases de nuestros enlaces
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
    });

});

// Filtrar data
const region = document.querySelectorAll('.region');
region.forEach(e=>{    
    
    e.addEventListener("click", e => {
        limpiar();
        let regionOption = e.target.getAttribute("region");
        let pokemons =  data.pokemon;
        let pokemonsFilter = pokemons.filter(pokemon => pokemon.generation.name == regionOption);
        // alert(e.target.getAttribute('region'));
        // console.log(pokemonsFilter);
        buscarPokemon(pokemonsFilter,input.value,fragment, template, container);
    });
});


const elemento = document.querySelectorAll('.elemento');
elemento.forEach(e=>{    
    
    e.addEventListener("click", e => {
        limpiar();
        let elementoOption = e.target.getAttribute("elemento");
        let pokemons =  data.pokemon;
        let pokemonsFilter = pokemons.filter(pokemon => pokemon.type[0] == elementoOption || pokemon.type[1] == elementoOption);
        //buscar con cual comparar
        // alert(e.target.getAttribute('elemento'));
        console.log(pokemonsFilter);
        buscarPokemon(pokemonsFilter,input.value,fragment, template, container);
    });
});