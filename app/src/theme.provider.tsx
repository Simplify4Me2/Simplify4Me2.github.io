import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "./theme.context";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState(null);

  return <ThemeContext.Provider value={theme} >{children}</ThemeContext.Provider>;
};
