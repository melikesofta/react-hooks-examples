import React from 'react';
import CustomHookChildComponent from './CustomHookChildComponent';

const CustomHookWrapper = () => {
  return (
    <div>
      These components share the stateful logic:
      <CustomHookChildComponent initialNumber={2} />
      <CustomHookChildComponent initialNumber={3} />
    </div>
  );
};

export default CustomHookWrapper;
