import LocalStorageProvider from './LocalStorageProvider';


const TASKS_LOCAL_STORAGE = 'TASKS';

/* eslint-disable class-methods-use-this */
class TaskProvider {
  get () {
    return LocalStorageProvider.load(TASKS_LOCAL_STORAGE) || [];
  }

  add (list, task) {
    const newList = [...list, task];

    LocalStorageProvider.save(TASKS_LOCAL_STORAGE, newList);

    return newList;
  }

  remove (list, taskId) {
    const newList = list.filter((task) => task.id !== taskId);

    LocalStorageProvider.save(TASKS_LOCAL_STORAGE, newList);

    return newList;
  }
}
/* eslint-enable class-methods-use-this */

export default TaskProvider;
