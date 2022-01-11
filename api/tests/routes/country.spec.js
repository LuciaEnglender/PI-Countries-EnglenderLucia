/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const { request } = require('express');
const supertest = require('supertest');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  // before(() => conn.authenticate()
  // .catch((err) => {
  //   console.error('Unable to connect to the database:', err);
  // }));
  // beforeEach(() => Country.sync({ force: true })
  //   .then(() => Country.create(pokemon)));
  describe('GET /countries',  () => {
    it('should get 200', () =>
     agent.get('/countries').expect(200)
    );

    it('should get the country detail', () => {
      agent.get('/countries?name=mexico').expect({
        "id": "MEX",
        "name": "Mexico",
        "flag": "https://flagcdn.com/w320/mx.png",
        "region": "Americas",
        "capital": "Mexico City",
        "subregion": "North America",
        "area": 1964375,
        "population": 128932753,
    })
    });

    it('should get the countries matches name details', () => {
      agent.get('/countries?name=fr').expect(
        {
          "id": "FRA",
          "name": "France",
          "flag": "https://flagcdn.com/w320/fr.png",
          "region": "Europe",
          "capital": "Paris",
          "subregion": "Western Europe",
          "area": 640679,
          "population": 67391582,
      },
      {
          "id": "CAF",
          "name": "Central African Republic",
          "flag": "https://flagcdn.com/w320/cf.png",
          "region": "Africa",
          "capital": "Bangui",
          "subregion": "Middle Africa",
          "area": 622984,
          "population": 4829764,
      },
      {
          "id": "French Polynesia",
          "name": "French Polynesia",
          "flag": "https://flagcdn.com/w320/pf.png",
          "region": "Oceania",
          "capital": "Papeetē",
          "subregion": "Polynesia",
          "area": 4167,
          "population": 280904,
       },
      {
          "id": "Saint Martin (French part)",
          "name": "Saint Martin (French part)",
          "flag": "https://flagcdn.com/w320/mf.png",
          "region": "Americas",
          "capital": "Marigot",
          "subregion": "Caribbean",
          "area": 53,
          "population": 38659,
   },
      {
          "id": "RSA",
          "name": "South Africa",
          "flag": "https://flagcdn.com/w320/za.png",
          "region": "Africa",
          "capital": "Pretoria",
          "subregion": "Southern Africa",
          "area": 1221037,
          "population": 59308690,
   },
      {
          "id": "French Southern Territories",
          "name": "French Southern Territories",
          "flag": "https://flagcdn.com/w320/tf.png",
          "region": "Africa",
          "capital": "Port-aux-Français",
          "subregion": "Southern Africa",
          "area": 7747,
          "population": 140,
    },
      {
          "id": "French Guiana",
          "name": "French Guiana",
          "flag": "https://flagcdn.com/w320/gf.png",
          "region": "Americas",
          "capital": "Cayenne",
          "subregion": "South America",
          "area": null,
          "population": 254541,
    }
      )
    })


  });

 
});


describe('Activity route', () => {
  describe('/POST ', () => {
    it('should post a new activity', () => {
      return agent
      .post('/activity')
      .send({
        description : 'visitar torre eiffel',
        duration : 12,
        dificulty : 1,
        season : 'SPRING',
        nameCountry : 'France'
      })
      .expect(200)
    });
    it('shouldnt post if any field is not completed', () => {
      return agent
      .post('/activity')
      .send({
        description : 'visitar torre eiffel',
       
        nameCountry : 'France'
      })
      .expect(400)
    });
  })
})