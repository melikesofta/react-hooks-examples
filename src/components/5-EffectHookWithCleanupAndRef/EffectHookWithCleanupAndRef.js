import React, { useState, useRef, useEffect } from 'react';

const EffectHookWithCleanupAndRef = () => {
  const [second, setSecond] = useState(1);
  const [isCounting, setIsCounting] = useState(true);
  const intervalRef = useRef();

  const stopCounter = () => {
    setIsCounting(false);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [intervalRef]);

  return (
    <div>
      <span style={{ margin: 15 }}>
        second: {second}
      </span>
      {
        isCounting &&
        <button onClick={stopCounter}>stop counter</button>
      }
    </div>
  );
};

export default EffectHookWithCleanupAndRef;
