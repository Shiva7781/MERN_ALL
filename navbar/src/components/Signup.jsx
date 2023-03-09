import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const Email = useRef(null);
  const Password = useRef(null);
  const [userData, setUserData] = useState({});

  const submitData = (e) => {
    e.preventDefault();

    const EmailE = Email.current.value;
    const PasswordE = Password.current.value;

    setUserData({ email: EmailE, password: PasswordE });
  };

  const handleSignup = () => {
    console.log("userData:", userData);
  };

  return (
    <div className="signup_page">
      <form className="form" onSubmit={submitData}>
        <h3>Signup</h3>
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
          <button type="submit" onClick={handleSignup}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/login">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
