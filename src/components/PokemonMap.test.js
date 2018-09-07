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
      <PokemonMap variant={mockPokemon.type} title="Multipliers" />
    </Provider>,
  );
  const typeSpan = getByText('red');
  const allTypes = container.querySelectorAll('li');
  const headerTitle = getByText('Multipliers');

  expect(headerTitle.textContent).toMatch('Multipliers');
  expect(allTypes.length).toBe(3);
  expect(typeSpan.textContent).toMatch('red');
});
