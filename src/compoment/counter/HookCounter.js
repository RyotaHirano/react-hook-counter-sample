import React, { useState } from 'react';
import './Counter.css';

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="Counter">
      <b>Counter(Hook)</b>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <span className="Counter-count">{count}</span>
    </div>
  )
}

export default HookCounter;