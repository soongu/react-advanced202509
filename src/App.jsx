import Header from "./components/Layout/Header";
import './App.css';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart.jsx';
import {useState} from 'react';
import CartContext from './context/cart-context.js';

const App = () => {

  // 장바구니 모달을 여닫는 상태변수
  const [cartIsShown, setCartIsShown] = useState(false);

  // 모달을 열어주는 함수
  const handleShowCart = () => setCartIsShown(true);

  // 모달을 닫아주는 함수
  const handleHideCart = () => setCartIsShown(false);

  return <>
    {/* value속성에 하위컴포넌트들이 공유할 상태값들을 명시 */}
    <CartContext.Provider value={{
      openModal: handleShowCart,
      closeModal: handleHideCart
    }}>
      {cartIsShown && <Cart />}
      <Header />
      <div id="main">
        <Meals />
      </div>
    </CartContext.Provider>
  </>;
};

export default App;
