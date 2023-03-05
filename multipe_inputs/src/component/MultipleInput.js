import React from "react";
import { useState } from "react";

const MultipleInput = () => {
  const [entryData, setEntryData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(`Field: ${field}  & Value: ${value}`);

    setEntryData({ ...entryData, [field]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newRecord = { ...entryData, id: new Date().getTime().toString() };

    console.log("records:", records);
    console.log("newRecord:", newRecord);

    setRecords([...records, newRecord]);

    setEntryData({ fullname: "", email: "", phone: "", password: "" });
  };

  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input type="text" name="fullname" id="fullname" autoComplete="off" required value={entryData.fullname} onChange={handleInput} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" autoComplete="off" required value={entryData.email} onChange={handleInput} />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input type="number" name="phone" id="phone" autoComplete="off" required value={entryData.phone} onChange={handleInput} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" autoComplete="off" required value={entryData.password} onChange={handleInput} />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div>
        {records.map((ele) => {
          const { id, fullname, email, phone, password } = ele;
          return (
            <div className="showDataStyle" key={id}>
              <p>{fullname}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultipleInput;
