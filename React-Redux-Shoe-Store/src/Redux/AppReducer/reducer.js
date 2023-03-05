// NOTE: DO NOT MODIFY the intial state structure in this file.

// export const GET_SHOES_DATA_REQUEST = "GET_SHOES_DATA_REQUEST";
// export const GET_SHOES_DATA_SUCCESS = "GET_SHOES_DATA_SUCCESS";
// export const GET_SHOES_DATA_FAILURE = "GET_SHOES_DATA_FAILURE";

import * as types from "./actionType";

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SHOES_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.GET_SHOES_DATA_SUCCESS:
      // console.log("GET_SHOES_DATA_SUCCESS", action.payload);

      return {
        ...state,
        isLoading: false,
        shoes: action.payload,
      };

    case types.GET_SHOES_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
