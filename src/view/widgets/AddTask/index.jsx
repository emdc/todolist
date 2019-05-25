import {Button, Input} from 'view/atoms';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TASK_STATUS} from 'data/constants';
import {Tasks} from 'actions';
import {bindAll} from 'lodash';
import {connect} from 'react-redux';
import style from './style.scss';


const DEFAULT_TITLE = '';

class AddTaskWidget extends Component {
  constructor (props) {
    super(props);

    this.state = {
      title: DEFAULT_TITLE
    };

    bindAll(this, [
      'onTitleTaskChange',
      'onAddTaskClick',
      'onTaskByEnterAdd'
    ]);
  }

  onTitleTaskChange (title) {
    this.setState({title});
  }

  onAddTaskClick () {
    const {title} = this.state;

    if (title.length === 0) {
      return;
    }

    this.props.addTask({
      title,
      status: TASK_STATUS.IN_PROCESS
    });
    this.props.saveTasks();
    this.setState({title: DEFAULT_TITLE});
  }

  onTaskByEnterAdd (title) {
    this.setState({title}, () => {
      if (title.length === 0) {
        return;
      }

      this.props.addTask({
        title,
        status: TASK_STATUS.IN_PROCESS
      });
      this.props.saveTasks();
      this.setState({title: DEFAULT_TITLE});
    })
  }

  render () {
    const {title} = this.state;

    return (
      <div className={style.addTaskWidget}>
        <div className={style.addTaskWidget_addButton}>
          <Button onClick={this.onAddTaskClick}>
            {'Add task'}
          </Button>
        </div>
        <div className={style.addTaskWidget_input}>
          <Input
            onChange={this.onTitleTaskChange}
            onEnterPress={this.onTaskByEnterAdd}
            placeholder="New task title"
            value={title}
          />
        </div>
      </div>
    )
  }
}

AddTaskWidget.propTypes = {
  addTask: PropTypes.func.isRequired,
  saveTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  addTask: Tasks.actions.add,
  saveTasks: Tasks.actions.save
})(AddTaskWidget);
