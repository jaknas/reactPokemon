import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { Provider } from 'react-redux';
import PokemonMap from './PokemonMap';
import store from '../store';

afterEach(cleanup);

test('PokemonMap renders provided data', () => {
  const mockPokemon = {
    type: ['red', 'green', 'blue'],
  };
  const { getByText, container } = render(
    <Provider store={store}>
      <PokemonMap variant={mockPokemon.type} groupBy="span" title="" />
    </Provider>,
  );
  const typeSpan = getByText('red');
  const allTypes = container.querySelectorAll('span');
  expect(allTypes.length).toBe(3);
  expect(typeSpan.textContent).toMatch('red');
});
