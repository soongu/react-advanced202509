import styles from './Header.module.scss';

import HeaderCartButton from './HeaderCartButton';

// 리액트 컴포넌트에서 정적 이미지 로딩
import foodImage from '../../assets/img/meals.jpg';

const Header = () => {
  const { header, 'main-image': mainImage } = styles;

  return (
    <>
      <header className={header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={mainImage}>
        <img
          src={foodImage}
          alt='맛있어 보여~'
        />
      </div>
    </>
  );
};

export default Header;
