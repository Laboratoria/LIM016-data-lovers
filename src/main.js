import data from './data/ghibli/ghibli.js';
console.log(data.films);

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




    const containerFilmografia = document.getElementById("containerFilmografia");
 
recorrerCadaPelicula();

function recorrerCadaPelicula () {
    let arreglo = [];
    arreglo = data.films;
    for (let i = 0; i<arreglo.length; i++){ 
        let titulo = arreglo[i].title;
        let refImagen = arreglo[i].poster;
        console.log(titulo);


    //manipulando dinamicamente la seccion filmografia

    //creando div para la tarjeta
    const filmoDiv = document.createElement("div");
    filmoDiv.setAttribute("class", 'classFilmo');
    containerFilmografia.appendChild(filmoDiv);

    const tituloDeFilmo = document.createElement("h2");
    filmoDiv.appendChild(tituloDeFilmo);
    const textDeFilmo = document.createTextNode(titulo);
    tituloDeFilmo.appendChild(textDeFilmo);

    const divImagen = document.createElement("div");
    divImagen.setAttribute("class", 'divImagen');
    filmoDiv.appendChild(divImagen);

    const imagen = document.createElement("img");
    imagen.setAttribute("class", 'imagen');
    divImagen.appendChild(imagen);
    imagen.src = refImagen;
    }

}

     

