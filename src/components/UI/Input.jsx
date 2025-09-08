import React from 'react';
import styles from './Input.module.scss';

// 재사용 가능한 컴포넌트 만들고 싶음.
// 가변 props 처리방법
const Input = ({ label, inputAttr }) => {
  return (
    <div className={styles.input}>
      <label>{label}</label>
      <input {...inputAttr} />
    </div>
  );
};

export default Input;
