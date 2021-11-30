import { sortOrdenNumericoAsc} from '../src/data.js';


describe('sort ordena score numerico en forma ascendente', () => {
  it('is a function sortOrdenNumericoAsc', () => {
    expect(typeof sortOrdenNumericoAsc).toBe('function');
  });



  /*it('returns ``', () => {
    const compareTitle = [{"title": "Castle in the Sky"},{"title": "Whisper of the Heart"}]
    expect(sortOrdenAlfabeticoAsc(compareTitle)).toEqual([{"title": "Castle in the Sky"},{"title": "Whisper of the Heart"}]);
  }); */
});


describe('searchData', () => {
  it('is a function', () => {
    expect(typeof searchData).toBe('function');
  });
  const dataPrueba = [{title: "Whisper of the Heart",rt_score:85,release_date:1995}, {  title: "Castle in the Sky", rt_score:100, release_date:2000}];
  it('should return the search result title',()=>{
    expect(searchData(dataPrueba,`title`,`whisper`)).toEqual([{"title": "Whisper of the Heart","rt_score":85,"release_date":1995}])
  })
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });
  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});