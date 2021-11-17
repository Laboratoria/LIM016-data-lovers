import { example, anotherExample, data } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
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


describe('data ejm', () => {
  it('is a function', () => {
    expect(typeof data).toBe('function');
  });

  it('returns data', () => {
    expect(data()).toBe(data);
  });
});



























































