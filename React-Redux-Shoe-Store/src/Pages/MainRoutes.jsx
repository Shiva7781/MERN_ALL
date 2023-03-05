import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Shoes from "./Shoes";
import SingleShoe from "./SingleShoe";

const MainRoutes = () => {
  const isAuth = useSelector((state) => {
    return state.AuthReducer.isAuth;
  });

  return (
    <Routes>
      <Route path="/" element={<Shoes />} />;
      <Route path="/login" element={<Login />} />
      <Route
        path="/shoes/:id"
        element={isAuth ? <SingleShoe /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
