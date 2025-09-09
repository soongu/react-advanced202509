import styles from './ZustandCounter.module.scss';
import {useCounterStore} from '../store/counterStore.js';

const ZustandCounter = () => {

  // 상태 구독
  const { count, showCounter, increment, decrement, multiply, toggle } = useCounterStore();
  // console.log('x: ', x);

  return (
    <main className={styles.counter}>
      <h1>Zustand Counter</h1>
      {showCounter && <div className={styles.value}>{count}</div>}
      <div
        style={{
          display: 'flex',
          gap: 8,
          justifyContent: 'center',
          marginBottom: 8,
        }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={() => multiply(3)}>×3</button>
      </div>
      <button onClick={toggle}>Toggle Counter</button>
    </main>
  );
};

export default ZustandCounter;
