import initialState from './initialState';
import * as types from '../actions/actionTypes';


export default function appReducer(state = initialState.app, action) {
  switch (action.type) {
    case types.TOGGLE_LOADING:
      console.log(action);
      return Object.assign({}, { isLoading: action.show });
    default:
      return state;
  }
}