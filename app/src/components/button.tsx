import { Button } from "@mui/material";

export function MyButton() {
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
