import { Card } from "../../Components/Card/Card";
import { Filters } from "../../Components/Filters/Filters";
import { NavBar } from "../../Components/NavBar/NavBar";
import { useColorTheme } from "../../Context/theme-context";
import styles from "./CardsPage.module.scss";
import { CarData } from "./mockCarData";

export interface CarListing {
  id: number;
  title: string;
  brand: string;
  price: number;
  make: number;
  fuel: string;
  mileage: number;
  description: string;
  sellerType: string;
  location: string;
  pictureUrls: string[];
}

export const CardsPage = () => {
  const theme = useColorTheme();
  const arr: CarListing[] = CarData;
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
      <Filters />
      <div className={styles.cards}>
        {arr.map((car, i) => {
          return <Card key={i} car={car} />;
        })}
      </div>
    </div>
  );
};
