const app = require('../server');
const request = require('supertest');

describe('GET /fruits', () => {
  test('It should return all fruits in the database', async (done) => {
    const response = await request(app).get('/fruits');

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([
      {
          "_id": "5f2fa992490c1d1f0efc596a",
          "name": "blueberry",
          "weight": 10,
          "image": "https://cdn.shopify.com/s/files/1/0059/8835/2052/files/ctg-blueberry-fruit-size-small.png?16207126710431789746="
      },
      {
          "_id": "5f2faa6f490c1d1f0efc596b",
          "name": "strawberry",
          "weight": 13,
          "image": "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c19e.png"
      },
      {
          "_id": "5f2faacc490c1d1f0efc596c",
          "name": "mango",
          "weight": 20,
          "image": "http://assets.stickpng.com/thumbs/5a02138b18e87004f1ca437e.png"
      },
      {
          "_id": "5f2fac2ee83f1534d6ea1156",
          "name": "orange",
          "weight": 25,
          "image": "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c16a.png"
      }
    ]);

    done();
  });
})

describe('GET /fruit', () => {
  test('It should return inputted fruit from the database', async (done) => {
    const response = await request(app).get('/fruit').query({ name: "mango"});

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual([
      {
        "_id": "5f2faacc490c1d1f0efc596c",
        "image": "http://assets.stickpng.com/thumbs/5a02138b18e87004f1ca437e.png",
        "name": "mango",
        "weight": 20,
      }
    ]);

    done();
  });

  test('It should return error if fruit is not found in database', async (done) => {
    const testName = 'test';
    const response = await request(app).get('/fruit').query({ name: testName });

    expect(response.status).toBe(404);
    expect(response.text).toEqual(`Sorry, ${testName} was not found in the database. :(`);
    
    done();
  });
})