import data from "./data/pokemon/pokemon.js";

import {regionFuncion} from "./data.js";
const arrayPokemon = data.pokemon;

// eslint-disable-next-line no-use-before-define
// pokemon por region
const regionCanva = ["kanto", "johto"];
const resultadoRegion1 = regionFuncion(regionCanva[0], arrayPokemon).length;
const resultadoRegion2 = regionFuncion(regionCanva[1], arrayPokemon).length;

// tipos de pokemones
const tipos = ["ghost","water","poison","flying","rock","dragon","dark","fairy","ground","psychic","ice",
"normal","steel","electric","grass","normal","fire","fighting"];

const arrayNumeroTipos = tipos.map((element) => {
  let tipos = arrayPokemon.filter((x) => x.type.includes(element));
  return tipos.length;
});

const ctx = document.getElementById("myChart1").getContext("2d");
new Chart(ctx, {
  type: "pie",
  data: {
    labels: regionCanva ,
    datasets: [
      {
        label: regionCanva,
        data: [resultadoRegion1, resultadoRegion2],
        backgroundColor: ["#00b894", "#00d2d3"],
        borderColor: ["#2d3436"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",

    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#2d3436",
        },
      },
      title: {
        display: true,
        text: 'GRAFICA N° 1: Datos de pokemon por región',
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
  },
});




const ctx2 = document.getElementById("myChart2").getContext("2d");
new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["ghost","water","poison","flying","rock","dragon","dark","fairy","ground","psychic","ice",
    "normal","steel","electric","grass","normal","fire","fighting"],
    datasets: [
      {
        label: ["# de Pokemones"],
        data: arrayNumeroTipos,
        backgroundColor: ["#6c5ce7"],
        borderColor: ["#2d3436"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    indexAxis: "x",
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#2d3436",
        },
    },
    title: {
      display: true,
      text: 'GRAFICA N° 2: Datos de pokemon por tipo',
      padding: {
        top: 10,
        bottom: 10,
      },
    },
  },
},
})

let arrayNormal = arrayPokemon.filter(
  (array) => array["pokemon-rarity"] == "normal"
).length;

let arrayMythic = arrayPokemon.filter(
  (array) => array["pokemon-rarity"] == "mythic"
).length;

let arrayLegendary = arrayPokemon.filter(
  (array) => array["pokemon-rarity"] == "legendary"
).length

let rarezaPoke = document.getElementById("rarezaChart").getContext("2d");
new Chart(rarezaPoke, {
  type: "doughnut",
  data: {
    labels: ["Normal", "Mythic", "Legendary"],
    datasets: [
      {
        label: ["Normal", "Mythic", "Legendary"],
        data: [arrayNormal, arrayMythic, arrayLegendary],

        backgroundColor: [
          "#e84393",
          "#feca57",
          "#5f27cd"
        ],
        borderColor: [
          "#222f3e"
        ],
        borderWidth: 1,
        hoverBorderWidth: 0,
      },
    ],
  },
  options: {
    indexAxis: "x",
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#2d3436",
        },
      },
      title: {
        display: true,
        text: 'GRAFICA N° 3: "Datos de pokemon por rareza"',
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
  },
});

let array2km = arrayPokemon.filter((array) => array["egg"] == "2 km").length;
console.log(array2km)
let array5km = arrayPokemon.filter((array) => array["egg"] == "5 km").length;

let array7km = arrayPokemon.filter((array) => array["egg"] == "5 km").length;

let array10km = arrayPokemon.filter((array) => array["egg"] == "10 km").length;

let egg = document.getElementById("eggChart").getContext("2d");
new Chart(egg, {
  type: "bar",
  data: {
    labels: ["2 km", "5 km", "7 km", "10km"],
    datasets: [
      {

        label: "km por recorrer",
        data: [array2km, array5km, array7km, array10km],
        fill: false,
        backgroundColor: [
          "#45aaf2",
          "#4b7bec",
          "#a55eea",
          "#26de81"

        ],
        borderColor: [
          "#2d3436"
        ],
        borderWidth: 1,
        hoverBorderWidth: 0,
      },
    ],
  },
  options: {
    indexAxis: "y",
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#2d3436",
        },
      },
      title: {
        display: true,
        text: 'GRAFICA N° 4: Datos de pokemon km a recorrer ',
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
  },
});
