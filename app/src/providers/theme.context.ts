import { createContext } from "react";

interface Props {
  theme: string;
  toggleTheme: () => void;
}

const defaultValues: Props = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(defaultValues);
