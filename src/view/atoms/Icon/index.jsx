import * as React from 'react';
import {
  faCheck,
  faExclamation,
  faPencilAlt,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {library} from '@fortawesome/fontawesome-svg-core';
import styles from './styles.scss';


library.add(
  faCheck,
  faExclamation,
  faPencilAlt,
  faSearch,
);

const Icon = ({className, icon, onClick, size}) => (
  <div
    className={classNames(
      styles.icon,
      // $flow-disable-next-line
      {[className]: className}
    )}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} size={size} />
  </div>
);

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  onClick: PropTypes.func,
  size: PropTypes.string
};

Icon.defaultProps = {
  className: '',
  onClick: () => null,
  size: 'sm'
};

Object.defineProperty(Icon, 'List', {
  enumerable: false,
  writable: false,
  configurable: false,
  value: {
    CHECK: ['fas', 'check'],
    EXCLAMATION: ['fas', 'exclamation'],
    PENCIL: ['fas', 'pencil-alt'],
    SEARCH: ['fas', 'search']
  }
});

/* eslint-disable id-length */
Object.defineProperty(Icon, 'Size', {
  enumerable: false,
  writable: false,
  configurable: false,
  value: {
    XS: 'xs',
    S: 'sm',
    L: 'lg',
    XL: '2x',
    XXL: '3x',
    XXXL: '5x',
    XXXXL: '7x',
    XXXXXL: '9x'
  }
});
/* eslint-enable id-length */

export default Icon;
