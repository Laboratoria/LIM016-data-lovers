// IMPORTAR DATA DE POKEMON.JS
import data from './data/pokemon/pokemon.js';
import { buscarPokemon, mostraPokemon } from './data.js';

// DECLARACION DE VARIABLES
const input=document.querySelector(".buscarPokemon");
const container=document.querySelector(".container-pokemons");

const fragment=document.createDocumentFragment();
const template=document.getElementById("templateCard");

const up=document.querySelector(".button-up");

// FUNCIÓN PARA LIMPIAR LAS TARJETAS
function limpiar(){ 
    let nodosEliminar=document.querySelectorAll(".card");
    nodosEliminar.forEach(nodo => nodo.remove());
}

// CUANDO CARGA LA PAGINA
window.onload = () => mostraPokemon(data.pokemon, fragment, template, container);

// EVENTO AL PRESIONAR UNA TECLA EN EL INPUT BUSCADOR
input.addEventListener("keyup",(e)=>{
        limpiar();
        let valorInput = e.target.value;
        input.value = valorInput;
        buscarPokemon(data.pokemon,valorInput,fragment, template, container);
    
});

// FILTROS
const opcion = document.querySelectorAll('.opcion');

// PERMITE RECORRER CADA UNA DE NUESTRAS OPCIONES
opcion.forEach(e => {

    // AÑADIMOS UN EVENTO A CADA ELEMENTO SELECCIONADO
    e.addEventListener('click', function(e){

        // ALTERAMOS LAS CLASES DE NUESTROS ENLACES
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
    });

});

// FILTRAR DATA
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

// BOTON SUBIR AL INICIO DE PAGINA
up.addEventListener("click", scrollUp);

function scrollUp(){
    let desplaScroll=document.documentElement.scrollTop;
    if(desplaScroll>10){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0,desplaScroll-(desplaScroll/50));
    }
    else {up.style.visibility="hidden";}
}

window.onscroll=function(){
    let scroll=document.documentElement.scrollTop;
    if(scroll>10){
        up.style.visibility="visible";}
    else {up.style.visibility="hidden";}
}