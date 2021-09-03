import CalcAge from '../src/js/calcAge.js';

describe('calcAge', () => {

  test('This should create a dob object', () => {
    let age = new CalcAge('1956-9-1');
    expect(age.dob).toBe('1956-9-1');
  });

});