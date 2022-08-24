import{handleSubmit,uiUpdate } from './formHandler'

describe("Test: the function 'handleSubmit()'" , () => {
    test('It should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    test('It should be a function', () => {
      expect(typeof handleSubmit).toBe("function");
    });
});

describe("Test: the function 'uiUpdate()'" , () => {
    test('It should be defined', () => {
      expect(uiUpdate).toBeDefined();
    });
  
    test('It should be a function', () => {
      expect(typeof uiUpdate).toBe("function");
    });
  });



