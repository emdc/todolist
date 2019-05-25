import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';


const Link = ({link, location, click}) => (
  <a
    className={classNames(
      styles.link,
      {active: location.pathname === link.url}
    )}
    onClick={() => click(link.url, location.pathname)}
  >
    {link.caption}
  </a>
);

Link.propTypes = {
  click: PropTypes.func.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Link;
