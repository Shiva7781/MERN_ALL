import React from "react";
import "./CSS Files/PerPost.css";
import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { handleLike, toggleLike } from "../Redux/action";

const PerPost = ({ data, ind }) => {
  // console.log("data:", data);

  const dispatch = useDispatch();

  return (
    <div className="perPostWrapper">
      <div className="perPostCard">
        <img src="https://via.placeholder.com/50/3a9f5" alt="profile" />
        <div className="postTitle">{data.title}</div>
      </div>
      <div
        className="likedIcons"
        onClick={() => dispatch(handleLike(data, ind))}
        // onClick={() => dispatch(toggleLike(ind))}
      >
        {/* Render the icons based on the liked condition */}

        {data.liked ? <FcLike /> : <AiOutlineHeart />}
      </div>
    </div>
  );
};

export default PerPost;
