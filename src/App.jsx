import React, { useState } from 'react';

import './App.css';
import ZustandCounter from './zustand-practice/components/ZustandCounter.jsx';
import {useCounterStore} from './zustand-practice/store/counterStore.js';

const App = () => {

  const {count} = useCounterStore();

  return (
    <>
      <h1>Count {count}</h1>
      <ZustandCounter />
    </>
  );
};

export default App;
