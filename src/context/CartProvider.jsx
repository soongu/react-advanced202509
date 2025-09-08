import React, {useState} from 'react';
import CartContext from './cart-context.js';

const CartProvider = ({children}) => {

  // 장바구니 모달을 여닫는 상태변수
  const [cartIsShown, setCartIsShown] = useState(false);

  // 모달을 열어주는 함수
  const handleShowCart = () => setCartIsShown(true);

  // 모달을 닫아주는 함수
  const handleHideCart = () => setCartIsShown(false);

  // 컨텍스트가 관리할 중앙 상태값
  const initialValue = {
    cartIsShown,
    openModal: handleShowCart,
    closeModal: handleHideCart
  };

  return (
    <CartContext.Provider value={initialValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;