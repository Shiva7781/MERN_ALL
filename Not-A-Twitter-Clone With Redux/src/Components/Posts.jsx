import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Redux/action";
import "./CSS Files/Post.css";
import PerPost from "./PerPost";

const Posts = () => {
  const { posts, activePage, perPage } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts);

    // eslint-disable-next-line
  }, []);

  const offset = (activePage - 1) * perPage;

  return (
    <div className="postsWrapper">
      <div style={{ position: "relative" }}>
        <h1 style={{ textAlign: "center" }}>Posts</h1>
      </div>
      {/* map through the posts here, inside the PerPost component. Also, take care of showing the Posts based on the Pagination data */}

      {posts.length &&
        posts.slice(offset, offset + perPage).map((v, i) => {
          return <PerPost key={v.id} data={v} ind={i} />;
        })}
    </div>
  );
};

export default Posts;
