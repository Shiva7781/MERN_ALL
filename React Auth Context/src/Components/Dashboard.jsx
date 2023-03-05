import React from "react";
import { useAuth } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const auth = useAuth();
  console.log("auth:", auth);

  const { user, login, logout } = auth;
  // const { isAuth, loading, error, token } = auth.user;

  let token = JSON.parse(localStorage.getItem("userToken"));

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  // if (user.loading) return <h3>Loading...</h3>;

  return (
    <div>
      <h3 data-testid="token">Token: {token} </h3>
      <button data-testid="logout" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
};
