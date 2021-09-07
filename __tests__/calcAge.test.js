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
    expect(age.getMercuryAge(65)).toEqual("270");
  });

  test('This should return human age in Venus years', () => {
    expect(age.getVenusAge(65)).toEqual("104");
  });

  test('This should return human age in Mars years', () => {
    expect(age.getMarsAge(65)).toEqual("34");
  });

  test('This should return human age in Jupiter years', () => {
    expect(age.getJupiterAge(65)).toEqual("5");
  });

  test('This should return str message with number of years expected to live', () => {
    expect(age.getUserYearsLeft(85, 65)).toEqual("You have about 20 years left to live.");
  });

  test('This should return str message with number of years surpassing life expectancy', () => {
    expect(age.getUserYearsLeft(65, 85)).toEqual("You lived 20 years past life expectancy.");
  });

  test('This should return str message with 0 years expected to live', () => {
    expect(age.getUserYearsLeft(85, 85)).toEqual("You have about 0 years left to live.");
  });

  test('This should return false if none of the branching meets outlined conditions', () => {
    expect(age.getUserYearsLeft("falseType")).toBeFalsy();
  });

  test('This should return str if conditional returns false', () => {
    expect(age.getUserYearsLeft(false)).toBe("");
  });
});