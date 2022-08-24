import { getCoordinates, getWeather } from './apiCalls';


describe("Test: the function 'getCoordinates()'" , () => {
  test('It should be defined', () => {
      expect(getCoordinates).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof getCoordinates).toBe("function");
  });

});

describe("Test: the function 'getWeather()'" , () => {
  test('It should be defined', () => {
      expect(getWeather).toBeDefined();
  });

  test('It should be a function', () => {
    expect(typeof getWeather).toBe("function");
  });
});