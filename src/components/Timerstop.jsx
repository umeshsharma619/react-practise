import { useEffect, useRef, useState } from "react";

function Timerstop() {
  const [count, setCount] = useState(0);

  const intervelref = useRef(null);

  useEffect(() => {
    intervelref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return clearInterval(intervelref.current);
  }, [count]);
  return (
    <div>
      <h1>{count}seconds</h1>
      <button onClick={clearInterval(intervelref.current)}>stop</button>
    </div>
  );
}

export default Timerstop;
