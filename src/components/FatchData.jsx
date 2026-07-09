import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const FatchData = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>first post title</h1>
      {data.length > 0 ? <h1>{data[0].title}</h1> : <h1>loading ...</h1>}
    </div>
  );
};

export default FatchData;
