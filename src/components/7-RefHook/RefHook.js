import React, { useRef } from 'react';

const RefHook = () => {
  const inputElement = useRef(null);
  const onClick = () => {
    // `current` points to the mounted text input element
    inputElement.current.focus();
  };

  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onClick}>Focus input</button>
    </>
  );
};

export default RefHook;
