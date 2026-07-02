import React, { useRef } from "react";

const Userefpractise = () => {
  const inputElement = useRef(null);
  const focusinput = () => {
    inputElement.current.focus();
    inputElement.current.value = "umesh sharma";
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusinput()}>focus</button>
    </div>
  );
};

export default Userefpractise;
