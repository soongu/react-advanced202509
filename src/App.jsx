import React, { useState } from 'react';

import Counter from './optimizing/components/Counter/Counter';
import Header from './optimizing/components/Header';
import { log } from './optimizing/log';
import './App.css';

const App = () => {
  log('<App /> rendered');

  const [enteredNumber, setEnteredNumber] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);

  const changeHandler = (e) => {
    setEnteredNumber(+e.target.value);
  };

  const setClickHandler = () => {
    setChosenCount(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <>
      <Header />
      <main>
        <section id='configure-counter'>
          <h2>Set Counter</h2>
          <input
            type='number'
            onChange={changeHandler}
            value={enteredNumber}
          />
          <button onClick={setClickHandler}>Set</button>
        </section>
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
};

export default App;
