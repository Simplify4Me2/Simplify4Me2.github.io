import { Button } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../providers";

export function MyButton() {
  const { isDarkMode } = useContext(ThemeContext);

  if (isDarkMode)
    return (
      <Button
        variant="outlined"
        sx={{
          borderRadius: "30px",
          textTransform: "none",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#082F49",
          borderColor: "#fff",
        }}
      >
        <span className="mx-2">Contact</span>
      </Button>
    );

  return (
    <Button
      variant="outlined"
      sx={{
        borderRadius: "30px",
        textTransform: "none",
        fontWeight: "bold",
      }}
    >
      <span className="mx-2">Contact</span>
    </Button>
  );
}
