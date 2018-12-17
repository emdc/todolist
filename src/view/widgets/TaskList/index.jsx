import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Task} from 'view/templates';
import {connect} from 'react-redux';
import style from './style.sass';

class TaskList extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const {ids, tasksById} = this.props;

    return (
      <div className={style.tasksList}>
        {ids.map((taskId) => {
          return (
            <div
              className={style.tasksList_item}
              key={taskId}
            >
              <Task {...tasksById[taskId]} />
            </div>
          )
        })}
      </div>
    );
  }
}

TaskList.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  tasksById: PropTypes.shape({}).isRequired
};

const mapStateToProps = (state) => ({
  ids: state.tasks.ids,
  tasksById: state.tasks.byId
});

export default connect(mapStateToProps, {})(TaskList);
