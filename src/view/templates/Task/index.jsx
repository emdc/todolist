import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Input, ButtonIcon} from 'view/components';
import {TASK_STATUS} from 'data/constants';
import {bindAll} from 'lodash';
import classNames from 'classnames';
import style from './style.sass';


class Task extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isEditTitle: false
    };

    bindAll(this, [
      'onCompleteClick',
      'onEditTitleClick',
      'onTitleChange',
      'onTitleByEnterChange',
      'onRemoveClick'
    ]);
  }

  onCompleteClick () {
    this.props.onCompleteClick(this.props.id);
  }

  onEditTitleClick () {
    this.setState({isEditTitle: !this.state.isEditTitle});
  }

  onTitleChange (title) {
    this.props.onTitleChange(this.props.id, title);
  }

  onTitleByEnterChange (title) {
    this.setState({isEditTitle: false}, () => {
      this.props.onTitleChange(this.props.id, title);
    });
  }

  onRemoveClick () {
    this.props.onRemoveClick(this.props.id);
  }

  render () {
    const {title, status} = this.props;
    const {isEditTitle} = this.state;

    return (
      <div className={classNames(
        style.task,
        style[`__${status}`]
      )}>
        <div className={classNames(
          style.task_cell,
          style.__complete
        )}>
          <ButtonIcon
            onClick={this.onCompleteClick}
            disabled={status === TASK_STATUS.COMPLETE}
            type="success"
          >
            {'✓'}
          </ButtonIcon>
        </div>
        <div className={classNames(
          style.task_cell,
          style.__edit
        )}>
          <Button onClick={this.onEditTitleClick}>
            {'Edit'}
          </Button>
        </div>
        <div className={classNames(
          style.task_cell,
          style.__title
        )}>
          {isEditTitle && (
            <Input
              onEnterPress={this.onTitleByEnterChange}
              onChange={this.onTitleChange}
              value={title}
            />
          )}
          {!isEditTitle && (
            title
          )}
        </div>
        <div className={classNames(
          style.task_cell,
          style.__remove
        )}>
          <ButtonIcon
            onClick={this.onRemoveClick}
            type="danger"
          >
            {'✗'}
          </ButtonIcon>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  onCompleteClick: PropTypes.func,
  onEditTitleClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onTitleChange: PropTypes.func,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Task.defaultProps = {
  onCompleteClick: () => null,
  onEditTitleClick: () => null,
  onRemoveClick: () => null,
  onTitleChange: null
};

export default Task;
