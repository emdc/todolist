import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './style.sass';

const Task = ({title}) => {
  return (
    <div className={style.task}>
      <div className={classNames(
        style.task_cell,
        style.__complete
      )}>
        {'✓'}
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
        {'✗'}
      </div>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Task;
