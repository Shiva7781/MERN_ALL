import React, { useState, createContext, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext("");

export default function AuthContextProvider({ children }) {
  // const navigate = useNavigate();

  const [user, setUser] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });
  // console.log("user:", user);

  const login = async (userData) => {
    // setUser(user);

    let newData = { ...user, loading: true };
    setUser({ ...newData });

    try {
      const res = await axios.post(`https://reqres.in/api/login`, userData);

      // console.log("res:", res.data);

      newData = {
        ...user,
        loading: false,
        isAuth: true,
        token: res.data.token,
      };
      setUser({ ...newData });

      localStorage.setItem("userToken", JSON.stringify(res.data.token));

      console.log("user:", user);
      alert("Login Successful!");
      window.location.reload();

      // navigate("/dashboard");
    } catch (err) {
      console.log("err:", err);

      newData = { ...user, loading: false, error: err };
      setUser({ ...newData });
    }
  };

  const logout = () => {
    setUser({
      isAuth: false,
      loading: false,
      error: null,
      token: "",
    });
    window.localStorage.clear();

    alert("Logged out!");
    window.location.reload();

    // navigate("/");
  };

  // return <div></div>;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
