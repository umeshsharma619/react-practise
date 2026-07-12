import React, { useId } from "react";

const UseIduse = () => {
  let id = useId();
  return (
    <div>
      <label htmlFor={`${id}--email`}></label>
      <input type="email" id={`${id}--email`} />
    </div>
  );
};

export default UseIduse;
