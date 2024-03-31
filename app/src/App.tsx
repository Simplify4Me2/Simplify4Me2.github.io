import "./App.css";
import { Typography, Link } from "@mui/material";
import { Header, ToggleSwitch } from "./components";
import { useContext } from "react";
import { ThemeContext } from "./providers";

function App() {

  const { theme } = useContext(ThemeContext);

  return (
      <main className={`${theme === 'light' ? 'bg-sky-100' : 'bg-sky-950'} h-screen`}>
        <Header />
        <div className="flex justify-between">
          <div>
            <Typography
              sx={{ fontSize: 14  }}
              color={theme === 'light' ? "text.secondary" : "common.white"}
              gutterBottom
            >
              Hi
            </Typography>
            <Typography variant="h5" component="div" color={theme === 'light' ? "text.secondary" : "common.white"}>
              I&lsquo;m Simon
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 36 }} color={theme === 'light' ? "text.secondary" : "common.white"}>
              Full-stack software developer
            </Typography>
            <Typography variant="body1" color={theme === 'light' ? "text.secondary" : "common.white"}>
              My main areas of expertise include C#, Angular and React.
              <br />I like to craft solid and scalable frontend products with
              great user experience.
            </Typography>
            <Link href="https://simplify4me2.github.io/qr-code-component">
              Link to QR Code Component
            </Link>
            <br />
            <Link href="https://simplify4me2.github.io/social-media-dashboard">
              Link to Social Media Dashboard
            </Link>
          </div>
          <div className="m-3">
            <ToggleSwitch />
          </div>
        </div>
      </main>
  );
}

export default App;
