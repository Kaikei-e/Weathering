import { A } from '@solidjs/router';
import styles from './TopPage.module.css';

const TopPage = () => {
  return (
    <div class={styles.bgPreset}>
      <div class={styles.layout}>
        <h1 class={styles.logo}>Weathering: Flow, Adapt, Overcome.</h1>
        <div class={styles.enterPosition}>
          <button class={styles.enter}>
            <A href='/home' class={styles.enterTextATag}>Enter</A>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopPage;