// React batches state updates within the same event.
// State changes (like isVisible) do not take effect immediately after calling setVisibility.
// React waits until the event handler (handleClick) completes, then updates the state and re-renders.
// Therefore, console.log(isVisible) inside handleClick will show the previous value.

import { useState } from "react";

export default function Asynchronously() {
  const [isVisible, setVisibility] = useState(false);

  const handleClick = () => {
    setVisibility(true);
    console.log(isVisible); // State update is asynchronous; this logs the old value
  };
  return (
    <>
      <button onClick={handleClick}>Show</button>
      {isVisible ? <h1>Hello</h1> : <h1>NOT</h1>}
    </>
  );
}
