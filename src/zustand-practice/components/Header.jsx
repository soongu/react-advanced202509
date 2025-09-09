import styles from './Header.module.scss';
import {useAuthStore} from '../store/authStore.js';

const Header = () => {

  const {isLoggedIn, logout} = useAuthStore();

  return (
    <header className={styles.header}>
      <h1>Zustand Auth</h1>

      {isLoggedIn && <nav>
        <ul>
          <li>
            <a href="/public">My Products</a>
          </li>
          <li>
            <a href="/public">My Sales</a>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
