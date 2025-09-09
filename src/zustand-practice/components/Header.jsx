import styles from './Header.module.scss';

const Header = () => {


  return (
    <header className={styles.header}>
      <h1>Zustand Auth</h1>

      <nav>
        <ul>
          <li>
            <a href="/public">My Products</a>
          </li>
          <li>
            <a href="/public">My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
