import styles from "./NavBar.module.scss";
import Switch from "@mui/joy/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useColorTheme } from "../../Context/theme-context";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const NavBar = () => {
  const theme = useColorTheme();

  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
      <MenuIcon className={styles.hamburger} />
      <p className={styles.logo}>cars2.bg</p>
      <Switch
        color={theme.theme === "dark" ? "primary" : "danger"}
        componentsProps={{ input: { "aria-label": "dark mode" } }}
        startDecorator={
          <DarkModeIcon
            sx={{
              color: theme.theme === "dark" ? "white" : "black",
              transition: "1s",
            }}
          />
        }
        endDecorator={
          <WbSunnyIcon
            sx={{
              color: theme.theme === "dark" ? "black" : "yellow",
              transition: "1s",
            }}
          />
        }
        checked={theme.theme !== "dark" ? true : false}
        onClick={() => theme.toggleTheme()}
      />
      <div className={styles.rightIcons}>
        <FavoriteBorderIcon className={styles.favouriteIcon} />
        <ImportExportIcon />
        <SearchIcon />
      </div>
    </div>
  );
};
