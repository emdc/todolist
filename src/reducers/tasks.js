import {Tasks} from 'actions';

const getInitialState = () => ({
  byId: {},
  ids: []
});

const tasksReducer = (state = getInitialState(), action) => {
  switch(action.type) {
    case Tasks.ACTION_TYPES.UPDATE:
      return {
        byId: action.tasksById,
        ids: action.ids
      };
    default:
      return state;
  }
};

export default tasksReducer;
