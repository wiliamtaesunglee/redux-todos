import { expect } from 'chai';

import reducerTodos from './todos.component.js';
import { ADD_TODOS, REMOVE_TODOS, TOGGLE_TODOS } from './todos.actions.js';

it('should be a function', () => {
  expect(reducerTodos).to.be.a('function');
});


