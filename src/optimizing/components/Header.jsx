import React from 'react';
import { log } from '../log';

const Header = () => {
  log('<Header /> rendered!!', 1);

  return (
    <header id='main-header'>
      <h1>React Optimizing</h1>
    </header>
  );
};
export default React.memo(Header);
