import * as types from './actionTypes';
// import userApi from '../../api/mockUserApi';


export const toggleLoading = show => (
  { type: types.TOGGLE_LOADING, show }
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
