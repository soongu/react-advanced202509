import React, {useContext} from 'react';
import styles from './Cart.module.scss';
import CartModal from './CartModal';
import CartContext from '../../context/cart-context.js';
import CartItem from './CartItem.jsx';

const Cart = () => {

  const { closeModal, cartItems } = useContext(CartContext);

  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  return (
    <CartModal onClose={closeModal}>
      {/* 주문 내역 */}
      <ul className={cartItemStyle}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cart={cartItem} />
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>58,000원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={closeModal}>닫기</button>
        <button className={button}>주문</button>
      </div>
    </CartModal>
  );
};

export default Cart;
