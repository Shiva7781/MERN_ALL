import React, { useState, useEffect, useMemo } from "react";
import Login from "./Components/Login";
import { Dashboard } from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthContextProvider, { useAuth } from "./Context/AuthContextProvider";

export default function App() {
  const auth = useAuth();
  // console.log(auth && auth.user);

  // const { isAuth, loading, error, token } = auth && auth.user;

  const [isAuth, setIsAuth] = useState(false);

  let newData = useMemo(
    () => JSON.parse(localStorage.getItem("userToken")),
    [localStorage.getItem("userToken")]
  );

  useEffect(() => {
    setIsAuth(newData);
  }, [newData]);

  return (
    // <div>
    //     <Login />
    // </div>

    <AuthContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/dashboard"
            element={!isAuth ? <Navigate to="/" /> : <Dashboard />}
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}
