import { Card } from "../../Components/Card/Card";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useColorTheme } from "../../Context/theme-context";
import styles from "./CardsPage.module.scss";

export const CardsPage = () => {
  const theme = useColorTheme();
  console.log(theme.theme);
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
      <NavBar />
      <Card />
    </div>
  );
};
