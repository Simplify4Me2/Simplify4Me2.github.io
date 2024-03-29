import "./header.css";
import {
  AppBar,
  Box,
  Button,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";

const primary = {
  // main: '#0086E4',
  main: '#378FE6',
  light: '#E0F2FE',
  dark: '#1E202A',
  contrastText: '#fff',
};

const secondary = {
  // main: '#0086E4',
  main: '#E0F2FE',
  light: '#E0F2FE',
  dark: '#1E202A',
  contrastText: '#fff',
};

const theme = createTheme({
  palette: {
    primary: primary,
    secondary: secondary,
    mode: 'light'
  },
});

export function Header() {
  return (
    <ThemeProvider theme={theme} >
      <Box
        sx={{
          flexGrow: 1,
          background: "primary",
        }}
        className="sticky top-0 z-50 "
      >
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" className="flex flex-row items-center">
                <img
                  src="/logo.svg"
                  className="h-12 pr-4"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className="color">Simon Vereecke</span>
              </Link>
            </Typography>
            <Typography variant="h6">
              <Button variant="outlined">Contact</Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
