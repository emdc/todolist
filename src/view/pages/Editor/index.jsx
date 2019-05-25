import {AddTaskWidget, TaskListWidget} from 'view/widgets';
import React from 'react';
import style from './style.scss';


const Editor = () => (
  <div className={style.editorComposition}>
    <div className={style.editorComposition_wrap}>
      <div className={style.editorComposition_add}>
        <AddTaskWidget />
      </div>
      <div className={style.editorComposition_list}>
        <TaskListWidget />
      </div>
    </div>

  </div>
);

export default Editor;
