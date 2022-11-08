import styles from "./NavBar.module.scss";
import Switch from "@mui/joy/Switch";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useColorTheme } from "../../Context/theme-context";

export const NavBar = () => {
  const theme = useColorTheme();

  return (
    <div
      className={`${styles.container} ${
        theme.theme === "dark" ? styles.dark : null
      }`}
    >
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
    </div>
  );
};
