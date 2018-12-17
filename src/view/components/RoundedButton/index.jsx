import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './style.sass';

class RoundedButton extends PureComponent {
  constructor (props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    if (!this.props.disabled) {
      this.props.onClick();
    }
  }

  render () {
    const {children, disabled, type} = this.props;

    return (
      <div
        className={classNames(
          style.roundedButton,
          {
            [style.__disabled]: disabled,
            [style[`__${type}`]]: !disabled
          }
        )}
        onClick={this.onClick}
      >
        {children}
      </div>
    );
  }
}

RoundedButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node
  ]).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    'regular',
    'success',
    'danger'
  ])
};

RoundedButton.defaultProps = {
  disabled: false,
  onClick: () => null,
  type: 'regular'
};

export default RoundedButton;
