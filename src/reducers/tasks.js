import {Task} from 'actions';

const getInitialState = () => ({
  byId: {
    '1': { id: '1', title: 'Task 1' },
    '2': { id: '2', title: 'Task 2' },
    '3': { id: '3', title: 'Task 3' }
  },
  ids: ['1', '2', '3']
});

const tasksReducer = (state = getInitialState(), action) => {
  switch(action.type) {
    case Task.ACTIONS.ADD:
    case Task.ACTIONS.REMOVE:
    case Task.ACTIONS.RENAME:
    case Task.ACTIONS.COMPLETE:
    default:
      return state;
  }
};

export default tasksReducer;
