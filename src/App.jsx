import React, { useState } from 'react';

import Counter from './optimizing/components/Counter/Counter';
import Header from './optimizing/components/Header';
import { log } from './optimizing/log';
import './App.css';
import ConfigureCounter from './optimizing/components/Counter/ConfigureCounter.jsx';

const App = () => {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  const setCounterHandler = number => {
    setChosenCount(number);
  };

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={setCounterHandler} />
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
};

export default App;
