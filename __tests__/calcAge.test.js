import CalcAge from '../src/js/calcAge.js';

describe('calcAge', () => {

  let age;
  beforeEach(() => {
    age = new CalcAge('1956-9-1');
  });

  test('This should create a dob object', () => {
    expect(age.dob).toBe('1956-9-1');
  });

  test('This should return current age on Earth', () => {
    expect(age.getEarthAge).toEqual(65);
  });

});