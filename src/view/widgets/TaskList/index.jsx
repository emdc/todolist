import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Task} from 'view/templates';
import {Tasks} from 'actions';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import style from './style.scss';


class TaskList extends Component {
  constructor (props) {
    super(props);

    bindAll(this, [
      'onRemoveTaskClick',
      'onCompleteTaskClick',
      'onTitleTaskChange'
    ]);

    this.props.loadTasks();
  }

  onRemoveTaskClick (taskId) {
    this.props.removeTask(taskId);
    this.props.saveTasks();
  }

  onCompleteTaskClick (taskId) {
    this.props.completeTask(taskId);
    this.props.saveTasks();
  }

  onTitleTaskChange (taskId, title) {
    this.props.renameTask(taskId, title);
    this.props.saveTasks();
  }

  render () {
    const {ids, tasksById} = this.props;

    const tasks = ids
      .map((taskId) => tasksById[taskId])
      .sort((a, b) => a.title < b.title ? 1 : -1);

    return (
      <div className={style.tasksList}>
        {ids.length === 0 && (
          <div className={style.tasksList_note}>
            {'No tasks now.'}
          </div>
        )}
        {ids.length > 0 && (
          <div className={style.tasksList_list}>
            {tasks.map((task) => {
              return (
                <div
                  className={style.tasksList_item}
                  key={task.id}
                >
                  <Task
                    {...task}
                    onCompleteClick={this.onCompleteTaskClick}
                    onRemoveClick={this.onRemoveTaskClick}
                    onTitleChange={this.onTitleTaskChange}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    );
  }
}

TaskList.propTypes = {
  completeTask: PropTypes.func.isRequired,
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadTasks: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  renameTask: PropTypes.func.isRequired,
  saveTasks: PropTypes.func.isRequired,
  tasksById: PropTypes.shape({}).isRequired
};

const mapStateToProps = (state) => ({
  ids: state.tasks.ids,
  tasksById: state.tasks.byId
});

export default connect(mapStateToProps, {
  completeTask: Tasks.actions.complete,
  loadTasks: Tasks.actions.load,
  removeTask: Tasks.actions.remove,
  renameTask: Tasks.actions.rename,
  saveTasks: Tasks.actions.save
})(TaskList);
