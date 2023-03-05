//Write the ActionCreator functions here

// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";

import * as types from "./actionTypes";

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};
