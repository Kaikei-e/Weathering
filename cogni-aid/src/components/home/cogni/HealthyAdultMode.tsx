import styles from './HealthyAdultMode.module.css';

const HealthyAdultMode = () => {
  return (
    <div class={styles.layout}>
      <h1 class={styles.headline}>Healthy Adult Mode</h1>
      <p class={styles.description}>
        This mode represents the healthy adult in you. 
        It stands for you and the garden of your mind.
      </p>
      <div class={styles.opinionCard} >
        <p class={styles.opinion}>
          "I am the healthy adult in you. I am the garden of your mind.
          I am the one who can help you to grow and to flourish."
        </p>
      </div>
    </div>
  );
};

export default HealthyAdultMode;