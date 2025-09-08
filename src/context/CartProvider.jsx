import React, {useState} from 'react';
import CartContext from './cart-context.js';

const CartProvider = ({children}) => {

  // 장바구니 배열을 상태 관리
  const [cartItems, setCartItems] = useState([]);

  // 장바구니 모달을 여닫는 상태변수
  const [cartIsShown, setCartIsShown] = useState(false);

  // 장바구니에 데이터를 추가하는 함수
  const handleAddToCartItem = (newItem) => {

    // 원본 장바구니배열을 복사
    const existingItems = [...cartItems];
    // 이미 장바구니에 있는 항목인지를 체크
    const foundItem = existingItems.find(cartItem => cartItem.id === newItem.id);

    if (foundItem) { // 기존에 있는 아이템
      foundItem.amount += newItem.amount;
      foundItem.price += newItem.price;
      setCartItems(existingItems); // 원본에 수정된 복사배열 갱신
    } else { // 새롭게 추가된 아이템
      setCartItems([...cartItems, newItem]);
    }

  };

  // 장바구니 삭제 함수
  const handleRemoveToCartItem = () => {};

  // 모달을 열어주는 함수
  const handleShowCart = () => setCartIsShown(true);

  // 모달을 닫아주는 함수
  const handleHideCart = () => setCartIsShown(false);

  // 컨텍스트가 실제로 관리할 중앙 상태값
  const initialValue = {
    cartIsShown,
    openModal: handleShowCart,
    closeModal: handleHideCart,
    cartItems,
    addToCartItem: handleAddToCartItem,
    removeToCartItem: handleRemoveToCartItem
  };

  return (
    <CartContext.Provider value={initialValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;