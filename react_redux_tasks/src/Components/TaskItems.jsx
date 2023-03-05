import axios from "axios";
import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as detActions from "../Redux/action";

const TaskItems = ({ id, title, status, getTasks }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(detActions.DeleteTaskRequest());

    axios
      .delete(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`
      )
      .then((resp) => {
        dispatch(detActions.DeleteTaskSuccess());

        getTasks();
      })
      .catch((err) => {
        dispatch(detActions.DeleteTaskFailure());
        console.log("err:", err);
      });
  };

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.2rem",
        paddingBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "380px",
        margin: "auto",
        marginBottom: "1rem",
        justifyContent: "center",
      }}
      data-testid={`task-item-${id}`}
    >
      <div
        data-testid="task-title"
        style={{ fontSize: "24px", fontWeight: "600" }}
      >
        {title}
      </div>
      <div data-testid="task-status" style={{ fontSize: "18px" }}>
        {status ? "True" : "False"}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button data-testid="edit-task" onClick={() => navigate(`/edit/${id}`)}>
          Edit
        </button>
        <button data-testid="delete-task" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItems;
