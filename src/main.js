import datos from "./data/athletes/athletes.js";
import {sortData, computeDataTwo} from "./data.js";
import athletes from "./data/athletes/athletes.js";



//console.log(functionAll(datos));
//----------------SELECTOR DINÁMICO PARA EL FILTRO DE PAÍSES----------------
//Para esconder y mostrar las opciones
const select = document.querySelector('.select');
select.addEventListener('click', function(){
    document.getElementById('options').classList.toggle('active');
});
//Para que el contenido de las opciones se muestreen la parte superior
//const contentSelect = document.querySelector('.contentSelect');
//const inputSelect = document.querySelector('#inputSelect');

const arrayAthletes = datos.athletes;//aqui guardo la data de todos los atletas

const generateAthleteTemplate = (athlete) => {/* una funcion  que retorna con la plantilla de un
     solo atleta que es un string (es un html)*/  
    return `<article class="sportsContainer">
    <section class="boxImgAthlete">
        <img class="classAthlete" src="imagenes/deportista.PNG">
    </section>
    <section class="tableAthletes">
        <p>&#128308 Nombre:${athlete.name}</p>
        <p>&#128308 Genero:${athlete.gender}</p>
        <p>&#128308 Altura:${athlete.height}</p>
        <p>&#128308 Peso:${athlete.weight}</p>
        <p>&#128308 Pais:${athlete.team}</p>
        <p>&#128308 Edad:${athlete.age}</p>
        <p>&#128308 Medalla:${athlete.medal}</p>
    </section>
  </article>`
}

const optionAge = document.getElementById('optionAge');
const nameOpward = document.getElementById('nameOpward');
const nameFallig = document.getElementById('nameFallig');

const insertHtmlAtheles = (htmlAthletes) => { /*funcion para insertar los atletas en mi web.
    En mi id"gridForTest" inserto con innerHTML.*/

   const grid = document.getElementById("gridForTest");
   grid.innerHTML = htmlAthletes;
}


const sortByName = (athlete1,athlete2)=>{

    if (athlete1.name > athlete2.name) {
        return 1;
      }
      if (athlete1.name < athlete2.name) {
        return -1;
      }
      return 0;
};

const sortByAge = (athlete1,athlete2) => {

    if (athlete1.age > athlete2.age) {
        return 1;
      }
      if (athlete1.age < athlete2.age) {
        return -1;
      }
      return 0;
};
/*utilizo map para obtener un nuevo arreglo. Su objetivo es devolver un 
nuevo arreglo donde cada uno de sus elementos será lo que devuelva la función generateAthleteTemplate 
(como un ciclo).
 
Con "join" convierto ese nuevo arreglo en un string y asi lo concateno.*/

document.getElementById("orderBySelect").addEventListener('change', (event) => {
    const sortByValue = event.target.value;// investigar de esto
    if (sortByValue === "1") {
        const htmlAthletesAge = sortData(arrayAthletes, sortByAge,true).map(generateAthleteTemplate).join('');
       insertHtmlAtheles(htmlAthletesAge);//utilzo como argumento mi nuevo arreglo que converti en string.
        
    }
    
    if (sortByValue ==="2"){
        const htmlAthletesName= sortData(arrayAthletes, sortByName,true).map(generateAthleteTemplate).join('');
        insertHtmlAtheles(htmlAthletesName);
    }

    if (sortByValue ==="3"){
        const htmlAthletesNameReverse= sortData(arrayAthletes, sortByName,false).map(generateAthleteTemplate).join('');
          insertHtmlAtheles(htmlAthletesNameReverse);
        
    }
});


/*
const sortByCountry = (athlete1,athlete2) => {

    if (athlete1.team > athlete2.team) {
        return 1;
      }
      if (athlete1.team < athlete2.team) {
        return -1;
      }
      return 0;
};]
 
const htmlAthletes = sortData(arrayAthletes, sortByName,).map(generateAthleteTemplate).join(''); */
////////////////////////////////////


//FUNCION PARA CREAR TABLA DE RANKING DE PAISES 
let tableMedals = computeDataTwo(datos.athletes); //Meto mi funcion en una variable 

let tableRankingTeam = document.getElementById("tableMedals"); //accedo a la tabla en el html 
let tableBody = document.createElement("tbody"); //accedo a crear el cuerpo de la tabla,contiene a un bloque de filas ( tr )

//No se muestra en la tabla REVISAR 
//Este for es para que se impriman las posiciones 
for (let index = 1; index <= 10; index++) {
  const posit = index;
  let row1 = document.createElement("tr"); 
  let td1 = document.createElement("td");
  td1.innerText = posit; 
  row1.appendChild(td1);
  console.log(posit);
}
tableRankingTeam.appendChild(tableBody);

for (let i = 0; i <= 9; i++) { //Con un for recorro mi var que tiene el objeto hasta las posicion 9 
  const posititionTable = tableMedals[i]; //

  let row = document.createElement("tr"); 
    
  let td = document.createElement("td");
  td.innerText = posititionTable.team; 
  row.appendChild(td);
  
    td = document.createElement("td");
    td.innerText = posititionTable.gold;
    row.appendChild(td);

    td = document.createElement("td");
    td.innerText = posititionTable.silver;
    row.appendChild(td);

    td = document.createElement("td");
    td.innerText = posititionTable.bronce;
    row.appendChild(td);

    td = document.createElement("td");
    td.innerText = posititionTable.total;
    row.appendChild(td);
  
    tableBody.appendChild(row);

  //console.log(posititionTable);

}
tableRankingTeam.appendChild(tableBody);



  



 







