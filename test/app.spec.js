import { miFuncionTesteableExp, miOtraFunctionTesteableExp } from '../src/js/app';

const chai = require('chai');

describe('Nuevo Usuario', () => {
  it('Debería retornar true si completa todos los campos', () => {
    //expect(validateNewUser ('Lisa','lisa.simpson@gmail.com','mypass')).toBe(true);
  });
  it('Debería retornar false si el usuario deja algún campo vacío', () =>{
    //expect(validateNewUser ('','','')).toBe(false);
  });
  it('Debería retornar true si es un correo electronico válido', () => {
    //expect( validateEmail('micorreo@ejemplomail.com')).toBe(true);
  });
  it('Debería retornar false si el usario ya se encuentra registrado', () => {
    //chai.assert.equal(miOtraFunctionTesteableExp(), false);
  });
});


describe('Inicio de sesión', () => {
  it('Debería retornar true si hace login con correo y contraseña', () => {
    //expect(validateSignInUser ('lisa.simpson@gmail.com','mypass')).toBe(true);
  });
  it('Debería retornar false si el usuario deja algún campo vacío', () =>{
    //expect(validateSignInUser ('','')).toBe(false);
  });
  it('Debería retornar true si hace login con gmail', () => {
    //chai.assert.equal(miOtraFunctionTesteableExp(), false);
  });
});


describe('Nuevo Post', () => {
  it('Deberia retornar true si el usuario escribe un texto',()=>{
    //expect(validateNewPost('hola')).toBe(true);
  })
  it('Debería retornar false si el campo está vacío', () => {
    //expect(validateNewPost('')).toBe(false);
  });
});


describe('Comentarios', () => {
  it('Deberia retornar true si el usuario escribe un texto',()=>{
    //expect(validateNewPost('hola')).toBe(true);
  })
  it('Debería retornar false si el campo está vacío', () => {
    //expect(validateNewPost('')).toBe(false);
  });
});


describe('Likes', () => {
  it('Deberia retornar true si el usuario da click en me gusta',()=>{
    //chai.assert.equal(miOtraFunctionTesteableExp(), false);
  })
  it('Debería sumar 1 punto si el usuario activa like', () => {
    //chai.assert.equal(miOtraFunctionTesteableExp(), false);
  });
  it('Debería restar 1 punto si el usuario desactiva like', () => {
    //chai.assert.equal(miOtraFunctionTesteableExp(), false);
  });
});












/*
import { validateEmail, validatePassword } from '../src/assets/js/validateLogin.js';
import { validateNicknameCheckin, validateEmailCheckin, validatePasswordCheckin, validatePasswordRepeat } from '../src/assets/js/validateCheckin.js';

//Test para corroborar que el email ingresado cumpla con las condiciones de un correo válido
describe("función validateEmail", () =>{
    it("debería retornar false", () => {
        expect(validateEmail("estonoesuncorreo.com")).toBe(false);
        expect(validateEmail("estonoesun@correo")).toBe(false);
        expect(validateEmail("estonoesuncorreocom")).toBe(false);
        expect(validateEmail("")).toBe(false);
    })
    it("debería retornar true", () => {
        expect(validateEmail("hola@laboratoria.com")).toBe(true);
    })
})


// Testea que el email ingresado en el checkin cumpla las condiciones de un email válido
describe("función validateEmailCheckin", () =>{
    it("debería retornar false", () => {
        expect(validateEmailCheckin("estonoesuncorreo.com")).toBeFalsy();
        expect(validateEmailCheckin("estonoesun@correo")).toBeFalsy();
        expect(validateEmailCheckin("estonoesuncorreocom")).toBeFalsy();
        expect(validateEmailCheckin("")).toBeFalsy();
    })
    it("debería retornar true", () => {
        expect(validateEmailCheckin("laboratoriaredsocial@example.com")).toBeTruthy();
    })
})
*/