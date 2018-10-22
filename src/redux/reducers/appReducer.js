import initialState from './initialState';
import * as types from '../actions/actionTypes';


export default function appReducer(state = initialState.app, action) {
  switch (action.type) {
    case types.TOGGLE_NAVBAR:
      return { ...state, showNavBar: !state.showNavBar };
    case types.TOGGLE_LOADING:
      return Object.assign({}, { ...state, isLoading: action.show });
    case types.START_ROUTE_CHANGE:
      return Object.assign({}, {
        ...state,
        isLoading: true,
        targetRoute: action.route,
      });
    case types.END_ROUTE_CHANGE:
      return Object.assign({}, { ...state, isLoading: false });
    default:
      return state;
  }
}
