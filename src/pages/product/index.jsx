import React from "react";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate(-1)}>back</button>
      <h1>products</h1>
    </div>
  );
};

export default index;