// IMPORTAR DATA DE POKEMON.JS
import data from './data/pokemon/pokemon.js';
import { buscarPokemon, mostraPokemon, masInfoPokemon } from './data.js';

// DECLARACION DE VARIABLES
const input=document.querySelector(".buscarPokemon");
const container=document.querySelector(".container-pokemons");

const fragment=document.createDocumentFragment();
const template=document.getElementById("templateCard");

const up=document.querySelector(".button-up");


// FUNCIÓN PARA LIMPIAR LAS TARJETAS
function limpiarCards(){ 
    let nodosEliminar=document.querySelectorAll(".card");
    nodosEliminar.forEach(nodo => nodo.remove());
}

// FUNCION PARA LIMPIAR EL MODAL
function limpiarModal(){
    document.querySelector(".nomPokemonMod").textContent="";
    document.querySelector(".tipoPokemonMod").textContent="TIPO: ";
    document.querySelector(".cpPokemonMod").textContent="CP: ";
    document.querySelector(".peso").textContent="";
    document.querySelector(".altura").textContent="";
    document.querySelector(".huevos").textContent="";
    document.querySelector(".debilidad").textContent="";

    let menNoTieneEvo = document.querySelectorAll(".cont-evoluciones .mensaje");
    menNoTieneEvo.forEach(nodo=>nodo.remove());

    let nombreEvolucion = document.querySelectorAll(".cont-evoluciones .nomEvolucion");
    nombreEvolucion.forEach(nodo=>nodo.remove());

    let caramelosEvolucion = document.querySelectorAll(".cont-evoluciones .caramelosEvolucion");
    caramelosEvolucion.forEach(nodo=>nodo.remove());

    let imagenCaramelos = document.querySelectorAll(".cont-evoluciones .imgCaramelos");
    imagenCaramelos.forEach(nodo=>nodo.remove());
    
    let imagenEvolucion = document.querySelectorAll(".cont-evoluciones .imagenEvolucion");
    imagenEvolucion.forEach(nodo=>nodo.remove());

    document.querySelector(".contAmbasEvoluciones .contSegEvolucion").style.display="block";
}

// CUANDO CARGA LA PAGINA
window.onload = () => {
    mostraPokemon(data.pokemon, fragment, template, container);
}

// EVENTO AL PRESIONAR UNA TECLA EN EL INPUT BUSCADOR
input.addEventListener("keyup",(e)=>{
        limpiarCards();
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
        container.style.display="flex";
        containerEstadistica.style.display="none";
        // ALTERAMOS LAS CLASES DE NUESTROS ENLACES
        const padre = e.target.parentNode;
        padre.children[1].classList.toggle('animation');
        padre.parentNode.children[1].classList.toggle('animation');
    });

});

// FILTRAR DATA POR REGION
const region = document.querySelectorAll('.region');
region.forEach(e=>{    
    
    e.addEventListener("click", e => {
        limpiarCards();
        container.style.display="flex";
        containerEstadistica.style.display="none";
        let regionOption = e.target.getAttribute("region");
        let pokemons =  data.pokemon;
        let pokemonsFilter = pokemons.filter(pokemon => pokemon.generation.name == regionOption);
        // alert(e.target.getAttribute('region'));
        // console.log(pokemonsFilter);
        buscarPokemon(pokemonsFilter,input.value,fragment, template, container);
    });
});

// FILTRAR DATA POR ELEMENTO
const elemento = document.querySelectorAll('.elemento');
elemento.forEach(e=>{    
    
    e.addEventListener("click", e => {
        limpiarCards();
        container.style.display="flex";
        containerEstadistica.style.display="none";
        let elementoOption = e.target.getAttribute("elemento");
        let pokemons =  data.pokemon;
        let pokemonsFilter = pokemons.filter(pokemon => pokemon.type[0] == elementoOption || pokemon.type[1] == elementoOption);
        //buscar con cual comparar
        // alert(e.target.getAttribute('elemento'));
        // console.log(pokemonsFilter);
        buscarPokemon(pokemonsFilter,input.value,fragment, template, container);
    });
});

// ORDENAR DATA
const ordenar = document.querySelectorAll('.ordenar');

ordenar.forEach(e=>{    
    
    e.addEventListener("click", e => {
        limpiarCards();
        container.style.display="flex";
        containerEstadistica.style.display="none";
        let ordenarOption = e.target.getAttribute("ordenar");
        let pokemonsFilter =  data.pokemon;

        // ORDENAR ALFABETICAMENTE A - Z
        if (ordenarOption == "az") {
            pokemonsFilter = pokemonsFilter.sort(function (a, b) {
                if (a.name > b.name) { return 1; }
                if (a.name < b.name) { return -1; }
                return 0;
            });  
        }

        // ORDENAR ALFABETICAMENTE Z - A
        if (ordenarOption == "za") {
            pokemonsFilter = pokemonsFilter.sort(function (a, b) {
                if (a.name > b.name) { return -1; }
                if (a.name < b.name) { return 1; }
                return 0;
            });  
        } 
        
        // ORDENAR POR PUNTOS DE COMBATE ASCENDENTE
        if (ordenarOption == "pc-as") {
            pokemonsFilter = pokemonsFilter.sort(function (a, b) {
                return a.stats["max-cp"] - b.stats["max-cp"];
            });  
        }  
        
        // ORDENAR POR PUNTOS DE COMBATE DESCENDENTE
        if (ordenarOption == "pc-des") {
            pokemonsFilter = pokemonsFilter.sort(function (a, b) {
                return b.stats["max-cp"] - a.stats["max-cp"];
            });  
        }       
        // alert(e.target.getAttribute('region'));
        // console.log(pokemonsFilter);
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

// MODAL
const containerModal=document.getElementById("containerModal");
const btnModal=document.getElementById("close");

// ABRE MODAL CUANDO LE HACES CLICK EN UNA IMAGEN DE POKEMON
container.addEventListener("click", e =>{
    if(e.target.classList.contains("imgPokemon")){
        limpiarModal();
        masInfoPokemon(data.pokemon, e.target.id, containerModal);
        containerModal.classList.add("show");
    }
});

// CIERRA MODAL
btnModal.addEventListener("click", (e)=>{
    containerModal.classList.remove("show");
});

// ESTADÍSTICA DE LOS POKEMONES
const ctxRegion=document.getElementById("chartRegion").getContext("2d");
const ctxElemento=document.getElementById("chartElemento").getContext("2d");
const ctxHuevos=document.getElementById("chartHuevos").getContext("2d");
const ctxRecorrido=document.getElementById("chartRecorrido").getContext("2d");
const ctxDebilidad=document.getElementById("chartDebilidad").getContext("2d");


// CANTIDAD DE KANTO
const filterKanto=data.pokemon.filter(function(element){
    return element.generation.name=="kanto";
});

let cantidadKanto=filterKanto.length;
// console.log(filterKanto);
// console.log(cantidadKanto);

// CANTIDAD DE JOHTO
const filterJohto=data.pokemon.filter(function(element){
    return element.generation.name=="johto";
});

let cantidadJohto=filterJohto.length;
// console.log(filterJohto);
// console.log(cantidadJohto);

// GRAFICO DE PIE DE CANTIDAD DE POKEMONES POR REGION
let chartRegion= new Chart(ctxRegion,{
    type:'pie',
    data: {
        labels:['Kanto', 'Johto'],
        datasets:[{
            label:'Num datos',
            data:[cantidadKanto, cantidadJohto],
            backgroundColor:['#63CAA7', '#26798E'],
        }]
    },
});


// CANTIDAD DE POKEMONES DE AGUA
const filterAgua=data.pokemon.filter(function(element){
    return element.type.includes("water");
});

let cantidadAgua=filterAgua.length;

// CANTIDAD DE POKEMONES DE FUEGO
const filterFuego=data.pokemon.filter(function(element){
    return element.type.includes("fire");
});

let cantidadFuego=filterFuego.length;

// CANTIDAD DE POKEMONES DE PLANTA
const filterPlanta=data.pokemon.filter(function(element){
    return element.type.includes("grass");
});

let cantidadPlanta=filterPlanta.length;

// CANTIDAD DE POKEMONES DE TIERRA
const filterTierra=data.pokemon.filter(function(element){
    return element.type.includes("ground");
});

let cantidadTierra=filterTierra.length;

// CANTIDAD DE POKEMONES DE ROCA
const filterRoca=data.pokemon.filter(function(element){
    return element.type.includes("rock");
});

let cantidadRoca=filterRoca.length;

// CANTIDAD DE POKEMONES DE HIELO
const filterHielo=data.pokemon.filter(function(element){
    return element.type.includes("ice");
});

let cantidadHielo=filterHielo.length;

// CANTIDAD DE POKEMONES DE ELECTRICO
const filterElectrico=data.pokemon.filter(function(element){
    return element.type.includes("electric");
});

let cantidadElectrico=filterElectrico.length;

// CANTIDAD DE POKEMONES DE DRAGON
const filterDragon=data.pokemon.filter(function(element){
    return element.type.includes("dragon");
});

let cantidadDragon=filterDragon.length;

// CANTIDAD DE POKEMONES DE FANTASMA
const filterFantasma=data.pokemon.filter(function(element){
    return element.type.includes("ghost");
});

let cantidadFantasma=filterFantasma.length;

// CANTIDAD DE POKEMONES DE PSIQUICO
const filterPsiquico=data.pokemon.filter(function(element){
    return element.type.includes("psychic");
});

let cantidadPsiquico=filterPsiquico.length;

// CANTIDAD DE POKEMONES DE NORMAL
const filterNormal=data.pokemon.filter(function(element){
    return element.type.includes("normal");
});

let cantidadNormal=filterNormal.length;

// CANTIDAD DE POKEMONES DE LUCHA
const filterLucha=data.pokemon.filter(function(element){
    return element.type.includes("fighting");
});

let cantidadLucha=filterLucha.length;

// CANTIDAD DE POKEMONES DE VENENO
const filterVeneno=data.pokemon.filter(function(element){
    return element.type.includes("poison");
});

let cantidadVeneno=filterVeneno.length;

// CANTIDAD DE POKEMONES DE BICHO
const filterBicho=data.pokemon.filter(function(element){
    return element.type.includes("bug");
});

let cantidadBicho=filterBicho.length;

// CANTIDAD DE POKEMONES DE VOLADOR
const filterVolador=data.pokemon.filter(function(element){
    return element.type.includes("flying");
});

let cantidadVolador=filterVolador.length;

// GRAFICO DE BARRAS DE CANTIDAD DE POKEMONES POR ELEMENTO
let chartElemento= new Chart(ctxElemento,{
    type:'bar',
    data: {
        labels:[ 'Agua', 'Fuego', 'Hierba', 'Tierra', 'Roca', 'Hielo', 'Electrico', 'Dragon', 'Fantasma', 'Psiquico', 'Normal', 'Lucha', 'Veneno', 'Bicho', 'Volador'],
        datasets:[{
            label:'Cantidad de pokemones',
            data:[cantidadAgua, cantidadFuego, cantidadPlanta, cantidadTierra, cantidadRoca, cantidadHielo, cantidadElectrico, cantidadDragon, cantidadFantasma, cantidadPsiquico, cantidadNormal, cantidadLucha, cantidadVeneno, cantidadBicho, cantidadVolador],
            backgroundColor:['#56A0E0', '#F9A251', '#5DC05D', '#CABC89', '#D38F61', '#FFFFFF', '#F4DD5D', '#0C70C1', '#596BB3', '#F67D79', '#959BA2', '#E14350', '#ED96E5', '#A2C52E', '#9CB4E6'],
        }]
    },
});

// CANTIDAD DE HUEVOS DE 2KM
const filter2Km=data.pokemon.filter(function(element){
    return element.egg=="2 km";
});

let cantidad2Km=filter2Km.length;
// console.log(filter2Km);
// console.log(cantidad2Km);

// CANTIDAD DE HUEVOS DE 5KM
const filter5Km=data.pokemon.filter(function(element){
    return element.egg=="5 km";
});

let cantidad5Km=filter5Km.length;
// console.log(filter5Km);
// console.log(cantidad5Km);

// CANTIDAD DE HUEVOS DE 10KM
const filter10Km=data.pokemon.filter(function(element){
    return element.egg=="10 km";
});

let cantidad10Km=filter10Km.length;
// console.log(filter10Km);
// console.log(cantidad10Km);

// GRAFICO DE PIE DE CANTIDAD DE POKEMONES POR HUEVOS
let chartHuevos= new Chart(ctxHuevos,{
    type:'doughnut',
    data: {
        labels:['Huevos de 2Km', 'Huevos de 5Km', 'Huevos de 10Km'],
        datasets:[{
            label:'Cantidad de pokemones',
            data:[cantidad2Km, cantidad5Km, cantidad10Km],
            backgroundColor:['#4461A8', '#F5A997', '#F0E7CF'],
        }]
    },
});

// CANTIDAD DE POKEMONES QUE RECORREN 1KM
const filterRecorrido1Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="1";
});

let cantidadRecorrido1Km=filterRecorrido1Km.length;

// CANTIDAD DE POKEMONES QUE RECORREN 3KM
const filterRecorrido3Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="3";
});

let cantidadRecorrido3Km=filterRecorrido3Km.length;

// CANTIDAD DE POKEMONES QUE RECORREN 5KM
const filterRecorrido5Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="5";
});

let cantidadRecorrido5Km=filterRecorrido5Km.length;

// CANTIDAD DE POKEMONES QUE RECORREN 20KM
const filterRecorrido20Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="20";
});

let cantidadRecorrido20Km=filterRecorrido20Km.length;
 
// GRAFICO DE PIE DE CANTIDAD DE POKEMONES POR HUEVOS
let chartRecorrido= new Chart(ctxRecorrido,{
    type:'polarArea',
    data: {
        labels:['Recorrido de 1Km', 'Recorrido de 3Km', 'Recorrido de 5Km', 'Recorrido de 20Km'],
        datasets:[{
            label:'Cantidad de pokemones',
            data:[cantidadRecorrido1Km, cantidadRecorrido3Km, cantidadRecorrido5Km, cantidadRecorrido20Km],
            backgroundColor:['#31B189', '#7ACE67', '#FFC872', '#F4AE3F'],
        }]
    },
}); 












// CANTIDAD DE POKEMONES DE AGUA
const filterDebilidadAgua=data.pokemon.filter(function(element){
    return element.weaknesses.includes("water");
});

let cantidadDebilidadAgua=filterDebilidadAgua.length;

// CANTIDAD DE POKEMONES DE FUEGO
const filterDebilidadFuego=data.pokemon.filter(function(element){
    return element.weaknesses.includes("fire");
});

let cantidadDebilidadFuego=filterDebilidadFuego.length;

// CANTIDAD DE POKEMONES DE PLANTA
const filterDebilidadPlanta=data.pokemon.filter(function(element){
    return element.weaknesses.includes("grass");
});

let cantidadDebilidadPlanta=filterDebilidadPlanta.length;

// CANTIDAD DE POKEMONES DE TIERRA
const filterDebilidadTierra=data.pokemon.filter(function(element){
    return element.weaknesses.includes("ground");
});

let cantidadDebilidadTierra=filterDebilidadTierra.length;

// CANTIDAD DE POKEMONES DE ROCA
const filterDebilidadRoca=data.pokemon.filter(function(element){
    return element.weaknesses.includes("rock");
});

let cantidadDebilidadRoca=filterDebilidadRoca.length;

// CANTIDAD DE POKEMONES DE HIELO
const filterDebilidadHielo=data.pokemon.filter(function(element){
    return element.weaknesses.includes("ice");
});

let cantidadDebilidadHielo=filterDebilidadHielo.length;

// CANTIDAD DE POKEMONES DE ELECTRICO
const filterDebilidadElectrico=data.pokemon.filter(function(element){
    return element.weaknesses.includes("electric");
});

let cantidadDebilidadElectrico=filterDebilidadElectrico.length;

// CANTIDAD DE POKEMONES DE FANTASMA
const filterDebilidadFantasma=data.pokemon.filter(function(element){
    return element.weaknesses.includes("ghost");
});

let cantidadDebilidadFantasma=filterDebilidadFantasma.length;

// CANTIDAD DE POKEMONES DE PSIQUICO
const filterDebilidadPsiquico=data.pokemon.filter(function(element){
    return element.weaknesses.includes("psychic");
});

let cantidadDebilidadPsiquico=filterDebilidadPsiquico.length;

// CANTIDAD DE POKEMONES DE LUCHA
const filterDebilidadLucha=data.pokemon.filter(function(element){
    return element.weaknesses.includes("fighting");
});

let cantidadDebilidadLucha=filterDebilidadLucha.length;

// CANTIDAD DE POKEMONES DE VENENO
const filterDebilidadVeneno=data.pokemon.filter(function(element){
    return element.weaknesses.includes("poison");
});

let cantidadDebilidadVeneno=filterDebilidadVeneno.length;

// CANTIDAD DE POKEMONES DE BICHO
const filterDebilidadBicho=data.pokemon.filter(function(element){
    return element.weaknesses.includes("bug");
});

let cantidadDebilidadBicho=filterDebilidadBicho.length;

// CANTIDAD DE POKEMONES DE VOLADOR
const filterDebilidadVolador=data.pokemon.filter(function(element){
    return element.weaknesses.includes("flying");
});

let cantidadDebilidadVolador=filterDebilidadVolador.length;

// GRAFICO DE BARRAS DE CANTIDAD DE POKEMONES POR ELEMENTO
let chartDebilidad= new Chart(ctxDebilidad,{
    type:'polarArea',
    data: {
        labels:[ 'Agua', 'Fuego', 'Hierba', 'Tierra', 'Roca', 'Hielo', 'Electrico', 'Fantasma', 'Psiquico', 'Lucha', 'Veneno', 'Bicho', 'Volador'],
        datasets:[{
            label:'Cantidad de pokemones',
            data:[cantidadDebilidadAgua, cantidadDebilidadFuego, cantidadDebilidadPlanta, cantidadDebilidadTierra, cantidadDebilidadRoca, cantidadDebilidadHielo, cantidadDebilidadElectrico, cantidadDebilidadFantasma, cantidadDebilidadPsiquico, cantidadDebilidadLucha, cantidadDebilidadVeneno, cantidadDebilidadBicho, cantidadDebilidadVolador],
            backgroundColor:['#56A0E0', '#F9A251', '#5DC05D', '#CABC89', '#D38F61', '#FFFFFF', '#F4DD5D', '#596BB3', '#F67D79', '#E14350', '#ED96E5', '#A2C52E', '#9CB4E6'],
        }]
    },
});


const contenidoRegion=document.getElementById("contRegiones");
const contenidoElemento=document.getElementById("contElementos");
const contenidoHuevos=document.getElementById("contHuevos");
const contenidoRecorrido=document.getElementById("contRecorrido");
const contenidoDebilidad=document.getElementById("contDebilidades");
const containerEstadistica=document.querySelector(".containerEstadistica");



// DESPLEGABLE ESTADISTICA
const estadistica = document.querySelectorAll('.estadistica');

estadistica.forEach(e=>{    
    
    e.addEventListener("click", e => {
            
            let estadisticaOption = e.target.getAttribute("estadistica");

        // ESTADISTICA TODO
        if (estadisticaOption == "todo") {
            container.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="block";
            contenidoElemento.style.display="block";
            contenidoHuevos.style.display="block";
            contenidoRecorrido.style.display="block";
            contenidoDebilidad.style.display="block";
        }

        // ESTADISTICA POR REGION
        if (estadisticaOption == "por-región") {
            container.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="block";
            contenidoElemento.style.display="none";
            contenidoHuevos.style.display="none";
            contenidoRecorrido.style.display="none";
            contenidoDebilidad.style.display="none";
        } 
        
        // ESTADISTICA POR ELEMENTO
        if (estadisticaOption == "por-elemento") {
            container.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="none";
            contenidoElemento.style.display="block";
            contenidoHuevos.style.display="none";
            contenidoRecorrido.style.display="none";
            contenidoDebilidad.style.display="none";
        }  

        // ESTADISTICA POR HUEVO
        if (estadisticaOption == "por-huevos") {
            container.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="none";
            contenidoElemento.style.display="none";
            contenidoHuevos.style.display="block";
            contenidoRecorrido.style.display="none";
            contenidoDebilidad.style.display="none";
        }  

        // ESTADISTICA POR RECORRIDO
        if (estadisticaOption == "por-recorrido") {
            container.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="none";
            contenidoElemento.style.display="none";
            contenidoHuevos.style.display="none";
            contenidoRecorrido.style.display="block";
            contenidoDebilidad.style.display="none";
        }  

        // ESTADISTICA POR DEBILIDAD
        if (estadisticaOption == "por-debilidad") {
            container.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="none";
            contenidoElemento.style.display="none";
            contenidoHuevos.style.display="none";
            contenidoRecorrido.style.display="none";
            contenidoDebilidad.style.display="block";
        }  
        
        
        
    });
});