import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
   const navigate = useNavigate();

  const tasksData = useSelector((state) => {
    return state.tasks;
  });
  // console.log("tasksData:", tasksData);

  const pending = tasksData.reduce((acc, v) => {
    if (v.status === false) acc++;

    return acc;
  }, 0);

  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    >
      <div style={{ flex: "1" }}>
        <div>Pending Tasks</div>
        <div data-testid="pending-task-count">{pending}</div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Completed Tasks</div>
        <div data-testid="completed-task-count">
          {Math.abs(tasksData.length - pending)}
        </div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Total Tasks</div>
        <div data-testid="total-tasks-count">{tasksData.length}</div>
      </div>
      <div style={{ display: "flex" }}>
        <button data-testid="add-task" onClick={() => navigate("/add")}>
          Add Task
        </button>
      </div>
    </div>
  );
};
