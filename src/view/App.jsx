import {EditorComposition} from 'view/pages';
import {Page} from 'view/templates';
import React from 'react';
import style from './App.scss';

const App = () => (
  <div className={style.app}>
    <Page>
      <EditorComposition />
    </Page>
  </div>
);

export default App;
