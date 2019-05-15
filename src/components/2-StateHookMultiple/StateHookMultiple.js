import React, { useState } from 'react';

const StateHookMultiple = () => {
  const [firstName, setFirstName] = useState('firstName');
  const [lastName, setLastName] = useState('lastName');

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <div>
        <input value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <input value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </div>
      <div>
        {firstName} {lastName}
      </div>
    </div>
  );
};

export default StateHookMultiple;
