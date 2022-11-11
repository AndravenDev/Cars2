import * as React from "react";
import Chip from "@mui/material/Chip";
import styles from "./Filters.module.scss";
import { useColorTheme } from "../../Context/theme-context";
import { Button } from "@mui/material";

export const Filters = () => {
  const theme = useColorTheme();
  const filters = [
    "Type",
    "Coupe",
    "Brand",
    "Fuel",
    "Gearbox",
    "Price",
    "Year",
    "Location",
    "Seller",
    "Color",
    "Door Count",
    "Horsepower",
    "Options",
    "Steering",
    "Published",
    "Condition",
  ];
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
      {filters.map((x) => (
        <Chip className={styles.chip} label={x} onClick={() => {}} />
      ))}
      <Button className={styles.clearButton}>Clear</Button>
    </div>
  );
};
