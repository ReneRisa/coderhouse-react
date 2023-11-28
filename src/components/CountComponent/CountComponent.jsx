import { useState } from "react";
const CountComponent = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={increase}>+</button>
      <div>{count}</div>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default CountComponent;
