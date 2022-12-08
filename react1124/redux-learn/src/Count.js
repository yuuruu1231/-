import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

function Count() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };
  return (
    <>
      <div>Countコンポーネント:{count}</div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </>
  );
}
export default Count;