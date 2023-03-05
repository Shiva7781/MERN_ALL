import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as authAction from "../Redux/AuthReducer/action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    let { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async () => {
    console.log("userData:", userData);

    dispatch(authAction.loginRequest());

    try {
      let { data } = await axios.post(`https://reqres.in/api/login`, userData);
      console.log("result:", data);

      dispatch(authAction.loginSuccess(data.token));
      navigate(-1);
    } catch (err) {
      dispatch(authAction.loginFailure());
      console.log("err:", err);
    }
  };

  return (
    <div>
      <h2>LOGIN</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>User Email</label>
          <br />
          <input name="email" onChange={handleLogin} />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input name="password" onChange={handleLogin} />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
