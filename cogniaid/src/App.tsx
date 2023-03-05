import type { Component } from 'solid-js';

import styles from './App.module.css';
import TopPage from '../../cogni-aid/src/components/topPage/TopPage';

const App: Component = () => {
  return (
    <div class={styles.headless}>
      <header class={styles.header}>
        <TopPage/>
      </header>
    </div>
  );
};

export default App;
