import Chip from "@mui/material/Chip";
import styles from "./Filters.module.scss";
import { useColorTheme } from "../../Context/theme-context";
import { Button } from "@mui/material";
import { useState } from "react";

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
  const [currentFilter, setCurrentFilter] = useState<any>();

  const getCurrentFilterUI = (key: string) => {
    const filterUIs = {
      coupe: () => {
        const coupeTypes = ["Wagon", "Sendan", "Hatchback"];
        return (
          <div>
            {coupeTypes.map((x, i) => (
              <Chip
                key={i}
                className={`${styles.chip} ${styles.openFilterChip}`}
                label={x}
                variant="outlined"
                color="primary"
              />
            ))}
          </div>
        );
      },
    };
    if (key && Object.keys(filterUIs).includes(key)) {
      return filterUIs[key as keyof typeof filterUIs];
    }
    return () => <div></div>;
  };
  console.log(getCurrentFilterUI("coupe"));
  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
      {filters.map((x, i) => (
        <Chip
          key={i}
          className={styles.chip}
          label={x}
          onClick={() => {
            setCurrentFilter(x);
          }}
        />
      ))}
      <Button
        className={styles.clearButton}
        onClick={() => setCurrentFilter(null)}
      >
        Clear
      </Button>

      <div className={styles.openFilter}>
        {currentFilter
          ? getCurrentFilterUI(currentFilter.toLowerCase())()
          : null}
      </div>
    </div>
  );
};
