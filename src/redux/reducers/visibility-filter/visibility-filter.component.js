import { SHOW_ALL, SET_VISIBILITY_FILTER } from './visibility-filter.actions';

export const initialState = SHOW_ALL;

const reducerVisibilityFileter = (state = initialState, action) => {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default reducerVisibilityFileter;
