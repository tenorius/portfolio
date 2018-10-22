import * as types from './actionTypes';
// import userApi from '../../api/mockUserApi';


export const toggleNavbar = () => (
  { type: types.TOGGLE_NAVBAR }
);

export const toggleLoading = show => (
  { type: types.TOGGLE_LOADING, show }
);

export const startRouteChange = route => (
  { type: types.START_ROUTE_CHANGE, route }
);

export const endRouteChange = () => (
  { type: types.END_ROUTE_CHANGE }
);

// export function getUser(email, password){
//   return function (dispatch) {
//     return userApi.getUser(email, password).then(user => {
//       dispatch(getUserSuccess(user));
//     }).catch( error => {
//       throw(error);
//     })
//   }
// }
