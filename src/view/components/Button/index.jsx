import PropTypes from 'prop-types';
import React from 'react';
import style from './style.sass';


const Button = ({children, onClick}) => (
  <button
    className={style.button}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: () => null
};

export default Button;
