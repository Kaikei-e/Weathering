import HomeIsland from "~/components/home/Home";
import styles from "./index.module.css"

const Home = () => {
  return (
    <div class={styles.bgStyle}>
      <HomeIsland />
    </div>
  );
};

export default Home;