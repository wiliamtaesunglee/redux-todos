import { ADD_TODOS } from './todos.actions';
import { v4 } from 'uuid';

export const addTodo = (text) => ({
  type: ADD_TODOS,
  payload: {
    id: v4(),
    text
  }
})
