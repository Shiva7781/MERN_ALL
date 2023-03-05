import React from "react";
import HOC from "./HOC";

const User = ({ user }) => {
  return (
    <div>
      <strong>
        {user.name} ({user.username})
      </strong>
      <span> {user.email}</span>
    </div>
  );
};

export default HOC(User);
