import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
const request = require('supertest');
const app = require('./App.js');
import Home from './components/Home';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  getCountries
} from './actions/index.js';

describe ('Actions' , () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ countries: [] });

  beforeEach(() => store.clearActions());

  it('Debería hacer un dispatch con las propiedades type "GET_COUNTRIES" y como payload, el resultado del fetch al link provisto', async () => {
    return store
      .dispatch(getCountries())
      .then(() => {
        const actions = store.getActions();
        // expect(actions[0].payload.length).toBe(250);
        // expect(actions[0]).toEqual({
        //   type: "GET_ALL_HOUSES",
        //   payload: data.houses,
        // });
      })
      .catch((err) => {
        // Acá llegamos cuando tu petición al backend no salió como el test lo pide. Revisá el error en la consola y verificá
        // qué es lo que está pasando.
        console.error(err);
        expect(err).toBeUndefined();
      });
  });
})
test('renders learn react link', () => {
 const componentHome = render(<Home />);
  
  it('must render the 250 countries of the world', async () => {
    expect(componentHome.container).to
  })
});
