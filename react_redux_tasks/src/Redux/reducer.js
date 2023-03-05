import * as types from "./actionTypes";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  //write the logic to handle, get task, update task, add task, and delete task

  // get
  switch (action.type) {
    case types.GET_TASKS_REQUEST:
      return { ...state, isLoading: true };

    case types.GET_TASKS_SUCCESS:
      return { ...state, isLoading: false, tasks: action.payload };

    case types.GET_TASKS_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // update
    case types.UPDATE_TASK_REQUEST:
      return { ...state, isLoading: true };

    case types.UPDATE_TASK_SUCCESS:
      // console.log("UPDATE_TASK_SUCCESS", action.payload);

      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, action.payload],
      };

    case types.UPDATE_TASK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // add
    case types.ADD_TASK_REQUEST:
      return { ...state, isLoading: true };

    case types.ADD_TASK_SUCCESS:
      // console.log("ADD_TASK_SUCCESS", action.payload);

      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, action.payload],
      };

    case types.ADD_TASK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    // delete
    case types.DELETE_TASK_REQUEST:
      return { ...state, isLoading: true };

    case types.DELETE_TASK_SUCCESS:
      return { ...state, isLoading: false };

    case types.DELETE_TASK_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};

export { reducer };
