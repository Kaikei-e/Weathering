import { createSignal } from "solid-js";
import styles from "./Writer.module.css";

const [opinions, setOpinion] = createSignal<string[]>([""]);

const Writer = (props: { input: string}) => {
  const [text, setText] = createSignal<string>(props.input);

  return (
    <div>
      <form class={styles.inputArea}>
        <textarea
          value={text()}
          onChange={(e) => setText((e.target as HTMLInputElement).value)}
          placeholder="Act as above mode."
        />
        <button
          type="submit"
          onsubmit={
            opinions().length > 0
              ? (e) => {
                  e.preventDefault();
                  props.input = text();
                }
              : (e) => e.preventDefault()
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Writer;
