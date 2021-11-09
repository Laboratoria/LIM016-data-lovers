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



const containerFilmografia = document.getElementById("containerFilmografia");



recorrerCadaPelicula ( ) ;

function  recorrerCadaPelicula  ( )  {
    deje  arreglo  =  [ ] ;
    arreglo  =  datos . películas ;

    para  ( sea  i  =  0 ;  i < arreglo . longitud ;  i ++ ) { 
        sea  titulo  =  arreglo [ i ] . título ;
        deje  refImagen  =  arreglo [ i ] . cartel ;
        deje  descripción  =  arreglo [ i ] . descripción ;
        deja  productor  =  arreglo [ i ] . productor ;
        sea  director  =  arreglo [ i ] . director ;
        vamos  año  =  arreglo [ i ] . release_date ;
        let  score  =  arreglo [ i ] . rt_score ;
    / * Aqui hicimos este array vacio para empujar los datos de weather a traves de un for que toma los datos 
    de una propiedad dentro de una propiedad * /
        dejar  clima  = [ ] ;
        para  ( sea  a = 0 ;  a < ( arreglo [ i ] . ubicaciones ) . longitud ;  a ++ ) {
        clima  =  arreglo [ i ] . ubicaciones [ a ] . climático ;
        //console.log(climate)
    }

         dejar que la  gente  =  [ ] ;
        para  ( sea  p = 0 ;  p < ( arreglo [ i ] . personas ) . longitud ;  p ++ )  {
        gente  =  arreglo [ i ] . gente [ p ] . img ;
        consola . log ( personas )
    }
    const  filmoDiv  =  documento . createElement ( "div" ) ;
    filmoDiv . setAttribute ( "clase" ,  'classFilmo' ) ;
    containerFilmografia . appendChild ( filmoDiv ) ;

/ * Para crear un elemento como un <h2> es necesario usar createElement y luego acompañado de un createTextNode 
para insertar texto dentro de la etiqueta h2 (nodo de texto) * /
    const  tituloDeFilmo  =  documento . createElement ( "h2" ) ;
    filmoDiv . appendChild ( tituloDeFilmo ) ;
    const  textDeFilmo  =  documento . createTextNode ( titulo ) ;
    tituloDeFilmo . appendChild ( textDeFilmo ) ;

/ * Se crea un div para contener la imagen dentro, se le agrega con setAttribute un class y el no, bre del class
por ultimo se le asigna como padre a filmoDiv, que es el segundo mayor div * /
    const  divImagen  =  documento . createElement ( "div" ) ;
    divImagen . setAttribute ( "clase" ,  'divImagen' ) ;
    filmoDiv . appendChild ( divImagen ) ;

/ * se crea el elemento img para extraer la imagen. Se le xrea un class y su nombre. Se le asigna como padre a
divImagen para que esté dentro de este div. Por ultimo con .src se le indica la ruta * /
    const  imagen  =  documento . createElement ( "img" ) ;
    imagen . setAttribute ( "clase" ,  'imagen' ) ;
    divImagen . appendChild ( imagen ) ;
    imagen . src  =  refImagen ;

    const  divContenido  =  documento . createElement ( "div" ) ;
    divContenido . setAttribute ( "clase" ,  'classDivContenido' ) ;
    filmoDiv . appendChild ( divContenido ) ;

    const  descriptionFilm  =  documento . createElement ( "p" ) ;
    filmoDiv . appendChild ( descriptionFilm ) ;
    const  textDescription  =  documento . createTextNode ( descripción ) ;
    descriptionFilm . appendChild ( textDescription ) ;

    const  producerFilm  =  documento . createElement ( "p" ) ;
    filmoDiv . appendChild ( productorFilm ) ;
    const  textProducer  =  documento . createTextNode ( productor ) ;
    productorFilm . appendChild ( textProducer ) ;

    const  directorFilm  =  documento . createElement ( "p" ) ;
    filmoDiv . appendChild ( directorFilm ) ;
    const  textDirector  =  documento . createTextNode ( director ) ;
    directorFilm . appendChild ( textDirector ) ;

    const  añoFilm  =  documento . createElement ( "p" ) ;
    filmoDiv . appendChild ( añoFilm ) ;
    const  textAño =  documento . createTextNode ( año ) ;
    añoFilm . appendChild ( textAño ) ;

    const  scoreFilm  =  documento . createElement ( "p" ) ;
    filmoDiv . appendChild ( scoreFilm ) ;
    const  textScore =  documento . createTextNode ( puntuación ) ;
    scoreFilm . appendChild ( textScore ) ;
    

    const  tiendaDiv  =  documento . createElement ( "div" ) ;
    tiendaDiv . setAttribute ( "clase" ,  'classTienda' ) ;
    containerTienda . appendChild ( tiendaDiv ) ;

    const  divImagenT  =  documento . createElement ( "div" ) ;
    divImagenT . setAttribute ( "clase" ,  'divImagenT' ) ;
    tiendaDiv . appendChild ( divImagenT ) ;

     const  imagenT  =  documento . createElement ( "img" ) ;
     imagenT . setAttribute ( "clase" ,  'imagenT' ) ;
     divImagenT . appendChild ( imagenT ) ;
     imagenT . src  =  gente ;

     const  personajeDiv  =  documento . createElement ( "div" ) ;
    personajeDiv . setAttribute ( "clase" ,  'classPersonaje' ) ;
    containerPersonajes . appendChild ( personajeDiv ) ;

    const  imagenP  =  documento . createElement ( "img" ) ;
    imagenP . setAttribute ( "clase" ,  'imagenP' ) ;
    personajeDiv . appendChild ( imagenP ) ;
    imagenP . src  =  gente ;
     

}
}