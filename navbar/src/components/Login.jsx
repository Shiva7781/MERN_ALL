import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const Email = useRef(null);
  const Password = useRef(null);
  const [userData, setUserData] = useState({});

  const submitData = (e) => {
    e.preventDefault();

    const EmailE = Email.current.value;
    const PasswordE = Password.current.value;

    setUserData({ email: EmailE, password: PasswordE });
  };

  const handleLogin = () => {
    console.log("userData:", userData);
  };

  return (
    <div className="login_page">
      <form className="form" onSubmit={submitData}>
        <h3>Login</h3>
        <div>
          <label>
            <input
              type="email"
              placeholder="email"
              ref={Email}
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              placeholder="password"
              ref={Password}
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <button type="submit" onClick={handleLogin}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/signup">
          Create a new account? Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
