import Header from "./components/Layout/Header";
import './App.css';
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart.jsx';

const App = () => {
  return <>
    <Cart />
    <Header />
    <div id="main">
      <Meals />
    </div>
  </>;
};

export default App;
