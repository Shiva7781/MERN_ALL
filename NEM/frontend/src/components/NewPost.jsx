import React, { useState } from "react";
import axios from "axios";

const NewPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    devide: "",
  });

  const submitData = (e) => {
    e.preventDefault();

    const field = e.target.name;
    const value = e.target.value;

    setPostData({ ...postData, [field]: value });
  };

  const handlePost = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    try {
      let Registered = await axios.post(
        `http://localhost:5500/posts`,
        postData,
        {
          headers: {
            token,
          },
        }
      );

      console.log("Registered:", Registered.data);

      //   if (Registered) navigate("/login");
    } catch (err) {
      console.log("err:", err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={submitData}>
        <h3>Posts</h3>
        <div>
          <label>
            <input
              type="text"
              placeholder="title"
              name="title"
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="body"
              name="body"
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <select name="device" onChange={submitData}>
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="MOBILE">MOBILE</option>
            <option value="TABLET">TABLET</option>
            <option value="PC">PC</option>
          </select>
        </div>

        <div>
          <button type="submit" onClick={handlePost}>
            ADD POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
