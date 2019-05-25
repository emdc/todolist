import * as React from 'react';
import PropTypes from 'prop-types';
import {Task} from 'view/templates';
import {TaskProvider} from 'data/providers';
import {connect} from 'react-redux';
import styles from './styles.scss';
import {taskListChange} from 'storage/actions';


class TaskList extends React.Component {
  constructor (props) {
    super(props);

    this._tasksProvider = new TaskProvider();
  }

  componentDidMount () {
    this.props.taskListChange(this._tasksProvider.get());
  }

  render () {
    const {list} = this.props;

    return (
      <div className={styles.taskList}>
        {list.length === 0 && 'No stored tasks'}
        {list.length > 0 && list.map((task) => <Task data={task} key={task.id} />)}
      </div>
    );
  }
}

TaskList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    })
  ).isRequired,
  taskListChange: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  list: state.tasks.list
});

export default connect(mapStateToProps, {taskListChange})(TaskList);
