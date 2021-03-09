// // import '@testing-library/jest-dom/extend-expect';
// const express = require('express')
// const request = require('supertest')


// const app = express()
// const url = 'http://localhost:3001';

// /* Qual o arquivo ou classe ou component estamos testando */
// describe("registerController", () => {
//   /* Qual a função/ação sendo testada */
//   describe("Registro de novo usuario", () => {
//     /* contexto: Quando um nome não é passado ----- Resultado esperado: usuário não deve ser criado */
//     test("Quando email, name, password ou role fornecidos incorretamente, o controller deve retornar um erro", async () => {
//       const mockreq = { body: { name: null, email: "virginia@email.com", password: "123456", role:"client" } };
//       request(app)
//       .post(`${url}/register`)
//       .send(mockreq)
//       .set('Accept', 'application/json')
//       .expect(401, {
//         message: 'field name is required'
//       })
//     });
//   });
// });

const tes = require('../models/loginModel');
describe('', () => {
  it('', async () => {
    tes.getUser();
    const TESTE = 'Bruno';
    expect(TESTE).toBe('Bruno');
  });
});