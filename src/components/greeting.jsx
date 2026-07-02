import React from "react";

const Greeting = () => {
  const name = "umesh";
  const date = new Date();
  return (
    <div>
      <h1>good morning {name}</h1>
      <p>date:{date.getDate()}</p>
    </div>
  );
};

export default Greeting;
