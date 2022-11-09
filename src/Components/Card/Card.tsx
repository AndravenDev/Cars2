import styles from "./Card.module.scss";
import { useColorTheme } from "../../Context/theme-context";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export const Card = () => {
  const images = [
    "https://c4.wallpaperflare.com/wallpaper/537/50/352/mercedes-benz-amg-black-vossen-wallpaper-preview.jpg",
    "https://wallpapercave.com/wp/wp7896711.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/299/78/483/mercedes-benz-amg-black-vossen-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/87/707/680/mercedes-e55-amg-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/1020/132/850/mercedes-benz-amg-e55-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/327/401/253/2003-amg-e55-mercedes-benz-wallpaper-preview.jpg",
  ];
  const theme = useColorTheme();
  const [imageIndex, setImageIndex] = useState(0);
  const shiftImages = (n: number) => {
    let result = imageIndex + n;
    if (result === images.length) {
      result = 0;
    } else if (result < 0) {
      result = images.length - 1;
    }

    setImageIndex(result);
  };
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : "light"
      }`}
    >
      <div className={styles.caurosel}>
        <img className={styles.picture} src={images[imageIndex]} />
        <ChevronLeftIcon
          className={styles.prev}
          onClick={() => shiftImages(-1)}
        >
          prev
        </ChevronLeftIcon>
        <ChevronRightIcon
          className={styles.next}
          onClick={() => shiftImages(1)}
        >
          next
        </ChevronRightIcon>
      </div>
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
