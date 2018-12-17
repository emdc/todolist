import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Task} from 'view/templates';
import {Tasks} from 'actions';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import style from './style.sass';


class TaskListWidget extends Component {
  constructor (props) {
    super(props);

    bindAll(this, [
      'onRemoveTaskClick',
      'onCompleteTaskClick'
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

  render () {
    const {ids, tasksById} = this.props;

    return (
      <div className={style.tasksList}>
        {ids.length === 0 && (
          <div className={style.tasksList_note}>
            {'No tasks now.'}
          </div>
        )}
        {ids.length > 0 && (
          <div className={style.tasksList_list}>
            {ids.map((taskId) => {
              return (
                <div
                  className={style.tasksList_item}
                  key={taskId}
                >
                  <Task
                    {...tasksById[taskId]}
                    onCompleteClick={this.onCompleteTaskClick}
                    onRemoveClick={this.onRemoveTaskClick}
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

TaskListWidget.propTypes = {
  addTask: PropTypes.func.isRequired,
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
  addTask: Tasks.actions.add,
  completeTask: Tasks.actions.complete,
  loadTasks: Tasks.actions.load,
  removeTask: Tasks.actions.remove,
  renameTask: Tasks.actions.rename,
  saveTasks: Tasks.actions.save
})(TaskListWidget);
