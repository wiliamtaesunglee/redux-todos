import { combineReducers } from 'redux';

import reducerVisibilityFilter from './visibitily-filter/visibility-filter.component';
import reducerTodos from './reducers/todos/todos.component';

export default combineReducers({
  reducerTodos, reducerVisibilityFilter
});
