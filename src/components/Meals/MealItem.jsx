import styles from './MealItem.module.scss';
import MealItemForm from './MealItemForm';

const MealItem = ({ id, price, description, name }) => {

  const { meal, description: desc, price: priceStyle } = styles;

  const formatPrice = new Intl.NumberFormat('ko-KR').format(price);

  // Cart.jsx에게 보낼 데이터를 생성하는 함수
  // 선택한 수량 끌어올리기
  const handleAddToCart = (amount) => {
    console.log('선택한 수량: ', amount);
  };

  return (
    <li className={meal}>
      <div>
        <h3>{name}</h3>
        <div className={desc}>{description}</div>
        <div className={priceStyle}>{formatPrice}원</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};

export default MealItem;
