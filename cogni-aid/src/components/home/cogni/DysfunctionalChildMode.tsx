import styles from "./DysfunctionalChildMode.module.css";

const DysfunctionalChildMode = () => {
  return (
    <div class={styles.layout}>
      <h1 class={styles.headline}>Dysfunctional Child Mode</h1>
      <p class={styles.description}>
        This mode represents the dysfunctional child in you. You can confess
        your feelings honestly to this mode. It will listen to you and will not
        judge you.
      </p>
    </div>
  );
};

export default DysfunctionalChildMode;
