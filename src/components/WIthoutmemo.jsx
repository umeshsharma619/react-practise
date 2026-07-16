import React, { useMemo, useState } from "react";

const WIthoutmemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  function expensivecalc() {
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }
  const result = expensivecalc();
  return (
    <div>
      <h1>{result}</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>add</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default WIthoutmemo;

const filteruser = useMemo(()=>{
 return Users.filter((user)=>user.active)
},[users])
