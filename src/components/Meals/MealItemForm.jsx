import Input from '../UI/Input';
import styles from './MealItemForm.module.scss';
import {useRef} from 'react';

const MealItemForm = ({id, onAddToCart}) => {

  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    onAddToCart(inputRef.current.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        label='수량'
        inputAttr={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>담기</button>
    </form>
  );
};

export default MealItemForm;
