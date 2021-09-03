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
    expect(age.getYearFromDob(age.dob)).toEqual(1956);
  });

  test('This should return earth age numeric value', () => {
    expect(age.getEarthAge(1956)).toEqual(65);
  });

  test('This should return human age in Mercury years', () => {
    expect(age.getMercuryAge(65)).toEqual(270);
  });

  // test('This should return human age in Venus years', () => {
  //   expect(age.getMercuryAge(65)).toEqual(15.6);
  //});


});