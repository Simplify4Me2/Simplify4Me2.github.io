import {
  AppBar,
  Box,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";

const primary = {
  // main: '#0086E4',
  main: '#E0F2FE',
  light: '#E0F2FE',
  dark: '#1E202A',
  contrastText: '#fff',
};

const theme = createTheme({
  palette: {
    primary: primary,
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
        <AppBar position="static">
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
                <span>Simon Vereecke</span>
              </Link>
            </Typography>
            <Typography variant="h6">
              <Link href={"/contact"} color="inherit">
                Contact
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
