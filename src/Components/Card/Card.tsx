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
        <p className={styles.title}>Mercedes E350 4Matic Facelift Navi</p>
        <p
          className={`${styles.price} ${
            theme.theme === "dark" ? styles.darkPrice : "light"
          }`}
        >
          16 000 лв
        </p>
      </div>
      <p className={styles.fuelYearAndMileage}>2009, Diesel 210 000 km</p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit
        voluptate aspernatur totam assumenda quod velit quo facilis vitae
        excepturi quos voluptas officiis molestias, dolorem rem, aut ad
        reiciendis dolores.
      </p>
      <p className={styles.publisherInfo}>Private seller, Sofia</p>
    </div>
  );
};
