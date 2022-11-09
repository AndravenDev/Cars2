import styles from "./Card.module.scss";
import { useColorTheme } from "../../Context/theme-context";

export const Card = () => {
  const theme = useColorTheme();
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : "light"
      }`}
    >
      <div className={styles.picture}></div>
      <div className={styles.keyInfo}>
        <h1>BMW</h1>
        <p>16 000</p>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat
        numquam, quod saepe hic tempore. Optio cupiditate facilis porro nobis
        velit corporis aperiam, sint vitae architecto, delectus fugiat sequi
        neque.
      </p>
    </div>
  );
};
