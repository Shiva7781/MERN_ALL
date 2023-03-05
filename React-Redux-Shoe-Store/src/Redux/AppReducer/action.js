//Write the ActionCreator functions here

// export const GET_SHOES_DATA_REQUEST = "GET_SHOES_DATA_REQUEST";
// export const GET_SHOES_DATA_SUCCESS = "GET_SHOES_DATA_SUCCESS";
// export const GET_SHOES_DATA_FAILURE = "GET_SHOES_DATA_FAILURE";

import * as types from "./actionType";

export const getShoeDataRequest = () => {
  return {
    type: types.GET_SHOES_DATA_REQUEST,
  };
};

export const getShoeDataSuccess = (payload) => {
  // console.log("payload", payload);

  return {
    type: types.GET_SHOES_DATA_SUCCESS,
    payload,
  };
};

export const getShoeDataFailure = () => {
  return {
    type: types.GET_SHOES_DATA_FAILURE,
  };
};
