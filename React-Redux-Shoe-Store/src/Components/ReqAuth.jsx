//Create the HOC for protected Routes

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReqAuth = (OriginalComp) => {
  const NewComp = () => {
    const { id } = useParams();
    const [singleShoeData, setSingleShoeData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/shoes/${id}`
          );

          setSingleShoeData(data);

          console.log("resp:", data);
        } catch (err) {
          console.log("err:", err);
        }
      };

      fetchData();
    }, [id]);

    // *******

    return <OriginalComp singleShoeData={singleShoeData} />;
  };

  return NewComp;
};

export default ReqAuth;
