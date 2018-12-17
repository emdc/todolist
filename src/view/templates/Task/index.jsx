import React from 'react';
import PropTypes from 'prop-types';
import {RoundedButton} from 'view/components';
import {TASK_STATUS} from 'data/constants';
import classNames from 'classnames';
import style from './style.sass';


const Task = (props) => {
  const {id, title, status} = props;

  return (
    <div className={classNames(
      style.task,
      style[`__${status}`]
    )}>
      <div className={classNames(
        style.task_cell,
        style.__complete
      )}>
        <RoundedButton
          onClick={() => props.onCompleteClick(id)}
          disabled={status === TASK_STATUS.COMPLETE}
          type="success"
        >
          {'✓'}
        </RoundedButton>
      </div>
      <div className={classNames(
        style.task_cell,
        style.__title
      )}>
        {title}
      </div>
      <div className={classNames(
        style.task_cell,
        style.__remove
      )}>
        <RoundedButton
          onClick={() => props.onRemoveClick(id)}
          type="danger"
        >
          {'✗'}
        </RoundedButton>
      </div>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  onCompleteClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  status: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Task.defaultProps = {
  onCompleteClick: () => null,
  onRemoveClick: () => null
};

export default Task;
