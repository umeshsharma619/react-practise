import React, { useEffect, useLayoutEffect } from "react";

const Userlay = () => {
  useEffect(() => {
    console.log("hello use effect");
  });
  useLayoutEffect(() => {
    console.log("hello uselayouteffect");
  });
  return <div>Useerlay</div>;
};

export default Userlay;
