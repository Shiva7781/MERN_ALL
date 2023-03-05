import React, { useState } from "react";
import "./CSS Files/AddPost.css";
import { useDispatch } from "react-redux";
import { addNewPosts } from "../Redux/action";

export const AddPost = () => {
  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState({
    title: "",
    liked: false,
  });

  const handleTweet = (e) => {
    // eslint-disable-next-line
    setNewPost({ ...newPost, ["title"]: e.target.value });
  };

  const handlePost = () => {
    if (!newPost.title) {
      return alert("Enter something for tweet");
    }

    // eslint-disable-next-line
    setNewPost({ ...newPost, ["title"]: "" });
    dispatch(addNewPosts(newPost));
  };

  return (
    <div className="addPostWrapper">
      <textarea
        className="addPostTextArea"
        cols="40"
        rows="3"
        maxLength="20"
        placeholder="What's happening?"
        value={newPost.title}
        onChange={handleTweet}
      ></textarea>
      <div className="addPostBtnWrapper">
        <button className="addPostBtn" onClick={handlePost}>
          Tweet
        </button>
      </div>
    </div>
  );
};
