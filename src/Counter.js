import React, { useState } from "react";
export default function Counter() {
  const [myState, setState] = useState(0);
  const minusChangeHandler = (event) => {
    setState((prevState) => {
      return prevState - 1;
    });
    event.target.nextElementSibling.nextElementSibling.classList.remove(
      "hello"
    );
  };
  const plusChangeHandler = (event) => {
    console.log(event.target.className);

    setState((prevState) => {
      if (prevState === 10) {
        console.log("first");
      }
      return prevState + 1;
    });
    event.target.classList.add("hello");
  };
  return (
    <div>
      <button onClick={minusChangeHandler}>-</button>
      <span>{myState}</span>
      <button onClick={plusChangeHandler}>+</button>
    </div>
  );
}
