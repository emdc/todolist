import {ActionType} from 'storage/ActionType';


const getInitialState = () => ({
  list: []
});

const tasks = (state = getInitialState(), action) => {
  switch (action.type) {
    case ActionType.TaskListChange:
      return {
        ...state,
        list: action.list
      };
    default:
      return state;
  }
};

export default tasks;
