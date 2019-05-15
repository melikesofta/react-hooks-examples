import React, { useState, useEffect } from 'react';

const EffectHookWithCleanup = () => {
  const [second, setSecond] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(second);
      setSecond(second+1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [second]);

  return (
    <span style={{ margin: 15 }}>
      This effect logs the seconds to console.
    </span>
  );
};

export default EffectHookWithCleanup;
