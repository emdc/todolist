import React from 'react';
import style from './style.sass';

const Header = ({}) => {
  return (
    <div className={style.header}>
      <h1>{'ToDo List'}</h1>
    </div>
  );
};

Header.propTypes = {};

export default Header;
