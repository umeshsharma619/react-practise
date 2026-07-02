import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodos] = useState([]);
  const [inputvalue, setInput] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (inputvalue != 0) {
      setTodos((prev) => [...prev, inputvalue]);
      setInput("");
    }
  };
  return (
    <div>
      <h1>add todos</h1>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          value={inputvalue}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            padding: "12px",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          add todo
        </button>
      </form>

      <h1>your todos</h1>
      <ul>
        {todo.map((x) => (
          <li key={Math.random()}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
