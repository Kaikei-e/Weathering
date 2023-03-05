import { A } from '@solidjs/router';
import styles from './Home.module.css';

const HomeIsland = () => {
  return (
    <div class={styles.layout}>
      <h1 class={styles.title}>Home</h1>
      <p class={styles.description}> Welcome to Weathering !</p>
      <div class={styles.islandLayout}>
        <A href='/home/cogniAid' class={styles.cogniAid}>
          Cogni Aid: A cognitive tuning for mood intensity.
        </A>
      </div>
    </div>
  );
};

export default HomeIsland;