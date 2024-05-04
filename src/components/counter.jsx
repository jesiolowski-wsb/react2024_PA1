import React from "react";

const Counter = (props) => {
  const formatCount = () =>
    props.counter.value === 0 ? "Zero" : props.counter.value;
  let classes = "badge m-2 badge-";
  classes += props.counter.value === 0 ? "warning" : "primary";

  return (
    <div>
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary"
      >
        +
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-sm btn-danger m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
