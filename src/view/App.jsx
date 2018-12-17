import {EditorComposition} from 'view/compositions';
import {Page} from 'view/templates';
import React from 'react';
import style from './App.sass';

const App = () => (
  <div className={style.app}>
    <Page>
      <EditorComposition />
    </Page>
  </div>
);

export default App;
