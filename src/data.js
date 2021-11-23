/* MOSTRAR TODOS LOS CARDS DE TODOS LOS POKEMONES */
export const mostraPokemon = (pokemon, fragment, template, container) => {
  for(let i=0; i<pokemon.length; i++){
  template.content.querySelector(".numPokemon").textContent=pokemon[i].num;
  template.content.querySelector(".imgPokemon").src=pokemon[i].img;
  template.content.querySelector(".nomPokemon").textContent=pokemon[i].name;
  template.content.querySelector(".nomRegion").textContent=pokemon[i].generation.name;
  template.content.querySelector(".imgPokemon").id=pokemon[i].num;
  const clone=template.content.cloneNode(true);
  fragment.appendChild(clone); 
  }
  container.appendChild(fragment);
};


/* BUSCAR POKEMON  */
export const buscarPokemon = (pokemon, input, fragment, template, container) => {
  for(let i=0; i<pokemon.length; i++){
    if(pokemon[i].name.includes(input)){
      template.content.querySelector(".numPokemon").textContent=pokemon[i].num;
      template.content.querySelector(".imgPokemon").src=pokemon[i].img;
      template.content.querySelector(".nomPokemon").textContent=pokemon[i].name;
      template.content.querySelector(".nomRegion").textContent=pokemon[i].generation.name;
      template.content.querySelector(".imgPokemon").id=pokemon[i].num;
      const clone=template.content.cloneNode(true);
      fragment.appendChild(clone); 
    }
  }
  container.appendChild(fragment);
};


/* MAS INFORMACION DEL POKEMON */
export const masInfoPokemon = (pokemon, evento, conteModal) => {

  for(let i=0; i<pokemon.length; i++){
  if(evento==pokemon[i].num){
      conteModal.querySelector(".nomPokemonMod").textContent=pokemon[i].name.toUpperCase();
      conteModal.querySelector(".tipoPokemonMod").textContent="TIPO: "+pokemon[i].type;
      conteModal.querySelector(".cpPokemonMod").textContent="CP: "+pokemon[i].stats["max-cp"];
      conteModal.querySelector(".peso").textContent=pokemon[i].size.weight;
      conteModal.querySelector(".altura").textContent=pokemon[i].size.height;
      conteModal.querySelector(".huevos").textContent=pokemon[i].egg;
      conteModal.querySelector(".debilidad").textContent=pokemon[i].weaknesses;
      
      /* SI NO TIENE NINGUNA EVOLUCION POSTERIOR */
      if(pokemon[i].evolution["next-evolution"]==undefined){
        const mensaje = document.createElement("p");
        mensaje.className ="mensaje";
        mensaje.textContent="No tiene evoluciones posteriores!!!";
        conteModal.querySelector(".contPriEvolucion").appendChild(mensaje);
      }
      
      /* SI TIENE PRIMERA EVOLUCION POSTERIOR */
      else {
        let cantEvoluciones=pokemon[i].evolution["next-evolution"].length; /* CANTIDAD DE EVOLUCIONES EN LA PRIMERA EVOL */
        if(cantEvoluciones>5){cantEvoluciones=5} /* SOLO APAREZCAN COMO MAXIMO 5 EVOLUCIONES */
        /* OBTENER TODOS LOS NOMBRES DE LOS POKEMONES DE LA PRIMERA EVOLUCION */
        for(let j=0; j<cantEvoluciones; j++){
          /* EVOLUCIONES QUE SI TIENEN IMAGEN */
          let numEvolucion=pokemon[i].evolution["next-evolution"][j].num;
          if(parseInt(numEvolucion)<=251){
            /* IMAGEN DE LA PRIMERA O PRIMERAS EVOLUCIONES */
            const imagenEvolucion=document.createElement("img");
            imagenEvolucion.className="imagenEvolucion";
            // BUSCAR DIRECCION DE LA IMAGEN DE LA PRIMERA EVOLUCION
            let direccionImagenPriEvolucion;
            for(let k=0; k<251; k++){
              if(numEvolucion===pokemon[k].num){
                direccionImagenPriEvolucion=pokemon[k].img;
              }}
            imagenEvolucion.src=direccionImagenPriEvolucion;
            conteModal.querySelector(".imgEvolucion1").appendChild(imagenEvolucion);
            /* NOMBRE DE LA PRIMERA O PRIMERAS EVOLUCIONES */
            const nomEvolucion = document.createElement("p");
            nomEvolucion.className ="nomEvolucion";
            nomEvolucion.textContent=pokemon[i].evolution["next-evolution"][j].name;
            conteModal.querySelector(".nombreEvolucion1").appendChild(nomEvolucion);
          }
          else{ /* EVOLUCIONES QUE NO TIENEN IMAGEN */
            /* IMAGEN DE POKEBOLA PARA EL POKEMON QUE NO TIENE IMAGEN */
            const imagenEvolucion=document.createElement("img");
            imagenEvolucion.className="imagenEvolucion";
            imagenEvolucion.src="https://canalpokemon.files.wordpress.com/2008/11/kawax-pokeball-3097.png?w=256&h=256"
            conteModal.querySelector(".imgEvolucion1").appendChild(imagenEvolucion);
            /* NOMBRE DE LA PRIMERA O PRIMERAS EVOLUCIONES */
            const nomEvolucion = document.createElement("p");
            nomEvolucion.className ="nomEvolucion";
            nomEvolucion.textContent=pokemon[i].evolution["next-evolution"][j].name;
            conteModal.querySelector(".nombreEvolucion1").appendChild(nomEvolucion);
          }
        }
          /* CANTIDAD DE CARAMELOS DE LA EVOLUCION */
          const caramelosEvolucion=document.createElement("p");
          caramelosEvolucion.className="caramelosEvolucion";
          caramelosEvolucion.textContent=pokemon[i].evolution["next-evolution"][0]["candy-cost"];
          conteModal.querySelector(".contCaramelos1").appendChild(caramelosEvolucion);
          /* IMAGEN DE CARAMELOS */
          const imagenCaramelos=document.createElement("img");
          imagenCaramelos.className="imgCaramelos";
          imagenCaramelos.src="../IMAGENES/caramelo.png";
          conteModal.querySelector(".contCaramelos1").appendChild(imagenCaramelos);
        
          /* SI TIENE SEGUNDA EVOLUCION POSTERIOR */
        if(pokemon[i].evolution["next-evolution"][0]["next-evolution"]!=undefined){
          /* IMAGEN DE LA SEGUNDA EVOLUCION */
          let numEvolucion=pokemon[i].evolution["next-evolution"][0]["next-evolution"][0].num;
          if(parseInt(numEvolucion)<=251){
            const imagenEvolucion=document.createElement("img");
            imagenEvolucion.className="imagenEvolucion";
            // BUSCAR DIRECCION DE LA IMAGEN DE LA SEGUNDA EVOLUCION
            let direccionImagenSeguEvolucion;
            for(let k=0; k<251; k++){
              if(numEvolucion===pokemon[k].num){
                direccionImagenSeguEvolucion=pokemon[k].img;
              }}
            imagenEvolucion.src=direccionImagenSeguEvolucion;
            conteModal.querySelector(".imgEvolucion2").appendChild(imagenEvolucion);
            /* NOMBRE DE LA SEGUNDA EVOLUCION */
            const nomNextEvolucion = document.createElement("p");
            nomNextEvolucion.className ="nomEvolucion";
            nomNextEvolucion.textContent=pokemon[i].evolution["next-evolution"][0]["next-evolution"][0].name;
            conteModal.querySelector(".nombreEvolucion2").appendChild(nomNextEvolucion);
            /* CARAMELOS DE LA SEGUNDA EVOLUCION */
            const caramelosNextEvolucion=document.createElement("p");
            caramelosNextEvolucion.className="caramelosEvolucion";
            caramelosNextEvolucion.textContent=pokemon[i].evolution["next-evolution"][0]["next-evolution"][0]["candy-cost"];
            conteModal.querySelector(".contCaramelos2").appendChild(caramelosNextEvolucion);
            /* IMAGEN DE CARAMELOS */
            const imagenCaramelos=document.createElement("img");
            imagenCaramelos.className="imgCaramelos";
            imagenCaramelos.src="../IMAGENES/caramelo.png";
            conteModal.querySelector(".contCaramelos2").appendChild(imagenCaramelos);
        }
        else{
          conteModal.querySelector(".contAmbasEvoluciones .contSegEvolucion").style.display="none";
        }
        }
        /* SI NO TIENE SEGUNDA EVOLUCION OCULTAR DIV */
        else {
          conteModal.querySelector(".contAmbasEvoluciones .contSegEvolucion").style.display="none";
          }
      }
    }
  }
};