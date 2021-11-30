import { sortOrdenAlfabeticoAsc, anotherExample } from '../src/data.js';


describe('sortOrdenAlfabeticoAsc', () => {
  it('is a function ', () => {
    expect(typeof sortOrdenAlfabeticoAsc).toBe('function');
  });



  it('returns `a-z`', () => {
    const compareTitle = [{"title": "Castle in the Sky"},{"title": "Whisper of the Heart"}]
    expect(sortOrdenAlfabeticoAsc(compareTitle)).toEqual('example');
  }); 
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
