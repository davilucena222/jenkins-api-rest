const request = require('supertest');
const fs = require('fs');
const app = require('../app');

describe('Teste do endpoint /id', () => {
  it('Deve salvar um valor de id no arquivo id.json', async () => {
    const id = '12345';
    const response = await request(app).get(`/id?id=${id}`);
    expect(response.statusCode).toEqual(200);

    const idFile = fs.readFileSync('id.json');
    const idJSON = JSON.parse(idFile);

    expect(idJSON.id).toEqual(id);
  });
});

describe('Teste do endpoint raiz', () => {
  it('Deve retornar a mensagem "API rodando na porta 3000!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toEqual(200);
    expect(response.text).toEqual('API rodando na porta 3000!');
  });
});

const { PORT } = require('../app');

describe('Teste do servidor', () => {
  let server;
  
  beforeAll(async () => {
    server = app.listen(PORT);
  });
  
  afterAll(async () => {
    server.close();
  });
  
  it('Deve iniciar o servidor corretamente', async () => {
    expect(server).toBeDefined();
  });
});
