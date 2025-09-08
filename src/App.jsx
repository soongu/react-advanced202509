import Header from "./components/Layout/Header";
import './App.css';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart.jsx';
import {useState} from 'react';

const App = () => {

  // 장바구니 모달을 여닫는 상태변수
  const [cartIsShown, setCartIsShown] = useState(false);

  // 모달을 열어주는 함수
  const handleShowCart = () => setCartIsShown(true);

  // 모달을 닫아주는 함수
  const handleHideCart = () => setCartIsShown(false);

  return <>
    {cartIsShown && <Cart onClose={handleHideCart} />}
    <Header onShowCart={handleShowCart} />
    <div id="main">
      <Meals />
    </div>
  </>;
};

export default App;
