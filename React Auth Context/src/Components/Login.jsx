import React, { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const auth = useAuth();

  const Email = useRef(null);
  const Password = useRef(null);

  const [userData, setUserData] = useState({});

  const submitData = (e) => {
    e.preventDefault();

    const EmailE = Email.current.value;
    // console.log("EmailE:", EmailE);

    const PasswordE = Password.current.value;
    // console.log("PasswordE:", PasswordE);

    setUserData({ email: EmailE, password: PasswordE });
  };

  let token = JSON.parse(localStorage.getItem("userToken"));

  const handleLogin = () => {
    auth.login(userData);

    if (token) {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <form data-testid="auth_form" onSubmit={submitData}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          ref={Email}
          onChange={submitData}
        />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          ref={Password}
          onChange={submitData}
        />
        <br />
        <input type="submit" onClick={handleLogin} />
      </form>
    </div>
  );
}
