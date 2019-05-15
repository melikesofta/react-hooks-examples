import React, { useState, useEffect } from 'react';

const EffectHookSimple = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <button onClick={() => {setCount(count + 1);}}>
      Increment document title
    </button>
  );
};

export default EffectHookSimple;
