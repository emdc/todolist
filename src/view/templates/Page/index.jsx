import {Header} from 'view/templates';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import style from './style.scss';

const Page = ({
  children,
  className
}) => (
  <div>
    <Header />
    <div className={classNames(
      style.page,
      className
    )}>
      {children}
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

Page.defaultProps = {className: null};

export default Page;
