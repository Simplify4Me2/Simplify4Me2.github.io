import { createContext } from "react";

interface Props {
  isDarkMode: boolean;
  theme: string;
  toggleTheme: () => void;
}

const defaultValues: Props = {
  isDarkMode: false,
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValues);
