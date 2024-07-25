import { Button } from "@mui/material";

interface IMyButtonProps{
  isDarkModeEnabled: boolean;
}

export function MyButton({isDarkModeEnabled} : IMyButtonProps) {

  if (isDarkModeEnabled)
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
