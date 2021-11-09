import data from './data/ghibli/ghibli.js';
console.log(data.films);

//comentario para reparar git commit

/*botones para  ingresar a cada seccion*/

document.getElementById("filmografia").addEventListener("click", ()=>{
    document.getElementById("filmo").style.display="block";
    document.getElementById("persona").style.display="none";
    document.getElementById("estre").style.display="none";
    document.getElementById("tda").style.display="none";
    document.getElementById("principal").style.display="none";
   })
   
   document.getElementById("personajes").addEventListener("click", ()=> {
     document.getElementById("persona").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("estre").style.display="none";
     document.getElementById("tda").style.display="none";
     document.getElementById("principal").style.display="none";
   })
   
   document.getElementById("estrenos").addEventListener("click", ()=> {
     document.getElementById("estre").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("persona").style.display="none";
     document.getElementById("tda").style.display="none";
     document.getElementById("principal").style.display="none";
   })
   
   document.getElementById("tienda").addEventListener("click", ()=> {
     document.getElementById("tda").style.display="block";
     document.getElementById("filmo").style.display="none";
     document.getElementById("estre").style.display="none";
     document.getElementById("persona").style.display="none";
    document.getElementById("principal").style.display="none";
   })
   
   /* boton para volver al principal*/
   document.getElementById("logo").addEventListener("click",()=>window.location.reload());



//Traer todos los titulos de cada pelicula
   ///const arrayTitle= data.films.map(anim => anim.title)
     //console.log(arrayTitle)
//Traer los id de las animaciones en general
     //const arrayIdGeneral= data.films.map(anim => anim.id)
     //console.log(arrayIdGeneral)
//Traer los id solo del primer personaje de cada pelicula
//const arrayIdFirstPeople= data.films.map(anim => anim.people[0].id)
     //console.log(arrayIdFirstPeople)

//for (let l=0; l<arreglo.length; l++) {
    //climates = arreglo[i].locations[l];
    //console.log(climates);



const containerFilmografia = document.getElementById("containerFilmografia");
const containerPersonajes = document.getElementById("containerPersonajes");
const containerEstrenos = document.getElementById("containerEstrenos");
const containerTienda = document.getElementById("containerTienda");

recorrerCadaPelicula();

function recorrerCadaPelicula () {
    let arreglo = [];
    arreglo = data.films;

    for (let i = 0; i<arreglo.length; i++){ 
        let titulo = arreglo[i].title;
        let refImagen = arreglo[i].poster;
        let description = arreglo[i].description;
        let producer = arreglo[i].producer;
        let director = arreglo[i].director;
        let año = arreglo[i].release_date;
        let score = arreglo[i].rt_score;
    /*Aqui hicimos este array vacio para empujar los datos de climate a traves de un for que toma los datos 
    de una propiedad dentro de una propiedad*/
        let climate =[];
        for (let a=0; a<(arreglo[i].locations).length; a++){
        climate = arreglo[i].locations[a].climate;
        //console.log(climate)
    }

         let people = [];
        for (let p=0; p<(arreglo[i].people).length; p++) {
        people = arreglo[i].people[p].img;
        console.log(people)
    }

    //manipulando dinamicamente la seccion filmografia

    //creando div para la tarjeta
    const filmoDiv = document.createElement("div");
    filmoDiv.setAttribute("class", 'classFilmo');
    containerFilmografia.appendChild(filmoDiv);

/*Para crear un elemento como un <h2> es necesario usar createElement y luego acompañado de un createTextNode 
para insertar texto dentro de la etiqueta h2(nodo de texto)*/
    const tituloDeFilmo = document.createElement("h2");
    filmoDiv.appendChild(tituloDeFilmo);
    const textDeFilmo = document.createTextNode(titulo);
    tituloDeFilmo.appendChild(textDeFilmo);

/* Se crea un div para contener la imagen dentro, se le agrega con setAttribute un class y el no, bre del class
por ultimo se le asigna como padre a filmoDiv, que es el segundo mayor div*/
    const divImagen = document.createElement("div");
    divImagen.setAttribute("class", 'divImagen');
    filmoDiv.appendChild(divImagen);

/*se crea el elemento img para extraer la imagen. Se le xrea un class y su nombre. Se le asigna como padre a 
divImagen para que esté dentro de este div. Por ultimo con .src se le indica la ruta*/
    const imagen = document.createElement("img");
    imagen.setAttribute("class", 'imagen');
    divImagen.appendChild(imagen);
    imagen.src = refImagen;

    const divContenido = document.createElement("div");
    divContenido.setAttribute("class", 'classDivContenido');
    filmoDiv.appendChild(divContenido);

    const descriptionFilm = document.createElement("p");
    filmoDiv.appendChild(descriptionFilm);
    const textDescription = document.createTextNode(description);
    descriptionFilm.appendChild(textDescription);

    const producerFilm = document.createElement("p");
    filmoDiv.appendChild(producerFilm);
    const textProducer = document.createTextNode(producer);
    producerFilm.appendChild(textProducer);

    const directorFilm = document.createElement("p");
    filmoDiv.appendChild(directorFilm);
    const textDirector = document.createTextNode(director);
    directorFilm.appendChild(textDirector);

    const añoFilm = document.createElement("p");
    filmoDiv.appendChild(añoFilm);
    const textAño= document.createTextNode(año);
    añoFilm.appendChild(textAño);

    const scoreFilm = document.createElement("p");
    filmoDiv.appendChild(scoreFilm);
    const textScore= document.createTextNode(score);
    scoreFilm.appendChild(textScore);
    

    const tiendaDiv = document.createElement("div");
    tiendaDiv.setAttribute("class", 'classTienda');
    containerTienda.appendChild(tiendaDiv);

    const divImagenT = document.createElement("div");
    divImagenT.setAttribute("class", 'divImagenT');
    tiendaDiv.appendChild(divImagenT);

     const imagenT = document.createElement("img");
     imagenT.setAttribute("class", 'imagenT');
     divImagenT.appendChild(imagenT);
     imagenT.src = people;

     const personajeDiv = document.createElement("div");
    personajeDiv.setAttribute("class", 'classPersonaje');
    containerPersonajes.appendChild(personajeDiv);

    const imagenP = document.createElement("img");
    imagenP.setAttribute("class", 'imagenP');
    personajeDiv.appendChild(imagenP);
    imagenP.src = people;

}
}
//nuevo coment
