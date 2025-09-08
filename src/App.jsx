import './App.css';
import CartProvider from './context/CartProvider.jsx';
import MainCart from './components/Layout/MainCart.jsx';

const App = () => {

  return <>
    {/* value속성에 하위컴포넌트들이 공유할 상태값들을 명시 */}
    <CartProvider>
      <MainCart />
    </CartProvider>
  </>;
};

export default App;
