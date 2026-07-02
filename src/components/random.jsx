import React, { useState } from "react";

const Random = () => {
  const [random, setRandom] = useState(() => {
    const randomnumber = Math.round(Math.random() * 100);
    return randomnumber;
  });
  return (
    <div>
      <h1>count:{random}</h1>
      <button onClick={() => setRandom(Math.round(Math.random() * 100))}>
        newnumber
      </button>
    </div>
  );
};

export default Random;
