import axios from "axios";
import React, { useEffect, useState } from "react";

const HOC = (OriginalComp) => {
  const NewComp = ({ userId, ...props }) => {
    // { userId, ...props } :- See App.js

    const [user, setUser] = useState(null);

    useEffect(() => {
      let mounted = false;

      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          if (!mounted) {
            setUser(res.data);
          }
        })
        .catch((err) => {
          console.log("err:", err);
        });

      return () => {
        mounted = true;
      };

      // eslint-disable-next-line
    }, []);

    if (!user) return "Loading...";
    return <OriginalComp {...props} user={user} />;
  };

  return NewComp;
};
export default HOC;
