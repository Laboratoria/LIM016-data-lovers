// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

const filtros = {
    
  genero: function (gender) {

    let generoSelect;

    if (gender == "F") {
      
      
         
    }

    else {

      generoSelect = "Male"

    }

    return generoSelect
  }

  // data.results.map((dp) => {
  //   if (genero == "F" && dp.gender == "Female") {
  //     //creando div de filtrado

  //     let cardPersonaje = document.createElement("div")
  //     filtrarData.appendChild(cardPersonaje);
  //     cardPersonaje.setAttribute("class", "card-personaje");

  //     let divDataPersonaje = document.createElement("div");
  //     cardPersonaje.appendChild(divDataPersonaje);
  //     divDataPersonaje.setAttribute("class", "div-personaje");

  //     let divDataFrentePer = document.createElement("div");
  //     divDataPersonaje.appendChild(divDataFrentePer);
  //     divDataFrentePer.setAttribute("class", "data-frente-personaje");
  //     divDataFrentePer.style.backgroundImage = `url(${dp.image})`;

  //     let nameP = document.createElement("h5");
  //     divDataFrentePer.appendChild(nameP);
  //     nameP.textContent = `${dp.name}`;
  //     nameP.setAttribute("class", "name-personaje-frente");


  //     let divDataAtrasPer = document.createElement("div");
  //     divDataPersonaje.appendChild(divDataAtrasPer);
  //     divDataAtrasPer.setAttribute("class", "data-atras-personaje");

  //     let namePerAtras = document.createElement("h3");
  //     divDataAtrasPer.appendChild(namePerAtras);
  //     namePerAtras.setAttribute("class", "name-personaje-atras")
  //     namePerAtras.textContent = dp.name;


  //     let estadoP = document.createElement("p");
  //     namePerAtras.after(estadoP)
  //     estadoP.innerHTML = `Estado:${dp.status}`;

  //     let especieP = document.createElement("p");
  //     estadoP.after(especieP);
  //     especieP.textContent = `Especie: ${dp.species}`;

  //     let origenP = document.createElement("p");
  //     especieP.after(origenP);
  //     origenP.textContent = `Origen: ${dp.origin.name}`;

  //     let localizacionP = document.createElement("p")
  //     origenP.after(localizacionP);
  //     localizacionP.textContent = `Localización: ${dp.location.name}`;


  //     console.log(divDataPersonaje);

  //   }
  // })


};




//  export const data = () => {

//    console.log(data.results);

//    return data.results;

// };

export default filtros;
