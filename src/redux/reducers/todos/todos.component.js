import { ADD_TODOS, TOGGLE_TODOS } from './todos.actions';

const reducerTodos = (state, action) => {
  switch(action.type) {
    case ADD_TODOS:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    case TOGGLE_TODOS:
      return state.map(todo => {
        if(todo.id !== action.payload.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state;
  }

};

export default reducerTodos;
