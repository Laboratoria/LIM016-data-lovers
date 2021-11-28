// IMPORTAR DATA DE POKEMON.JS
import data from './data/pokemon/pokemon.js';
import { buscarPokemon, filtrarRegion, filtrarElemento, ordenarPokemons, obtenerPokemon} from './data1.js';

// CUANDO CARGA LA PAGINA
window.onload = () => {
    llenarCard(data.pokemon);
}

// FUNCIÓN PARA LIMPIAR LOS CARDS
function limpiarCards(){ 
    let nodosEliminar=document.querySelectorAll(".card");
    nodosEliminar.forEach(nodo => nodo.remove());
}

// LLENAR CARDS
function llenarCard(dataFiltrada) {
    const templateCard=document.getElementById("templateCard");
    const fragment=document.createDocumentFragment();
    dataFiltrada.forEach(function(element) {
        templateCard.content.querySelector(".numPokemon").textContent=element.num;
        templateCard.content.querySelector(".nomPokemon").textContent=element.name;
        templateCard.content.querySelector(".imgPokemon").src=element.img;
        templateCard.content.querySelector(".cpPokemon").textContent="PC: "+element.stats['max-cp'];
        templateCard.content.querySelector(".nomRegion").textContent=element.generation.name;
        templateCard.content.querySelector(".imgPokemon").id=element.num;
        const clone=templateCard.content.cloneNode(true);
        fragment.appendChild(clone);
    });
    containerPokemons.appendChild(fragment);   
}

// BUSCAR POKEMON
const inputBuscador=document.querySelector(".buscarPokemon");
const containerPokemons=document.querySelector(".container-pokemons");

// EVENTO AL PRESIONAR UNA TECLA EN EL INPUT BUSCADOR
inputBuscador.addEventListener("keyup",(e)=>{
    limpiarCards();
    let valorInput = e.target.value;
    llenarCard(buscarPokemon(data.pokemon,valorInput));
});

// EVENTO AL REALIZAR CLICK EN EL MENU HAMBURGUESA
const iconoHamburguesa = document.querySelector(".menuHamburguesa");
const menu = document.querySelector(".cont-menu");
iconoHamburguesa.addEventListener("click", (e)=>{
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } 
    else {
        menu.style.display = 'block';
    }    
});

// FILTROS
const opcion = document.querySelectorAll('.opcion');

// PERMITE RECORRER CADA UNA DE NUESTRAS OPCIONES
opcion.forEach(e => {

    // AÑADIMOS UN EVENTO A CADA ELEMENTO SELECCIONADO
    e.addEventListener('click', function(e){
        containerPokemons.style.display="flex";
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
        containerPokemons.style.display="flex";
        containerEstadistica.style.display="none";
        let opcionRegion = e.target.getAttribute("region");
        llenarCard(filtrarRegion(data.pokemon, opcionRegion));
    });
});

// FILTRAR DATA POR TIPO
const tipo = document.querySelectorAll('.tipo');
tipo.forEach(e=>{    
    e.addEventListener("click", e => {
        limpiarCards();
        containerPokemons.style.display="flex";
        containerEstadistica.style.display="none";
        let opcionTipo = e.target.getAttribute("tipo");
        llenarCard(filtrarElemento(data.pokemon, opcionTipo));
    });
});

// ORDENAR DATA
const ordenar = document.querySelectorAll('.ordenar');

ordenar.forEach(e=>{    
    
    e.addEventListener("click", e => {
        limpiarCards();
        containerPokemons.style.display="flex";
        containerEstadistica.style.display="none";
        let opcionOrdenar = e.target.getAttribute("ordenar");
        llenarCard(ordenarPokemons(data.pokemon, opcionOrdenar));
    });
});

// BOTON SUBIR AL INICIO DE PAGINA
const up=document.querySelector(".button-up");

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
const imgEvolucion1=document.querySelector(".imgEvolucion1");
const nombreEvolucion1=document.querySelector(".nombreEvolucion1");
const containerCaramelos1=document.querySelector(".contCaramelos1");
const cantCaramelos1=document.querySelector(".caramelosEvolucion1");
const containerSeguEvolucion=document.querySelector(".contSegEvolucion");
const imagenEvolucion2=document.querySelector(".imgEvolucion2 .imagenEvolucion2");
const nomNextEvolucion=document.querySelector(".nomEvolucion2");
const caramelosNextEvolucion=document.querySelector(".caramelosEvolucion2");

// FUNCION PARA LIMPIAR EL MODAL
function limpiarModal(){
    let menNoTieneEvo = document.querySelectorAll(".cont-evoluciones .mensajeEvolucion");
    menNoTieneEvo.forEach(nodo=>nodo.remove());

    let imagenEvolucion1 = document.querySelectorAll(".cont-evoluciones .imagenEvolucion1");
    imagenEvolucion1.forEach(nodo=>nodo.remove());

    let nombreEvolucion = document.querySelectorAll(".cont-evoluciones .nomEvolucion1");
    nombreEvolucion.forEach(nodo=>nodo.remove());
}


// LLENAR MODAL
function llenarModal(pokemons, pokemonSeleccionado) {
        containerModal.querySelector(".nomPokemonMod").textContent=pokemonSeleccionado.name.toUpperCase();
        containerModal.querySelector(".tipoPokemonMod").textContent="TIPO: "+pokemonSeleccionado.type;
        containerModal.querySelector(".cpPokemonMod").textContent="PC: "+pokemonSeleccionado.stats["max-cp"];
        containerModal.querySelector(".peso").textContent=pokemonSeleccionado.size.weight;
        containerModal.querySelector(".altura").textContent=pokemonSeleccionado.size.height;
        containerModal.querySelector(".huevos").textContent=pokemonSeleccionado.egg;
        containerModal.querySelector(".debilidad").textContent=pokemonSeleccionado.weaknesses;
        
        // SI NO TIENE PRIMERA EVOLUCION POSTERIOR
        if(pokemonSeleccionado.evolution["next-evolution"]==undefined){
            let mensajeEvolucion = document.createElement("p");
            mensajeEvolucion.className ="mensajeEvolucion";
            mensajeEvolucion.textContent="Este pokemon no cuenta con evoluciones posteriores.";
            containerModal.querySelector(".contPriEvolucion").appendChild(mensajeEvolucion);
            imgEvolucion1.style.display="none";
            nombreEvolucion1.style.display="none";
            containerCaramelos1.style.display="none";
            containerSeguEvolucion.style.display="none";
        }

        // SI TIENE PRIMERA EVOLUCION POSTERIOR
        else {
            imgEvolucion1.style.display="flex";
            nombreEvolucion1.style.display="flex";
            containerCaramelos1.style.display="flex";
            containerSeguEvolucion.style.display="none";
            let cantEvoluciones=pokemonSeleccionado.evolution["next-evolution"].length; // CANTIDAD DE EVOLUCIONES EN LA PRIMERA EVOL
            if(cantEvoluciones>5){cantEvoluciones=5} // SOLO APAREZCAN COMO MAXIMO 5 EVOLUCIONES
            for(let j=0; j<cantEvoluciones; j++){
                let numEvolucion1=pokemonSeleccionado.evolution["next-evolution"][j].num;
                // IMAGEN DE LA PRIMERA O PRIMERAS EVOLUCIONES
                const imagenEvolucion1=document.createElement("img");
                imagenEvolucion1.className="imagenEvolucion1";
                (parseInt(numEvolucion1)<=251) ? imagenEvolucion1.src=pokemons.find(e=>parseInt(e.num)==parseInt(numEvolucion1)).img : imagenEvolucion1.src="https://canalpokemon.files.wordpress.com/2008/11/kawax-pokeball-3097.png?w=256&h=256";
                containerModal.querySelector(".imgEvolucion1").appendChild(imagenEvolucion1);
                // NOMBRE DE LA PRIMERA O PRIMERAS EVOLUCIONES
                const nomEvolucion1 = document.createElement("p");
                nomEvolucion1.className ="nomEvolucion1";
                nomEvolucion1.textContent=pokemonSeleccionado.evolution["next-evolution"][j].name;
                containerModal.querySelector(".nombreEvolucion1").appendChild(nomEvolucion1);            
            }
                // CANTIDAD DE CARAMELOS DE LA EVOLUCION
                cantCaramelos1.textContent=pokemonSeleccionado.evolution["next-evolution"][0]["candy-cost"];
            
            // SI TIENE SEGUNDA EVOLUCION POSTERIOR
            if(pokemonSeleccionado.evolution["next-evolution"][0]["next-evolution"]!=undefined){
                containerSeguEvolucion.style.display="flex";
                // IMAGEN DE LA SEGUNDA EVOLUCION
                let numEvolucion2=pokemonSeleccionado.evolution["next-evolution"][0]["next-evolution"][0].num;
                (parseInt(numEvolucion2)<=251) ?  imagenEvolucion2.src=pokemons.find(e=>parseInt(e.num)==parseInt(numEvolucion2)).img : imagenEvolucion2.src="https://canalpokemon.files.wordpress.com/2008/11/kawax-pokeball-3097.png?w=256&h=256";
                // NOMBRE DE LA SEGUNDA EVOLUCION
                nomNextEvolucion.textContent=pokemonSeleccionado.evolution["next-evolution"][0]["next-evolution"][0].name;
                // CARAMELOS DE LA SEGUNDA EVOLUCION
                caramelosNextEvolucion.textContent=pokemonSeleccionado.evolution["next-evolution"][0]["next-evolution"][0]["candy-cost"];           
            }
        }
}

// ABRE MODAL CUANDO LE HACES CLICK EN UNA IMAGEN DE POKEMON
containerPokemons.addEventListener("click", e =>{
    if(e.target.classList.contains("imgPokemon")){
        limpiarModal();
        llenarModal(data.pokemon,obtenerPokemon(data.pokemon, e.target.id));
        //masInfoPokemon(data.pokemon, e.target.id, containerModal);
        containerModal.classList.add("show");
    }
});

// CIERRA MODAL
btnModal.addEventListener("click", ()=>{
    containerModal.classList.remove("show");
});

// ESTADÍSTICA DE LOS POKEMONES
const ctxRegion=document.getElementById("chartRegion").getContext("2d");
const ctxElemento=document.getElementById("chartElemento").getContext("2d");
const ctxHuevos=document.getElementById("chartHuevos").getContext("2d");
const ctxRecorrido=document.getElementById("chartRecorrido").getContext("2d");

// CANTIDAD DE POKEMONES DE KANTO
const filterKanto=data.pokemon.filter(function(element){
    return element.generation.name=="kanto";
});

let cantidadKanto=filterKanto.length;

// CANTIDAD DE POKEMONES DE JOHTO
const filterJohto=data.pokemon.filter(function(element){
    return element.generation.name=="johto";
});

let cantidadJohto=filterJohto.length;

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

// CANTIDAD DE POKEMONES DE TIPO AGUA
const filterAgua=data.pokemon.filter(function(element){
    return element.type.includes("water");
});

let cantidadAgua=filterAgua.length;

// CANTIDAD DE POKEMONES DE TIPO FUEGO
const filterFuego=data.pokemon.filter(function(element){
    return element.type.includes("fire");
});

let cantidadFuego=filterFuego.length;

// CANTIDAD DE POKEMONES DE TIPO PLANTA
const filterPlanta=data.pokemon.filter(function(element){
    return element.type.includes("grass");
});

let cantidadPlanta=filterPlanta.length;

// CANTIDAD DE POKEMONES DE TIPO TIERRA
const filterTierra=data.pokemon.filter(function(element){
    return element.type.includes("ground");
});

let cantidadTierra=filterTierra.length;

// CANTIDAD DE POKEMONES DE TIPO ROCA
const filterRoca=data.pokemon.filter(function(element){
    return element.type.includes("rock");
});

let cantidadRoca=filterRoca.length;

// CANTIDAD DE POKEMONES DE TIPO HIELO
const filterHielo=data.pokemon.filter(function(element){
    return element.type.includes("ice");
});

let cantidadHielo=filterHielo.length;

// CANTIDAD DE POKEMONES DE TIPO ELECTRICO
const filterElectrico=data.pokemon.filter(function(element){
    return element.type.includes("electric");
});

let cantidadElectrico=filterElectrico.length;

// CANTIDAD DE POKEMONES DE TIPO DRAGON
const filterDragon=data.pokemon.filter(function(element){
    return element.type.includes("dragon");
});

let cantidadDragon=filterDragon.length;

// CANTIDAD DE POKEMONES DE TIPO FANTASMA
const filterFantasma=data.pokemon.filter(function(element){
    return element.type.includes("ghost");
});

let cantidadFantasma=filterFantasma.length;

// CANTIDAD DE POKEMONES DE TIPO PSIQUICO
const filterPsiquico=data.pokemon.filter(function(element){
    return element.type.includes("psychic");
});

let cantidadPsiquico=filterPsiquico.length;

// CANTIDAD DE POKEMONES DE TIPO NORMAL
const filterNormal=data.pokemon.filter(function(element){
    return element.type.includes("normal");
});

let cantidadNormal=filterNormal.length;

// CANTIDAD DE POKEMONES DE TIPO LUCHA
const filterLucha=data.pokemon.filter(function(element){
    return element.type.includes("fighting");
});

let cantidadLucha=filterLucha.length;

// CANTIDAD DE POKEMONES DE TIPO VENENO
const filterVeneno=data.pokemon.filter(function(element){
    return element.type.includes("poison");
});

let cantidadVeneno=filterVeneno.length;

// CANTIDAD DE POKEMONES DE TIPO BICHO
const filterBicho=data.pokemon.filter(function(element){
    return element.type.includes("bug");
});

let cantidadBicho=filterBicho.length;

// CANTIDAD DE POKEMONES DE TIPO VOLADOR
const filterVolador=data.pokemon.filter(function(element){
    return element.type.includes("flying");
});

let cantidadVolador=filterVolador.length;

// GRAFICO DE BARRAS DE CANTIDAD DE POKEMONES POR TIPO
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

// CANTIDAD DE POKEMONES QUE ECLOSIONAN DE HUEVOS DE 2KM
const filter2Km=data.pokemon.filter(function(element){
    return element.egg=="2 km";
});

let cantidad2Km=filter2Km.length;
// console.log(filter2Km);
// console.log(cantidad2Km);

// CANTIDAD DE POKEMONES QUE ECLOSIONAN DE HUEVOS DE 5KM
const filter5Km=data.pokemon.filter(function(element){
    return element.egg=="5 km";
});

let cantidad5Km=filter5Km.length;
// console.log(filter5Km);
// console.log(cantidad5Km);

// CANTIDAD DE POKEMONES QUE ECLOSIONAN DE HUEVOS DE 10KM
const filter10Km=data.pokemon.filter(function(element){
    return element.egg=="10 km";
});

let cantidad10Km=filter10Km.length;
// console.log(filter10Km);
// console.log(cantidad10Km);

// GRAFICO DE PIE DE CANTIDAD DE POKEMONES QUE ECLOSIONAN POR CADA KM DE HUEVO
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

// CANTIDAD DE POKEMONES QUE PARA CONSEGUIR 1 CARAMELO RECORREN 1KM 
const filterRecorrido1Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="1";
});

let cantidadRecorrido1Km=filterRecorrido1Km.length;

// CANTIDAD DE POKEMONES QUE PARA CONSEGUIR 1 CARAMELO RECORREN 3KM
const filterRecorrido3Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="3";
});

let cantidadRecorrido3Km=filterRecorrido3Km.length;

// CANTIDAD DE POKEMONES QUE PARA CONSEGUIR 1 CARAMELO RECORREN 5KM
const filterRecorrido5Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="5";
});

let cantidadRecorrido5Km=filterRecorrido5Km.length;

// CANTIDAD DE POKEMONES QUE PARA CONSEGUIR 1 CARAMELO RECORREN 20KM
const filterRecorrido20Km=data.pokemon.filter(function(element){
    return element['buddy-distance-km']=="20";
});

let cantidadRecorrido20Km=filterRecorrido20Km.length;
 
// GRAFICO DE PIE DE CANTIDAD DE POKEMONES POR RECORRIDO
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

const containerEstadistica=document.querySelector(".containerEstadistica");
const contenidoRegion=document.getElementById("contRegiones");
const contenidoElemento=document.getElementById("contElementos");
const contenidoHuevos=document.getElementById("contHuevos");
const contenidoRecorrido=document.getElementById("contRecorrido");

// DESPLEGABLE ESTADISTICA
const estadistica = document.querySelectorAll('.estadistica');

estadistica.forEach(e=>{    
    
    e.addEventListener("click", e => {
            let opcionEstadistica = e.target.getAttribute("estadistica");

        // ESTADISTICA TODO
        if (opcionEstadistica == "todos") {
            containerPokemons.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="block";
            contenidoElemento.style.display="block";
            contenidoHuevos.style.display="block";
            contenidoRecorrido.style.display="block";
        }

        // ESTADISTICA POR REGION
        if (opcionEstadistica == "por-región") {
            containerPokemons.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="block";
            contenidoElemento.style.display="none";
            contenidoHuevos.style.display="none";
            contenidoRecorrido.style.display="none";
        } 
        
        // ESTADISTICA POR ELEMENTO
        if (opcionEstadistica == "por-elemento") {
            containerPokemons.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="none";
            contenidoElemento.style.display="block";
            contenidoHuevos.style.display="none";
            contenidoRecorrido.style.display="none";
        }  

        // ESTADISTICA POR HUEVO
        if (opcionEstadistica == "por-huevos") {
            containerPokemons.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="none";
            contenidoElemento.style.display="none";
            contenidoHuevos.style.display="block";
            contenidoRecorrido.style.display="none";
        }  

        // ESTADISTICA POR RECORRIDO
        if (opcionEstadistica == "por-recorrido") {
            containerPokemons.style.display="none";
            containerEstadistica.style.display="block";
            contenidoRegion.style.display="none";
            contenidoElemento.style.display="none";
            contenidoHuevos.style.display="none";
            contenidoRecorrido.style.display="block";
        }  
        
    });
});