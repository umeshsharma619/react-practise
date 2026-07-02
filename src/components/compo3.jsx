import { useContext } from "react";
import { Dataa, Dataa1 } from "../App";

const Compo3 = () => {
  const bikename = useContext(Dataa);
  const bikerate = useContext(Dataa1);
  return (
    <div>
      <h1>
        {bikename} and price is {bikerate}
      </h1>
    </div>
  );
};

export default Compo3;
