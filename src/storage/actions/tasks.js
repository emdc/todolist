import {ActionType} from 'storage/ActionType';


export const taskListChange = (list) => (dispatch) => dispatch({
  type: ActionType.TaskListChange,
  list
});
