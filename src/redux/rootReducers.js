import { combineReducers } from 'redux';

import reducerVisibilityFilter from './reducers/visibility-filter/visibility-filter.component';
import reducerTodos from './reducers/todos/todos.component';

export default combineReducers({
  reducerTodos, reducerVisibilityFilter
});
