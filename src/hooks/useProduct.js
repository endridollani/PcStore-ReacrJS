import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default (productId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/" + productId)
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return data;
};
