import React, {useState} from 'react';
import {log} from '../../log.js';

const ConfigureCounter = ({ onSet }) => {

  log('<ConfigureCounter /> rendered', 1);

  const [enteredNumber, setEnteredNumber] = useState(0);

  const changeHandler = (e) => {
    setEnteredNumber(+e.target.value);
  };

  const setClickHandler = () => {
    onSet(enteredNumber);
    setEnteredNumber(0);
  };

  return (
    <section id='configure-counter'>
      <h2>Set Counter</h2>
      <input
        type='number'
        onChange={changeHandler}
        value={enteredNumber}
      />
      <button onClick={setClickHandler}>Set</button>
    </section>
  );
};

export default ConfigureCounter;