//get tasks

import * as types from "./actionTypes";

export const GetTasksRequest = () => {
  return {
    type: types.GET_TASKS_REQUEST,
  };
};

export const GetTasksSuccess = (tasks) => {
  return {
    type: types.GET_TASKS_SUCCESS,
    payload: tasks,
  };
};

export const GetTasksFailure = () => {
  return {
    type: types.GET_TASKS_FAILURE,
  };
};

//add task

export const AddTaskRequest = () => {
  return {
    type: types.ADD_TASK_REQUEST,
  };
};

export const AddTaskSuccess = (tasksA) => {
  return {
    type: types.ADD_TASK_SUCCESS,
    payload: tasksA,
  };
};

export const AddTaskFailure = () => {
  return {
    type: types.ADD_TASK_FAILURE,
  };
};

//update task

export const UpdateTaskRequest = () => {
  return {
    type: types.UPDATE_TASK_REQUEST,
  };
};

export const UpdateTaskSuccess = (tasksU) => {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    payload: tasksU,
  };
};

export const UpdateTaskFailure = () => {
  return {
    type: types.UPDATE_TASK_FAILURE,
  };
};

//delete task

export const DeleteTaskRequest = () => {
  return {
    type: types.DELETE_TASK_REQUEST,
  };
};

export const DeleteTaskSuccess = () => {
  return {
    type: types.DELETE_TASK_SUCCESS,
  };
};

export const DeleteTaskFailure = () => {
  return {
    type: types.DELETE_TASK_FAILURE,
  };
};
