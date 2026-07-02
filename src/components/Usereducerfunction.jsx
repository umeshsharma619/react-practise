import { Action } from "@remix-run/router";
import React, { useReducer, useState } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    case "incrementbyamount":
      return { count: state.count + action.payload };
    case "decrementbyamount":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const Usereducerfunction = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputvalue, setInput] = useState(0);

  const handleincrement = () => {
    dispatch({ type: "incrementbyamount", payload: +inputvalue });
    setInput("");
  };
  const handledecrement = () => {
    dispatch({ type: "decrementbyamount", payload: +inputvalue });
    setInput("");
  };

  return (
    <div>
      <h1>count:{state.count}</h1>
      <h2>count change by one</h2>
      <button onClick={() => dispatch({ type: "increment" })}>add</button>
      <button onClick={() => dispatch({ type: "decrement" })}>divide</button>
      <button onClick={() => dispatch({ type: "reset" })}>rset</button>

      <h2>count change by input</h2>

      <input
        type="number"
        placeholder="enter amount to increse"
        value={inputvalue}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleincrement}>addbyamount</button>
      <button onClick={handledecrement}>minusbyamount</button>
    </div>
  );
};

export default Usereducerfunction;
