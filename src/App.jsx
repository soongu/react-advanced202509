import React from 'react';

import './App.css';
import ZustandCounter from './zustand-practice/components/ZustandCounter.jsx';
import Header from './zustand-practice/components/Header.jsx';
import Auth from './zustand-practice/components/Auth.jsx';

const App = () => {

  return (
    <>
      <Header />
      <Auth />
      <ZustandCounter />
    </>
  );
};

export default App;
