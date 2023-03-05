import React, { useState } from "react";
import axios from "axios";

import * as addActions from "../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [payload, setPayload] = useState({
    title: "",
    status: false,
  });
  // console.log("payload:", payload);

  const handleInput = (e) => {
    let val = e.target.value;
    let name = e.target.name;

    setPayload({ ...payload, [name]: val });
  };

  const handleAddtask = () => {
    dispatch(addActions.AddTaskRequest());

    axios
      .post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`,
        payload
      )
      .then((resp) => {
        dispatch(addActions.AddTaskSuccess(resp.data));

        navigate("/");

        console.log("resp:", resp.data);
      })
      .catch((err) => {
        dispatch(addActions.AddTaskFailure());

        console.log("err:", err.message);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          data-testid="add-task-input-box"
          placeholder="add task here"
          name="title"
          onChange={handleInput}
        />
        <button data-testid="add-task-button" onClick={handleAddtask}>
          Add task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
