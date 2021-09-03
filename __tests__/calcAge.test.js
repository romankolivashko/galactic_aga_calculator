import CalcAge from '../src/js/calcAge.js';

describe('calcAge', () => {

  let age;
  beforeEach(() => {
    age = new CalcAge('1956-9-1');
  });

  test('This should create a dob object', () => {
    expect(age.dob).toBe('1956-9-1');
  });

  test('This should return year value with dob provided', () => {
    expect(age.getYearFromDob('1956-9-1')).toEqual(1956);
  });

  test('This should return earth age numeric value', () => {
    expect(age.getEartAge(1956)).toEqual(65);
  });


});