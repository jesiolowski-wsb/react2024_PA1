import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const formatCount = () => (count === 0 ? "Zero" : count);
  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  const handleIncrement = (incrementBy) => {
    setCount(count + incrementBy);
  };

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button onClick={() => handleIncrement(10)} className="btn btn-secondary">
        increment
      </button>
    </>
  );
}

export default Counter;
