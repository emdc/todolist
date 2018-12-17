import {LocalStorageProvider, TaskProvider} from 'providers';

const ACTION_TYPES = {
  UPDATE: 'TASKS_UPDATE'
};

const LOCAL_STORAGE_KEYS = {
  TASKS_BY_ID: 'TASKS_BY_ID',
  TASK_IDS: 'TASK_IDS'
};

const load = () => (dispatch, getState) => {
  const tasksById = LocalStorageProvider.load(LOCAL_STORAGE_KEYS.TASKS_BY_ID);
  const ids = LocalStorageProvider.load(LOCAL_STORAGE_KEYS.TASK_IDS);

  dispatch({
    type: ACTION_TYPES.UPDATE,
    tasksById: tasksById ? tasksById : {},
    ids: ids ? ids : []
  });
};

const save = () => (dispatch, getState) => {
  LocalStorageProvider.save(
    LOCAL_STORAGE_KEYS.TASKS_BY_ID,
    getState().tasks.byId
  );
  LocalStorageProvider.save(
    LOCAL_STORAGE_KEYS.TASK_IDS,
    getState().tasks.ids
  );
};

const add = (task) => (dispatch, getState) => {
  const {tasksById, ids} = TaskProvider.addTask(
    task,
    getState().tasks.ids,
    getState().tasks.byId
  );

  dispatch({
    type: ACTION_TYPES.UPDATE,
    tasksById,
    ids
  });
};

const remove = (taskId) => (dispatch, getState) => {
  const {tasksById, ids} = TaskProvider.removeTask(
    taskId,
    getState().tasks.ids,
    getState().tasks.byId
  );

  dispatch({
    type: ACTION_TYPES.UPDATE,
    tasksById,
    ids
  });
};

const rename = (taskId, title) => (dispatch, getState) => {
  const {tasksById, ids} = TaskProvider.renameTask(
    taskId,
    title,
    getState().tasks.ids,
    getState().tasks.byId
  );

  dispatch({
    type: ACTION_TYPES.UPDATE,
    tasksById,
    ids
  });
};

const complete = (taskId) => (dispatch, getState) => {
  const {tasksById, ids} = TaskProvider.completeTask(
    taskId,
    getState().tasks.ids,
    getState().tasks.byId
  );

  dispatch({
    type: ACTION_TYPES.UPDATE,
    tasksById,
    ids
  });
};

const Tasks = {
  ACTION_TYPES,
  actions: {
    add,
    remove,
    rename,
    complete,
    save,
    load
  }
};

export default Tasks;
