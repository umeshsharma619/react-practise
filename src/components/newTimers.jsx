import React, { useEffect, useState } from "react";

const NewTimers = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      {count}
      <button onClick={(id) => clearInterval(id)}>stop</button>
    </div>
  );
};

export default NewTimers;
