import styles from "./Card.module.scss";
import { useColorTheme } from "../../Context/theme-context";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { CarListing } from "../../Pages/CardsPage/CardsPage";

interface CardProps {
  car: CarListing;
}

export const Card = ({ car }: CardProps) => {
  const theme = useColorTheme();
  const [imageIndex, setImageIndex] = useState(0);
  const shiftImages = (n: number) => {
    let result = imageIndex + n;
    if (result === car.pictureUrls.length) {
      result = 0;
    } else if (result < 0) {
      result = car.pictureUrls.length - 1;
    }

    setImageIndex(result);
  };
  return (
    <div style={{ position: "relative" }}>
      <ChevronLeftIcon
        className={styles.prev}
        onClick={() => shiftImages(-1)}
      ></ChevronLeftIcon>
      <ChevronRightIcon
        className={styles.next}
        onClick={() => shiftImages(1)}
      ></ChevronRightIcon>
      <div
        className={`${styles.container} ${
          theme.theme === "dark" ? styles.dark : "light"
        }`}
      >
        <div className={styles.caurosel}>
          <img className={styles.picture} src={car.pictureUrls[imageIndex]} />
        </div>
        <div className={styles.keyInfo}>
          <p className={styles.title}>{car.title}</p>
          <p
            className={`${styles.price} ${
              theme.theme === "dark" ? styles.darkPrice : "light"
            }`}
          >
            {car.price.toLocaleString("en", { useGrouping: true })} лв
          </p>
        </div>
        <p className={styles.fuelYearAndMileage}>
          {car.make}, {car.fuel} {car.mileage} km
        </p>
        <p className={styles.description}>{car.description}</p>
        <p className={styles.publisherInfo}>
          {car.sellerType}, {car.location}
        </p>
      </div>
    </div>
  );
};
