const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
    it('should return a welcome message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'Hello, Node.js Build Pipeline!');
    });
});
