import {validateUrl} from "./validateUrl";

describe("validateUrl function" , ()=>{
  test('It should be defined', ()=>{
    expect(validateUrl).toBeDefined();
  });

  test('It should be return true if valid URL is passed into it', () => {
    expect(validateUrl("https://www.facebook.com")).toBeTruthy();
  });  

  test('It should be return false if invalid URL is passed into it', () => {
    expect(validateUrl("ftps://ww.343#ckz.com")).toBeFalsy();
  });
})