import { useEffect, useState } from "react";

const FatchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getdata() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();

      return setData(data);
    }
    getdata();
  }, []);

  return (
    <div>
      <h1>first post title</h1>
      {data.length > 0 ? <h1>{data[0].title}</h1> : <h1>loading ...</h1>}
    </div>
  );
};

export default FatchData;
