import React, { useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(props.value);

  const formatCount = () => (value === 0 ? "Zero" : value);
  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";

  const handleIncrement = (incrementBy) => {
    setValue(value + incrementBy);
  };

  return (
    <>
      <span className={classes}>{formatCount()}</span>
      <button onClick={() => handleIncrement(10)} className="btn btn-secondary">
        +
      </button>
      <button
        onClick={() => props.onDelete(props.id)}
        className="btn btn-sm btn-danger m-2"
      >
        Delete
      </button>
    </>
  );
};

export default Counter;
