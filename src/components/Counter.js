import React, { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);

  function handleClick() {
    setCount((curr) => curr + 1);
  }
  return (
    <div>
      <p>{`Button clicked ${count} times`}</p>
      <br></br>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
