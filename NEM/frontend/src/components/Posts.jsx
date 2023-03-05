import React, { useState, useEffect } from "react";
import axios from "axios";
import NewPost from "./NewPost";
import {
  MdOutlineModeEditOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mounted = false;

    axios
      .get(`http://localhost:5500/posts`)
      .then((res) => {
        console.log("res:", res.data);

        if (!mounted) setPosts([...res.data]);
      })
      .catch((err) => {
        console.log("err:", err);
      });

    return () => {
      mounted = true;
    };
  }, []);

  const handleEdit = (pos, id) => {
    try {
      localStorage.setItem("updatePost", JSON.stringify(pos));

      navigate(`/posts/${id}`);
    } catch (err) {
      console.log("err:", err);
    }
  };

  const handleDelete = async (id) => {
    const token = `Bearer ${localStorage.getItem("token")}`;

    try {
      await axios.delete(`http://localhost:5500/posts/delete/${id}`, {
        headers: {
          token,
        },
      });

      alert("Post has been deleted successfully!");
    } catch (err) {
      alert(err.response.data);
      //   console.log("err:", err.response.data);
    }
  };

  return (
    <div>
      <NewPost />

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Device</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((pos, i) => {
            const { _id, title, body, device, loginId, loginEmail } = pos;

            return (
              <tr key={_id}>
                <td>{title}</td>
                <td>{body}</td>
                <td>{device}</td>
                <td onClick={() => handleEdit(pos, _id)}>
                  <MdOutlineModeEditOutline />
                </td>
                <td onClick={() => handleDelete(_id)}>
                  <MdOutlineDeleteOutline />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
