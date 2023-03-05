import React, { useEffect } from "react";
import axios from "axios";

import * as getActions from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import TaskItems from "../Components/TaskItems";

const Homepage = () => {
  const tasksData = useSelector((state) => {
    return state.tasks;
  });
  // console.log("Homepage_tasksData:", tasksData);

  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = false;

    if (!mounted) {
      getTasks();
    }

    return () => {
      mounted = true;
    };

    // eslint-disable-next-line
  }, []);

  const getTasks = () => {
    dispatch(getActions.GetTasksRequest());

    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/tasks`)
      .then((resp) => {
        dispatch(getActions.GetTasksSuccess(resp.data));

        // console.log("resp:", resp.data);
      })
      .catch((err) => {
        dispatch(getActions.GetTasksFailure());

        console.log("err:", err.message);
      });
  };

  return (
    <div>
      {/* Map through the task lists here using the TaskItems component */}
      {tasksData &&
        tasksData.map((v, i) => {
          const { id, title, status } = v;
          return (
            <TaskItems
              id={id}
              title={title}
              status={status}
              key={i}
              getTasks={getTasks}
            />
          );
        })}
    </div>
  );
};

export default Homepage;
