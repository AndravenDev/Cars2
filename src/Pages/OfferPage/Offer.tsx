import { useLocation } from "react-router-dom";
import { useColorTheme } from "../../Context/theme-context";
import { CarData } from "../CardsPage/mockCarData";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styles from "./Offer.module.scss";
import { useState } from "react";

export const Offer = () => {
  const { state } = useLocation();
  const theme = useColorTheme();
  const currentCar = CarData.find((x) => x.id === state.id);

  const [imageIndex, setImageIndex] = useState(0);

  const shiftImages = (n: number) => {
    let result = imageIndex + n;
    if (result === currentCar?.pictureUrls.length) {
      result = 0;
    } else if (result < 0 && currentCar) {
      result = currentCar.pictureUrls.length - 1;
    }

    setImageIndex(result);
  };
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
      {currentCar ? (
        <div>
          <div className={styles.metaInfo}>
            <p>today, 12:58</p>
            <div>
              <span>
                views: <span>12085</span>
              </span>
              <p>{currentCar.price} лв</p>
            </div>
          </div>

          <div>
            <p className={styles.title}>{currentCar.title}</p>
            <p className={styles.keyData}>
              {currentCar.make}, {currentCar.fuel}, {currentCar.mileage}
            </p>
          </div>
          <div style={{ maxHeight: "500px", overflow: "hidden" }}>
            <img
              className={styles.picture}
              src={currentCar.pictureUrls[imageIndex]}
            />
          </div>

          <ChevronLeftIcon
            className={styles.prev}
            onClick={() => shiftImages(-1)}
          ></ChevronLeftIcon>
          <ChevronRightIcon
            className={styles.next}
            onClick={() => shiftImages(1)}
          ></ChevronRightIcon>
          <div>{currentCar.description}</div>
        </div>
      ) : null}
    </div>
  );
};
