import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

import reducerTodos from './todos.component.js';
import { ADD_TODOS, REMOVE_TODOS, TOGGLE_TODOS } from './todos.actions.js';

it('should be a function', () => {
  expect(reducerTodos).to.be.a('function');
});

it('should add a todo', () => {
  const before = deepFreeze([]);
  const action = deepFreeze({type: ADD_TODOS, payload: { id: 0, text: ''}})
  const after = [{
   id: 0,
   text: '',
   completed: false
  }];
  expect(reducerTodos(before, action)).to.be.deep.equal(after);
});

it('should add a todo', () => {
  const before = deepFreeze([{
   id: 0,
   text: '',
   completed: false
  }]
);
  const action = deepFreeze({type: ADD_TODOS, payload: { id:1, text: ''}})
  const after = [{
   id: 0,
   text: '',
   completed: false
  }, {
    id:1,
    text: '',
    completed: false
  }];
  expect(reducerTodos(before, action)).to.be.deep.equal(after);
})

it('should toggle the first todo', () => {
  const before = deepFreeze([{id: 0, text: '', completed: false}, {id: 1, text: '', completed: false}]);
  const action = deepFreeze({type: TOGGLE_TODOS, payload: {id: 0}});
  const after = [{id: 0, text: '', completed: true}, {id: 1, text: '', completed: false}];
  expect(reducerTodos(before, action)).to.be.deep.equal(after);
});

it('should toggle the second todo', () => {
  const before = deepFreeze([{id: 0, text: '', completed: false}, {id: 1, text: '', completed: false}]);
  const action = deepFreeze({type: TOGGLE_TODOS, payload: {id: 1}});
  const after = [{id: 0, text: '', completed: false}, {id: 1, text: '', completed: true}];
  expect(reducerTodos(before, action)).to.be.deep.equal(after);
});
