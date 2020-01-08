import { expect } from 'chai';
import deepFreeze from 'deep-freeze'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVES } from './visibility-filter.actions';
import reducerVisibilityFilter, { initialState } from './visibility-filter.component';

it('should be a function', () => {
  expect(reducerVisibilityFilter).to.be.a('function')
});

it('hould return all todos', () => {
  const before = SHOW_COMPLETED;
  const action = deepFreeze({type: 'SET_VISIBILITY_FILTER',
    payload: { filter: SHOW_ALL }
  });
  const after = 'SHOW_ALL';
  expect(reducerVisibilityFilter(before, action)).to.be.equal(after);
});

it('hould return actives todos', () => {
  const before = SHOW_ALL;
  const action = deepFreeze({type: 'SET_VISIBILITY_FILTER',
    payload: { filter: SHOW_ACTIVES }
  });
  const after = SHOW_ACTIVES;
  expect(reducerVisibilityFilter(before, action)).to.be.equal(after);
});

it('hould return initial state when action are not passed', () => {
  const before = 'SHOW_COMPLETED';
  const action = deepFreeze({type: 'UNKNOWN',
    payload: { filter: 'SHOW_ALL`' }
  });
  const after = 'SHOW_COMPLETED';
  expect(reducerVisibilityFilter(before, action)).to.be.equal(after);
});

it('should return default state (SHOW_ALL) when the initial state is undefined', () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;
  expect(reducerVisibilityFilter(before, action)).to.be.equal(after);
});

