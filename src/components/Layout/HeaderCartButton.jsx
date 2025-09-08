import React, {useContext} from 'react';
import CartIcon from './CartIcon';
import styles from './HeaderCartButton.module.scss';
import CartContext from '../../context/cart-context.js';

const HeaderCartButton = () => {

  const { openModal } = useContext(CartContext);

  const { button, icon, badge } = styles;

  return (
    <button className={button} onClick={openModal}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
