import styles from './CogniAid.module.css';
import DysfunctionalChildMode from './DysfunctionalChildMode';
import DysfunctionalParentMode from './DysfunctionalParentMode';
import HealthyAdultMode from './HealthyAdultMode';

const CogniAidHome = () => {
  return (
    <div class={styles.bgStyle}>
      <div class={styles.cardStyle}>
        <h1 class={styles.headline}>CogniAid</h1>
        <p class={styles.description}>
          You can learn skills how to deal with your mood.
          Use this at your own risk.  
        </p>
        <div class={styles.inputColumns}>
          <HealthyAdultMode />
          <DysfunctionalChildMode />
          <DysfunctionalParentMode />
        </div>
      </div>
    </div>
  );
};

export default CogniAidHome;