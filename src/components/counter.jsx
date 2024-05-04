import React from "react";

const Counter = ({ counter, onIncrement, onDelete, onDecrement }) => {
  const formatCount = () => (counter.value === 0 ? "Zero" : counter.value);
  let classes = "badge m-2 badge-";
  classes += counter.value === 0 ? "warning" : "primary";

  return (
    <div>
      <span className={classes}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className="btn btn-secondary btn-sm"
      >
        +
      </button>
      <button
        onClick={() => onDecrement(counter)}
        className="btn btn-secondary btn-sm m-2"
        disabled={counter.value === 0}
      >
        -
      </button>

      <button
        onClick={() => onDelete(counter.id)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
