import styles from './Auth.module.scss';
import {useAuthStore} from '../store/authStore.js';

const Auth = () => {

  const {login} = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={styles.control}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
