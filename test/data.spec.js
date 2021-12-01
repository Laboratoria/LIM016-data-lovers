import { inputSearch } from '../src/data.js';
import  data from '../src/data/ghibli/ghibli.js';



 


const array = data.films
  
describe('inputSearch', () => {
  it('is a function', () => {
    expect(typeof inputSearch).toBe('function');
  });


  it('returns true para titulo `Whisper of the Heart`', () => {
    expect(inputSearch(array,"Whisper of the Heart")[0].title.includes("Whisper of the Heart")).toBe(true);
  });


  it('returns 0 para titulo `la caperucita roja', () => {
    expect(inputSearch(array,"la caperucita roja").length).toBe(0);
  });
  
});






 

  


