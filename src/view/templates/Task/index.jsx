import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';


const Task = ({data}) => (
  <div className={styles.task}>
    {data.text}
  </div>
);

Task.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }).isRequired
};

export default Task;
