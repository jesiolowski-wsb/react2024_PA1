import React, { useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(props.value);

  console.log("props:", props);

  const formatCount = () => (value === 0 ? "Zero" : value);
  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";

  const handleIncrement = (incrementBy) => {
    setValue(value + incrementBy);
  };

  return (
    <>
      {props.children}
      <span className={classes}>{formatCount()}</span>
      <button onClick={() => handleIncrement(10)} className="btn btn-secondary">
        increment
      </button>
    </>
  );
};

export default Counter;
