import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((data) => {
      setData(data.data);
    });
  }, []);

  return data;
};
