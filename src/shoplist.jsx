import React, { useState } from "react";

const ShoppinLIst = () => {
  const [item, setItem] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const newItem = { name, quantity: parseInt(quantity) };
    if (!name || !quantity) return;

    setItem((prev) => [...prev, newItem]);
    setQuantity("");
    setName("");
  };
  return (
    <div>
      <h1> add items to your shoppinglist</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter your item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">name</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="enter your item quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <h1>yor shooping list</h1>
      <ul>
        {item.map((items) => (
          <li key={Math.random()}>
            {items.name} - quantity : {items.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppinLIst;
