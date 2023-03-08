import { For, createSignal } from "solid-js";
import styles from "./HealthyAdultMode.module.css";
import Writer from "~/components/writer/Writer";

const HealthyAdultMode = () => {
  const [opinions, setOpinion] = createSignal<string[]>();

  return (
    <div class={styles.layout}>
      <h1 class={styles.headline}>Healthy Adult Mode</h1>
      <p class={styles.description}>
        This mode represents the healthy adult in you. It stands for you and the
        garden of your mind.
      </p>
      <div class={styles.opinionCard}>
        <For each={opinions()} fallback={<div>No items</div>}>
          {(opinion) => (
            <div class={styles.opinionCardText}>
              <p>{opinion}</p>
            </div>
          )}
        </For>
        {/* <Writer input={opinions}/> */}
      </div>
    </div>
  );
};

export default HealthyAdultMode;
