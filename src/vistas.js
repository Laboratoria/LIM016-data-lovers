import data from "./data/pokemon/pokemon.js";

import {mostrarPokemon} from './main.js'


// const botones del navegador

const container = document.querySelector(".pokemon-container");
const arrayPokemon = data.pokemon;

const btnInicio = document.getElementById("btnInicio");
const btnPokedex = document.getElementById("btnPokedex");
const btnTipo = document.getElementById("btnTipo");
const btnRegion = document.getElementById("btnRegion");
const btnRareza = document.getElementById("btnRareza");
const btnStats = document.getElementById("btnStats");



//--------BOTON PARA VOLVER AL INICIO

btnInicio.addEventListener("click", () => {
  document.querySelector("#welcome").style.display = "block";
  document.querySelector("#pokedex").style.display = "none";
  document.querySelector(".menu").style.display = "none";
  btnInicio.className = "activeButton";
  window.location.reload();
  document.documentElement.scrollTop = 0;
});

//-------------PASAR DE INICIO AL POKEDEX
const verPokedex = document.getElementById("verPokedex");
verPokedex.addEventListener("click", () => {
  document.querySelector("#welcome").style.display = "none";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".menu").style.display = "flex";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".container-tipo-rareza-region").style.display = "none"
  btnPokedex.className = "activeButton";
  btnInicio.className = "";
  btnRareza.className = "";
  btnRegion.className = "";
  btnTipo.className = "";
  document.documentElement.scrollTop = 0;
});

btnPokedex.addEventListener("click", () => { //----------------PASAR A LA VISTA DEL POKEDEX
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon);

  document.querySelector(".container-buscar").style.display = "flex";
  document.querySelector("#divTiposPokemones").style.display = "none";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "none";
  document.querySelector("#container-stats").style.display = "none";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".container-tipo-rareza-region").style.display = "none";
  document.querySelector("#egg").style.display="block";
  document.getElementById("rareza").className = "";
  document.getElementById("region").className=""
  document.getElementById("tipos").className=""

  if(document.querySelector("#container-filtro").className=="container-filtro2"){
    document.querySelector("#container-filtro").className="container-filtro"
  }


  btnTipo.className = "";
  btnPokedex.className = "activeButton";
  btnRareza.className = "";
  btnRegion.className = "";
  btnStats.className = "";
});

btnTipo.addEventListener("click", () => { //-----PASAR A LA VISTA TIPO
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon);

  document. querySelector("#welcome").style.display = "none";
  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector(".container-tipo-rareza-region").style.display = "block";
  document.querySelector("#divTiposPokemones").style.display = "grid";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "none";
  document.querySelector("#container-stats").style.display = "none";
  document.querySelector("#egg").style.display="none";
  document.querySelector("#pokedex").style.display = "block";
  document.getElementById("tipos").className="tipos"
  document.getElementById("region").className=""
  document.getElementById("rareza").className=""

  if(document.querySelector("#container-filtro").className=="container-filtro"){
    document.querySelector("#container-filtro").className="container-filtro2"
  }

  btnTipo.className = "activeButton";
  btnPokedex.className = "";
  btnRareza.className = "";
  btnRegion.className = "";
  btnStats.className = "";
  document.documentElement.scrollTop = 0;
});

btnRegion.addEventListener("click", () => { //--------------------PASAR A LA VISTA REGION
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon);

  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector("#divTiposPokemones").style.display = "none";
  document.querySelector("#divRegionPokemon").style.display = "grid";
  document.querySelector("#divRarezaPokemon").style.display = "none";
  document.querySelector("#container-stats").style.display = "none";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".container-tipo-rareza-region").style.display = "block";
  document.querySelector("#egg").style.display="none";
  document.getElementById("region").className="region"
  document.getElementById("tipos").className=""
  document.getElementById("rareza").className=""

  if(document.querySelector("#container-filtro").className=="container-filtro"){
    document.querySelector("#container-filtro").className="container-filtro2"
  }


  btnRegion.className = "activeButton";
  btnPokedex.className = "";
  btnTipo.className = "";
  btnRareza.className = "";
  btnStats.className = "";
  document.documentElement.scrollTop = 0;
});

btnRareza.addEventListener("click", () => { //-------------------------PASAR A LA VISTA RAREZA
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon);

  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "grid";
  document.querySelector("#divTiposPokemones").style.display = "none";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#container-stats").style.display = "none";
  document.querySelector(".container-tipo-rareza-region").style.display = "block";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector("#egg").style.display="none";
  document.getElementById("rareza").className = "rareza";
  document.getElementById("region").className=""
  document.getElementById("tipos").className=""

  if(document.querySelector("#container-filtro").className=="container-filtro"){
    document.querySelector("#container-filtro").className="container-filtro2"
  }

  btnRareza.className = "activeButton";
  btnRegion.className = "";
  btnPokedex.className = "";
  btnTipo.className = "";
  btnStats.className = "";
  document.documentElement.scrollTop = 0;
});

btnStats.addEventListener("click", () => { //----------------PASAR A LA VISTA RAREZA
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon);

  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "none";
  document.querySelector("#divTiposPokemones").style.display = "none";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#pokedex").style.display = "none";
  document.querySelector("#container-stats").style.display = "block";


  btnRareza.className = "";
  btnRegion.className = "";
  btnPokedex.className = "";
  btnTipo.className = "";
  btnStats.className = "activeButton";
  document.documentElement.scrollTop = 0;
});
