import React, { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as updateActions from "../Redux/action";
import axios from "axios";

const Editpage = () => {
  const { id } = useParams();
  // console.log("id:", id);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const tasksData = useSelector((state) => {
    return state.tasks;
  });
  // console.log("Editpage_tasksData:", tasksData[tasksData.length - 1]);

  const [payload, setPayload] = useState(tasksData[tasksData.length - 1]);
  // console.log("payload:", payload);

  const handleInput = (e) => {
    let val = e.target.value;
    let name = e.target.name;

    if (name === "status") {
      if (val === "true") {
        val = true;
      } else {
        val = false;
      }
    }

    setPayload({ ...payload, [name]: val });
  };

  const handleUpdate = () => {
    // console.log("payload:", payload);

    dispatch(updateActions.UpdateTaskRequest());

    axios
      .patch(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks/${id}`,
        payload
      )
      .then((resp) => {
        dispatch(updateActions.UpdateTaskSuccess(resp.data));

        navigate("/");
      })
      .catch((err) => {
        console.log("err:", err.message);

        dispatch(updateActions.UpdateTaskFailure());
      });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          data-testid="edit-task-title"
          name="title"
          value={payload.title}
          onChange={handleInput}
        />
        <select
          data-testid="edit-select-option"
          name="status"
          value={payload.status}
          onChange={handleInput}
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
        <button data-testid="edit-update" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Editpage;
