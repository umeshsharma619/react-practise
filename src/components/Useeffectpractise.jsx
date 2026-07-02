import React, { useEffect, useState } from "react";

const Useeffectpractise = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("run evrery time when component rerender");
  });
  useEffect(() => {
    console.log("run only once when component mount");
  }, []);
  useEffect(() => {
    console.log("run only once when component rerender beacuse count");
  }, [count]);
  return (
    <div>
      <h1> count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>add</button>
      <h1> value:{value}</h1>
      <button onClick={() => setValue(value + 1)}>add in value</button>
    </div>
  );
};

export default Useeffectpractise;
