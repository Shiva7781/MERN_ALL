import React, { useEffect, useState } from "react";
import "./CSS Files/Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { handlePageChange } from "../Redux/action";
import { createSearchParams, useSearchParams } from "react-router-dom";

const Pagination = () => {
  const dispatch = useDispatch();
  const { posts, activePage, perPage } = useSelector((state) => state);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  // console.log("page:", page);

  // let totalPages = Math.ceil(posts.length / perPage);
  const [totalButton, setTotalButton] = useState(Array(10).fill("button"));
  // console.log("totalButton:", totalButton);

  useEffect(() => {
    dispatch(handlePageChange(+page));
    setTotalButton(Array(Math.ceil(posts.length / perPage)).fill("button"));

    // eslint-disable-next-line
  }, [posts.length]);

  return (
    <div className="paginationWrapper">
      <button
        className="prevBtn"
        style={{ display: activePage === 1 ? "none" : "" }}
        onClick={() => {
          dispatch(handlePageChange(activePage - 1));
          setSearchParams(createSearchParams({ page: activePage - 1 }));
        }}
      >
        Prev
      </button>

      {/* render the buttons here, directly. Add the className, activeBtn, if the current button is the activePage*/}

      {totalButton.map((v, i) => (
        <button
          key={i}
          className={activePage === i + 1 ? "activeBtn" : null}
          onClick={() => {
            dispatch(handlePageChange(i + 1));
            setSearchParams(createSearchParams({ page: i + 1 }));
          }}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="nextBtn"
        style={{
          display:
            activePage === Math.ceil(posts.length / perPage) ? "none" : null,
        }}
        onClick={() => {
          dispatch(handlePageChange(activePage + 1));
          setSearchParams(createSearchParams({ page: activePage + 1 }));
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
