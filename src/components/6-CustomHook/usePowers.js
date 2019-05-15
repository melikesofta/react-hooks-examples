import { useState, useEffect } from 'react';

const usePowers = (initialNumber) => {
  const [number, setNumber] = useState(initialNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 10000000000) { // stop incrementing after the number gets big.
        setNumber(number * initialNumber);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [initialNumber, number]);

  return number;
};

export default usePowers;
