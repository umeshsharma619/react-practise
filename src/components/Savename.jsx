import React, { useEffect, useState } from "react";

const Savename = () => {
  const [name, setName] = useState(() => {
    const savedname = localStorage.getItem("name");
    return savedname ? JSON.parse(savedname) : "";
  });
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  });
  return (
    <div>
      <h1>your name:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>clear</button>
    </div>
  );
};

export default Savename;
