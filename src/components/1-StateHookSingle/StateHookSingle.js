import React, { useState } from 'react';

const StateHookSingle = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span style={{ padding: 15 }}>
        State variable: {count}
      </span>
      <button onClick={() => { setCount((prevCount) => prevCount+1); }}> {/* or just setCount(count+1) */}
        increment
      </button>
    </div>
  );
};

export default StateHookSingle;
