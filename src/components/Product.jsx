import React from "react";

const Product = () => {
  const productinfo = { name: "laptop", brand: "apple", price: "800$" };
  return (
    <>
      <p>name:{productinfo.name}</p>
      <p>price:{productinfo.price}</p>
      <p>brand:{productinfo.brand}</p>
    </>
  );
};

export default Product;
