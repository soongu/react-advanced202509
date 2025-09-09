import React from 'react';

import './App.css';
import ZustandCounter from './zustand-practice/components/ZustandCounter.jsx';
import Header from './zustand-practice/components/Header.jsx';
import Auth from './zustand-practice/components/Auth.jsx';
import UserProfile from './zustand-practice/components/UserProfile.jsx';
import {useAuthStore} from './zustand-practice/store/authStore.js';

const App = () => {

  const {isLoggedIn} = useAuthStore();

  return (
    <>
      <Header />
      {isLoggedIn ? <UserProfile /> : <Auth/>}
      <ZustandCounter />
    </>
  );
};

export default App;
