import styles from './ZustandCounter.module.scss';
import {useCounterStore} from '../store/counterStore.js';

const ZustandCounter = () => {

  // 상태 구독
  const { count, showCounter } = useCounterStore();
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
        <button>Increment</button>
        <button>Decrement</button>
        <button>×3</button>
      </div>
      <button>Toggle Counter</button>
    </main>
  );
};

export default ZustandCounter;
