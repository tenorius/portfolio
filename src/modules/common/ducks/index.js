import reducerRegistry from '../services/reducerRegistry';

const createActionName = name => `app/duck/${name}`;

const types = {
  TOGGLE_NAVBAR: createActionName('TOGGLE_NAVBAR'),
  TOGGLE_LOADING: createActionName('TOGGLE_LOADING'),
  START_ROUTE_CHANGE: createActionName('START_ROUTE_CHANGE'),
  END_ROUTE_CHANGE: createActionName('END_ROUTE_CHANGE'),
  SAVE_REF: createActionName('SAVE_REF'),
};

const actions = {
  toggleNavbar: () => (
    { type: types.TOGGLE_NAVBAR }
  ),
  toggleLoading: show => (
    { type: types.TOGGLE_LOADING, show }
  ),
  startRouteChange: route => (
    { type: types.START_ROUTE_CHANGE, route }
  ),
  endRouteChange: () => (
    { type: types.END_ROUTE_CHANGE }
  ),
  saveRef: (ref, name) => (
    { type: types.SAVE_REF, ref, name }
  ),
};

const operations = {};

const initialState = {
  changingRoute: false,
  targetRoute: '/home',
  isLoading: false,
  showNavBar: false,
  refs: {
    background: null,
    container: null,
  },
};

const selectors = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_NAVBAR:
      return { ...state, showNavBar: !state.showNavBar };
    case types.TOGGLE_LOADING:
      return { ...state, isLoading: action.show };
    case types.START_ROUTE_CHANGE:
      return {
        ...state,
        isLoading: true,
        targetRoute: action.route,
      };
    case types.END_ROUTE_CHANGE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

// const reducer = combineReducers({
//   appReducer,
// });

reducerRegistry.save('app', reducer);
reducerRegistry.register();

export {
  selectors,
  operations,
  actions,
  types,
};

export default reducer;
