import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  const intervelref = useRef(null);
  useEffect(() => {
    intervelref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervelref.current);
    };
  }, []);

  return (
    <div>
      <h1>timer:{count}seconds</h1>
      <button onClick={() => clearInterval(intervelref.current)}>
        stoptimer
      </button>
    </div>
  );
};

export default Timer;
