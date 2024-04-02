import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "./theme.context";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode: theme === 'dark'  , theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
