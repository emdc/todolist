import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {debounce} from 'lodash';
import style from './style.scss';


const DEBOUNCE_TIME = 300;

class Input extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {value: props.value};

    this.onChangeDebounced = debounce(this.props.onChange, DEBOUNCE_TIME);

    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange (e) {
    this.setState({value: e.target.value});
    this.onChangeDebounced(e.target.value);
  }

  onKeyPress (e) {
    if (e.key === 'Enter') {
      this.props.onEnterPress(this.state.value);
    }
  }

  render () {
    const {placeholder} = this.props;
    const {value} = this.state;

    return (
      <div>
        <input
          className={style.input}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          placeholder={placeholder}
          type="text"
          value={value}
        />
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  onEnterPress: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

Input.defaultProps = {
  onChange: () => null,
  onEnterPress: () => null,
  placeholder: '',
  value: ''
};

export default Input;
