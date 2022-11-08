import { Card } from "../../Components/Card/Card";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useColorTheme } from "../../Context/theme-context";
import styles from "./CardsPage.module.scss";

export const CardsPage = () => {
  const theme = useColorTheme();
  const arr = new Array(10).fill("");
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
      <NavBar />
      <div className={styles.cards}>
        {arr.map((x, i) => {
          return <Card key={i} />;
        })}
      </div>
    </div>
  );
};
