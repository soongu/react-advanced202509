
import styles from './CartItem.module.scss';
import {useContext} from 'react';
import CartContext from '../../context/cart-context.js';

const CartItem = ({ cart }) => {

  console.log('cart: ', cart);

  const {addToCartItem} = useContext(CartContext);

  const { id, name, price, amount } = cart;

  const {
    'cart-item': cartItem,
    summary,
    price: priceStyle,
    amount: amountStyle,
    actions,
  } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);


  const handleAddClick = e => {
    addToCartItem({
      id,
      name,
      amount: 1,
      price: price / amount
    });
  };

  return (
    <li className={cartItem}>
      <div>
        <h2>{name}</h2>
        <div className={summary}>
          <span className={priceStyle}>{formatPrice}</span>
          <span className={amountStyle}>x {amount}</span>
        </div>
      </div>
      <div className={actions}>
        <button>−</button>
        <button onClick={handleAddClick}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
