import {Page} from 'view/templates';
import {TaskList} from 'view/widgets';
import React from 'react';
import style from './App.sass';

const App = () => (
  <div className={style.app}>
    <Page>
      <TaskList />
    </Page>
  </div>
);

export default App;
