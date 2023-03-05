//Write the API calling functions and action creator functions here
import axios from "axios";
import * as types from "./actionTypes";

export const appLoading = () => {
  return {
    type: types.APP_LOADING,
  };
};

export const appError = () => {
  return {
    type: types.APP_ERROR,
  };
};

export const getPosts = (payload) => {
  return {
    type: types.GET_POSTS,
    payload,
  };
};

export const addPosts = (payload) => {
  return {
    type: types.ADD_POST,
    payload,
  };
};

export const toggleLike = (payload) => {
  return {
    type: types.TOGGLE_LIKE,
    payload,
  };
};

export const handlePageChange = (payload) => {
  return {
    type: types.HANDLE_PAGE_CHANGE,
    payload,
  };
};

// thunk
export const fetchPosts = async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`
    );

    dispatch(getPosts(data));
  } catch (err) {
    console.log("err:", err.message);
  }
};

export const addNewPosts = (newPosts) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts`,
      newPosts
    );

    dispatch(addPosts(data));
  } catch (err) {
    console.log("err:", err.message);
  }
};

export const handleLike = (updateData, ind) => async (dispatch) => {
  // dispatch(toggleLike(ind));

  updateData.liked = !updateData.liked;
  // console.log("updateData:", updateData);

  try {
    // eslint-disable-next-line
    const { data } = await axios.patch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${updateData.id}`,
      updateData
    );

    dispatch(fetchPosts);
  } catch (err) {
    console.log("err:", err.message);
  }
};
