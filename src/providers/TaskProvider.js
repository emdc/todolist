import {TASK_STATUS} from 'data/constants';
import {omit} from 'lodash';

class TaskProvider {
  static addTask (task, ids, tasksById) {
    let newId = '0';

    if (ids.length > 0) {
      const lastId = Math.max(...ids.map((id) => parseInt(id, 10)));
      newId = String(lastId + 1);
    }

    return {
      ids: [
        ...ids,
        newId
      ],
      tasksById: {
        ...tasksById,
        [newId]: {
          ...task,
          id: newId
        }
      }
    }
  }

  static removeTask (taskId, ids, tasksById) {
    return {
      ids: ids.filter((id) => taskId !== id),
      tasksById: omit(tasksById, [taskId])
    }
  }

  static renameTask (taskId, title, ids, tasksById) {
    return {
      ids,
      tasksById: {
        ...tasksById,
        [taskId]: {
          ...tasksById[taskId],
          title
        }
      }
    }
  }

  static completeTask (taskId, ids, tasksById) {
    return {
      ids,
      tasksById: {
        ...tasksById,
        [taskId]: {
          ...tasksById[taskId],
          status: TASK_STATUS.COMPLETE
        }
      }
    }
  }
}

export default TaskProvider;
