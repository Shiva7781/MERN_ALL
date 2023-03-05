import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const submitData = (e) => {
    e.preventDefault();

    const field = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [field]: value });
  };

  const handleSignup = async () => {
    console.log("userData:", userData);

    try {
      let Registered = await axios.post(
        `http://localhost:5500/users/register`,
        userData
      );

      if (Registered) navigate("/");

      console.log("Registered:", Registered.data);
    } catch (err) {
      alert(err.response.data);
      //   console.log("err:", err.response.data);
    }
  };

  return (
    <div className="signup_page">
      <form className="form" onSubmit={submitData}>
        <h3>Signup</h3>
        <div>
          <label>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="gender"
              name="gender"
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="password"
              placeholder="password"
              name="password"
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
        <Link className="message" to="/">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
