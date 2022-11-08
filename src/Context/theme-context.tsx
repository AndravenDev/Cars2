import { createContext, PropsWithChildren, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useColorTheme = () => {
  const colorContext = useContext(ThemeContext);
  return colorContext;
};
