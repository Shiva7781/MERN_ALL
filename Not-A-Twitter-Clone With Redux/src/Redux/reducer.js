import * as types from "./actionTypes";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  activePage: 1,
  perPage: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case types.APP_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.GET_POSTS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };

    case types.ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case types.TOGGLE_LIKE:
      state.posts[action.payload].liked = !state.posts[action.payload].liked;
      console.log("state:", state.posts[action.payload]);

      return {
        ...state,
        posts: [...state.posts],
      };

    case types.HANDLE_PAGE_CHANGE:
      return {
        ...state,
        activePage: action.payload,
      };

    default:
      return state;
  }
};

export { reducer };
