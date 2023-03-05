import React, { useEffect } from "react";
import axios from "axios";
import Filter from "../Components/Filter";
import { useDispatch, useSelector } from "react-redux";
import * as shoesAction from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import { useLocation, useSearchParams } from "react-router-dom";

const Shoes = () => {
  const shoesData = useSelector((state) => {
    return state.AppReducer.shoes;
  });
  const dispatch = useDispatch();

  let [searchParams] = useSearchParams();
  let location = useLocation();

  useEffect(() => {
    let mounted = false;

    if (!mounted) {
      if (location || shoesData.length === 0) {
        let category = searchParams.getAll("category");

        let queryParams = {
          params: {
            category,
          },
        };

        getShoeData(queryParams);
      }
    }

    return () => {
      mounted = true;
    };

    // eslint-disable-next-line
  }, [location.search]);

  const getShoeData = async (queryParams) => {
    dispatch(shoesAction.getShoeDataRequest());

    try {
      const { data } = await axios.get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes`,
        queryParams
      );

      dispatch(shoesAction.getShoeDataSuccess(data));
      // console.log("resp:", data);
    } catch (err) {
      dispatch(shoesAction.getShoeDataFailure());
      console.log("err:", err);
    }
  };

  return (
    <div style={{ display: "flex", gap: "7rem", margin: "0 7rem 0 3rem" }}>
      <Filter />

      <div
        style={{
          flex: 7,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 21,
        }}
      >
        {/* Map through the shoes list here using ShoeCard Component */}

        {shoesData?.map((s, i) => {
          return <ShoeCard key={i} shoeId={s} />;
        })}
      </div>
    </div>
  );
};

export default Shoes;
