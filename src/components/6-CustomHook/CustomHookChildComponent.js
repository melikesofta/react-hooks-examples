import React from 'react';
import usePowers from './usePowers';

const CustomHookChildComponent = (props) => {
  const { initialNumber } = props;

  const number = usePowers(initialNumber);

  return (
    <div>
      Powers of {initialNumber}: {number}
    </div>
  );
};

export default CustomHookChildComponent;
