import {
  AppBar,
  Box,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { Button } from '../components';

const primary = {
  // main: '#0086E4',
  main: '#378FE6',
  light: '#E0F2FE',
  dark: '#082F49',
  contrastText: '#fff',
};

const secondary = {
  // main: '#0086E4',
  main: '#E0F2FE',
  light: '#E0F2FE',
  dark: '#082F49 ',
  contrastText: '#fff',
};

const theme = createTheme({
  palette: {
    primary: primary,
    secondary: secondary,
    mode: 'light'
  },
});

const darkTheme = createTheme({
  palette: {
    primary: primary,
    secondary: secondary,
    background: {
      default: '#082F49',
      paper: '#082F49'
    },
    mode: 'dark'
  },
});

interface IHeaderProps {
  isDarkModeEnabled: boolean;
}

export function Header({ isDarkModeEnabled }:IHeaderProps) {

  return (
    <ThemeProvider theme={isDarkModeEnabled ? darkTheme : theme} >
      <Box
        sx={{
          flexGrow: 1,
          background: "primary"
        }}
        className="sticky top-0 z-50 "
      >
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
              <Link href="/" className="flex flex-row items-center" sx={{ textDecoration: "none", fontSize: '20' }}>
                <img
                  src={isDarkModeEnabled ? "/logo-contrast.svg" : "/logo.svg"}
                  className="h-12 pr-4"
                  alt="Logo"
                  width={50}
                  height={50}
                />
                <span className={isDarkModeEnabled ? "text-white" : "text-sky-500"}>Simon Vereecke</span>
              </Link>
            </Typography>
            <Typography variant="h6" className="bg-white rounded-3xl shadow-md hover:shadow-none">
              <Button isDarkModeEnabled={isDarkModeEnabled} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
