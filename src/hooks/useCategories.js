import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/category')
      .then((data) => {
        setCats(data.data)
      })
  }, [])

  return cats
}