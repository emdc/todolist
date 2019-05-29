import {ActionType} from 'store/ActionType';


export const taskListChange = (list) => (dispatch) => dispatch({
  type: ActionType.TaskListChange,
  list
});
