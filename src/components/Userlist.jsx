import React from "react";

const Userlist = () => {
  const useARRAY = [
    { name: "umesh", age: 6, class: 6 },
    { name: "vikas", age: 6, class: 5 },
    { name: "shiv", age: 7, class: 6 },
  ];
  return (
    <div>
      <h1>students</h1>
      {useARRAY.map((x) => (
        <ul key={Math.random()}>
          <li>name:{x.name}</li>
          <li>class:{x.class}</li>
          <li>age:{x.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default Userlist;
