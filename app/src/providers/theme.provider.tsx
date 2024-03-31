import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "./theme.context";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {

    console.log("toggleTheme :", theme);
    

    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
