import React from 'react';
import StateHookSingle from './components/1-StateHookSingle/StateHookSingle';
import StateHookMultiple from './components/2-StateHookMultiple/StateHookMultiple';
import EffectHookSimple from './components/3-EffectHookSimple/EffectHookSimple';
import EffectHookWithCleanupWrapper from './components/4-EffectHookWithCleanup/EffectHookWithCleanupWrapper';
import EffectHookWithCleanupAndRef from './components/5-EffectHookWithCleanupAndRef/EffectHookWithCleanupAndRef';
import CustomHookWrapper from './components/6-CustomHook/CustomHookWrapper';
import RefHook from './components/7-RefHook/RefHook';

const Divider = () => {
  return (
    <div style={{ width: '100%', height: 1, backgroundColor: 'grey', margin: '30px 0' }} />
  );
};

const Section = (props) => {
  const { header } = props;

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <h3 style={{ flex: 0.4 }}>{header}</h3>
        <div style={{ flex: 0.6, alignItems: 'center' }}>
          {props.children}
        </div>
      </div>
      <Divider />
    </div>
  );
};

const App = () => {
  return (
    <div style={{ fontFamily: 'Helvetica', textAlign: 'center', padding: '30px 0' }}>
      <Section header="1- StateHookSingle">
        <StateHookSingle />
      </Section>
      <Section header="2- StateHookMultiple">
        <StateHookMultiple />
      </Section>
      <Section header="3- EffectHookSimple">
        <EffectHookSimple />
      </Section>
      <Section header="4- EffectHookWithCleanup">
        <EffectHookWithCleanupWrapper />
      </Section>
      <Section header="5- EffectHookWithCleanupAndRef">
        <EffectHookWithCleanupAndRef />
      </Section>
      <Section header="6- CustomHook">
        <CustomHookWrapper />
      </Section>
      <Section header="7- RefHook">
        <RefHook />
      </Section>
    </div>
  );
};

export default App;
