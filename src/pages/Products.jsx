import React from "react";
import products from "./data";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {
    const navigation = useNavigate()
    const location = useLocation()
  return (
    <div>
      {products.map((e, i) => (
        <div>
          <h4>{e.name}</h4>
          <h3>ID: {i + 1}</h3>
          <img src={e.image} alt="pictcher" />
          <button onClick={()=>location(navigation.pathname+(i + 1))}>להזמנה</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
