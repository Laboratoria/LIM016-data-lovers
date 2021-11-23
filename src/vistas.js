import data from "./data/pokemon/pokemon.js";

import {mostrarPokemon , ordenarTop} from './main.js'


// const botones del navegador

const container = document.querySelector(".pokemon-container");
const arrayPokemon = data.pokemon;


//const btnInicio = document.getElementById("btnInicio");
const btnPokedex = document.getElementById("btnPokedex");
const btnTipo = document.getElementById("btnTipo");
const btnRegion = document.getElementById("btnRegion");
const btnRareza = document.getElementById("btnRareza");
const btnStats = document.getElementById("btnStats");
const btnInicioLogo=document.getElementById('btnInicioLogo')

//-------------PASAR DE INICIO AL POKEDEX
const verPokedex = document.getElementById("verPokedex");
verPokedex.addEventListener("click", () => {
  document.querySelector("#welcome").style.display = "none";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".menu").style.display = "flex";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".container-tipo-rareza-region").style.display = "none"
  document.querySelector(".toggle").classList.toggle("show")
  

  btnPokedex.className = "activeButton";
  //btnInicio.className = "";
  btnRareza.className = "";
  btnRegion.className = "";
  btnTipo.className = "";
  document.getElementById("btnRanking").className = "";

  document.documentElement.scrollTop = 0;
});


// BOTON LOGO-POKEDEX PARA VOLVER AL INICIO

btnInicioLogo.addEventListener('click',()=>{
  document.querySelector("#welcome").style.display = "block";
  document.querySelector("#pokedex").style.display = "none";
  document.querySelector(".menu").style.display = "none";

  //btnInicio.className = "activeButton";
  window.location.reload();
  document.documentElement.scrollTop = 0;
})



//--------BOTON PARA VOLVER AL INICIO

// btnInicio.addEventListener("click", () => {
//   document.querySelector("#welcome").style.display = "block";
//   document.querySelector("#pokedex").style.display = "none";
//   document.querySelector(".menu").style.display = "none";
//   btnInicio.className = "";
//   window.location.reload();
//   document.documentElement.scrollTop = 0;
// });


//----------------PASAR A LA VISTA DEL POKEDEX
btnPokedex.addEventListener("click", () => {
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon, arrayPokemon);

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
  document.querySelector(".menu").classList.toggle("nav-menu_visible")
  document.querySelector(".titulo-ranking").style.display="none";
  document.querySelector(".container-botones-filtro").style.display="flex";
  document.querySelector("#parrafo").style.display="block";
  
  document.getElementById('cp').value=""
  document.getElementById('orden').value=""
  document.getElementById('egg').value=""

  if(document.querySelector("#container-filtro").className=="container-filtro2"){
    document.querySelector("#container-filtro").className="container-filtro"
  }


  btnTipo.className = "";
  btnPokedex.className = "activeButton";
  document.getElementById("btnRanking").className = "";

  btnRareza.className = "";
  btnRegion.className = "";
  btnStats.className = "";
});


//-----PASAR A LA VISTA TIPO
btnTipo.addEventListener("click", () => {
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon , arrayPokemon);

  document. querySelector("#welcome").style.display = "none";
  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector(".container-tipo-rareza-region").style.display = "block";
  document.querySelector("#divTiposPokemones").style.display = "grid";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "none";
  document.querySelector("#container-stats").style.display = "none";
  document.querySelector("#egg").style.display="none";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".menu").classList.toggle("nav-menu_visible")
  document.querySelector(".titulo-ranking").style.display="none";
  document.querySelector(".container-botones-filtro").style.display="flex";
  document.querySelector("#parrafo").style.display="block";
  document.getElementById("tipos").className="tipos"
  document.getElementById("region").className=""
  document.getElementById("rareza").className=""


  document.getElementById('cp').value=""
  document.getElementById('orden').value=""
  document.getElementById('tipos').value=""

  if(document.querySelector("#container-filtro").className=="container-filtro"){
    document.querySelector("#container-filtro").className="container-filtro2"
  }

  btnTipo.className = "activeButton";
  btnPokedex.className = "";
  btnRareza.className = "";
  btnRegion.className = "";
  btnStats.className = "";
  document.getElementById("btnRanking").className = "";
  document.documentElement.scrollTop = 0;
});


//--------------------PASAR A LA VISTA REGION
btnRegion.addEventListener("click", () => {

  container.innerHTML = "";
  mostrarPokemon(arrayPokemon, arrayPokemon);

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
  document.querySelector(".menu").classList.toggle("nav-menu_visible")
  document.querySelector(".titulo-ranking").style.display="none";
  document.querySelector(".container-botones-filtro").style.display="flex";
  document.querySelector("#parrafo").style.display="block";
  

document.getElementById('cp').value=""
document.getElementById('orden').value=""
document.getElementById('region').value=""

  if(document.querySelector("#container-filtro").className=="container-filtro"){
    document.querySelector("#container-filtro").className="container-filtro2"
  }


  btnRegion.className = "activeButton";
  btnPokedex.className = "";
  btnTipo.className = "";
  btnRareza.className = "";
  btnStats.className = "";
  document.getElementById("btnRanking").className = "";
  document.documentElement.scrollTop = 0;
});

//-------------------------PASAR A LA VISTA RAREZA
btnRareza.addEventListener("click", () => {
  container.innerHTML = "";
  mostrarPokemon(arrayPokemon, arrayPokemon);

  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "grid";
  document.querySelector("#divTiposPokemones").style.display = "none";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#container-stats").style.display = "none";
  document.querySelector(".container-tipo-rareza-region").style.display = "block";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector("#egg").style.display="none";
  document.querySelector(".titulo-ranking").style.display="none";
  document.querySelector(".container-botones-filtro").style.display="flex";
  document.querySelector("#parrafo").style.display="block";
  document.getElementById("rareza").className = "rareza";
  document.getElementById("region").className=""
  document.getElementById("tipos").className=""
  document.querySelector(".menu").classList.toggle("nav-menu_visible")
  

  document.getElementById('cp').value=""
  document.getElementById('orden').value=""
  document.getElementById('rareza').value=""


  if(document.querySelector("#container-filtro").className=="container-filtro"){
    document.querySelector("#container-filtro").className="container-filtro2"
  }

  btnRareza.className = "activeButton";
  btnRegion.className = "";
  btnPokedex.className = "";
  btnTipo.className = "";
  btnStats.className = "";
  document.getElementById("btnRanking").className = "";
  document.documentElement.scrollTop = 0;
});



//RANKING
document.getElementById("btnRanking").addEventListener('click',()=>{
  container.innerHTML = "";
  ordenarTop(arrayPokemon, arrayPokemon);

  document.querySelector(".titulo-ranking").style.display="flex";
  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "none";
  document.querySelector("#divTiposPokemones").style.display = "none";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#container-stats").style.display = "none";
  document.querySelector(".container-tipo-rareza-region").style.display = "none";
  document.querySelector("#pokedex").style.display = "block";
  document.querySelector(".menu").classList.toggle("nav-menu_visible")

  document.querySelector("#egg").style.display="none";
  document.querySelector(".container-botones-filtro").style.display="none";
  document.querySelector("#parrafo").style.display="none";
  document.getElementById("region").className=""
  document.getElementById("tipos").className=""
  document.getElementById("rareza").className=""

  document.getElementById('cp').value=""
  document.getElementById('orden').value=""
  document.getElementById('rareza').value=""


  if(document.querySelector("#container-filtro").className=="container-filtro"){
    document.querySelector("#container-filtro").className="container-filtro2"
  }

  document.getElementById("btnRanking").className = "activeButton";
  btnRegion.className = "";
  btnPokedex.className = "";
  btnTipo.className = "";
  btnStats.className = "";
  document.documentElement.scrollTop = 0;

})


//----------------PASAR A LA VISTA ESTADISTICAS
btnStats.addEventListener("click", () => {


  document.querySelector(".container-buscar").style.display = "none";
  document.querySelector("#divRarezaPokemon").style.display = "none";
  document.querySelector("#divTiposPokemones").style.display = "none";
  document.querySelector("#divRegionPokemon").style.display = "none";
  document.querySelector("#pokedex").style.display = "none";
  document.querySelector("#container-stats").style.display = "block";
  document.querySelector(".menu").classList.toggle("nav-menu_visible")

  document.getElementById("btnRanking").className = "";
  btnRareza.className = "";
  btnRegion.className = "";
  btnPokedex.className = "";
  btnTipo.className = "";
  btnStats.className = "activeButton";
  document.documentElement.scrollTop = 0;
});
