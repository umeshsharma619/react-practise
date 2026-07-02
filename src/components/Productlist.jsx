import React from "react";

const Productlist = () => {
  const productarrat = [
    { name: "laptop", id: 1, price: "800$" },
    { name: "mobile", id: 2, price: "400$" },
    { name: "tablate", id: 3, price: "600$" },
  ];
  return (
    <div>
      <h1>products</h1>
      {productarrat.map((x) => (
        <ul key={x.id}>
          <li>{x.name}</li>
          <li>{x.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default Productlist;
