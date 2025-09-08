import React, {useContext} from 'react';
import Cart from '../Cart/Cart.jsx';
import Header from './Header.jsx';
import Meals from '../Meals/Meals.jsx';
import CartContext from '../../context/cart-context.js';

const MainCart = () => {

  const {cartIsShown} = useContext(CartContext);

  return (
    <>
      {cartIsShown && <Cart />}
      <Header />
      <div id="main">
        <Meals />
      </div>
    </>
  );
};

export default MainCart;