//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';

console.log(data.films[0].people["id"]);

fetch ('./data/ghibli/ghibli.json')
.then(res => res.json() )
.then( data=>{
    console.log(data.films)
    data.films.forEach(element=>{
     console.log(element)
    })
})
