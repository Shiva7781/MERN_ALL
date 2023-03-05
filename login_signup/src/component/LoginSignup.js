import React from "react";
import { useState } from "react";

const LoginSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = { email, password, id: new Date().getTime().toString() };

      setAllEntry([...allEntry, newEntry]);
      console.log("allEntry:", allEntry);

      setEmail("");
      setPassword("");
    } else {
      alert("Empty Field Not Allowed");
    }
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {allEntry.map((e) => {
          const { id, email, password } = e;
          return (
            <div className="showDataStyle" key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LoginSignup;
