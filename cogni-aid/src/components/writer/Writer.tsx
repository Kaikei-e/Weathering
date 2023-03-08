import { createSignal } from "solid-js";
import styles from "./Writer.module.css";

const Writer = (props: { input: string; push: (arg0: string) => void }) => {
  const [text, setText] = createSignal<string>(props.input);
  const setProps = () => {
    props.push(text());
  };

  return (
    <div>
      <form class={styles.inputArea}>
        <textarea
          value={text()}
          onChange={(e) => setText((e.target as HTMLInputElement).value)}
          placeholder="Act as above mode."
        />
        <button type="submit" onsubmit={setProps}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Writer;
