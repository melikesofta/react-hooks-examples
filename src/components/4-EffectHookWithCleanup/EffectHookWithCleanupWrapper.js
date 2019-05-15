import React, { useState } from 'react';
import EffectHookWithCleanup from './EffectHookWithCleanup';

const EffectHookWithCleanupWrapper = () => {
  const [shouldDisplayEffect, setShouldDisplayEffect] = useState(true);

  const toggleShouldDisplayEffect = () => {
    setShouldDisplayEffect(!shouldDisplayEffect);
  };

  return (
    <div>
      {shouldDisplayEffect && <EffectHookWithCleanup />}
      <button onClick={toggleShouldDisplayEffect}>
        {shouldDisplayEffect ? 'unmount' : 'mount'}
      </button>
    </div>
  );
};

export default EffectHookWithCleanupWrapper;
