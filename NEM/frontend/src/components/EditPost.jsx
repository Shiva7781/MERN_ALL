import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  let postData = JSON.parse(localStorage.getItem("updatePost"));
  const [postUpdate, setPostUpdate] = useState({ ...postData });

  const submitData = (e) => {
    e.preventDefault();

    const field = e.target.name;
    const value = e.target.value;

    setPostUpdate({ ...postUpdate, [field]: value });
  };

  const handleEdit = async () => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    try {
      let resp = await axios.patch(
        `http://localhost:5500/posts/update/${id}`,
        postUpdate,
        {
          headers: {
            token,
          },
        }
      );

      console.log("resp:", resp);
      navigate("/posts");
    } catch (err) {
      alert(err.response.data);
      //   console.log("err:", err.response.data);
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
              value={postUpdate?.title}
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
              value={postUpdate?.body}
              onChange={submitData}
            />
          </label>
        </div>
        <div>
          <select name="device" onChange={submitData}>
            <option value={postUpdate?.device}>
              {postUpdate ? postUpdate.device : "Select an Option"}
            </option>
            <option value="MOBILE">MOBILE</option>
            <option value="TABLET">TABLET</option>
            <option value="PC">PC</option>
          </select>
        </div>

        <div>
          <button type="submit" onClick={handleEdit}>
            EDIT POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
