import calcAge from '../src/js/calcAge.js';

describe('calcAge', () => {

  test('This should create a dob object', () => {
    const dob = new CalcAge('1956-9-1');
    expect(dob).toBe('1956-9-1');
  });

});