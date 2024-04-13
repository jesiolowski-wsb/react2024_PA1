import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [tagsList, setTagsList] = useState([]);

  const formatCount = () => (count === 0 ? "Zero" : count);
  let classes = "badge m-2 badge-";
  classes += count === 0 ? "warning" : "primary";

  const renderTags = () =>
    tagsList ? (
      <ul>
        {tagsList.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    ) : (
      <p>There are no tags</p>
    );

  const handleIncrement = () => {
    return setCount(count + 1);
  };

  return (
    <>
      {renderTags()}
      <span className={classes}>{formatCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary">
        increment
      </button>
    </>
  );
}

export default Counter;
