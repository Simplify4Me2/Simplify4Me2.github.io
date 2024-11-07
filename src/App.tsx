import "./App.css";
import { Typography, Link } from "@mui/material";
import { Header, ToggleSwitch } from "./components";
import { useDarkModeState } from "./hooks/useDarkModeState";

function App() {

  const { isEnabled : isDarkModeEnabled, toggle: toggleDarkMode } = useDarkModeState();

  return (
      <main className={`${isDarkModeEnabled? 'dark' : ''} h-screen bg-sky-100 dark:bg-sky-950`}>
        <Header isDarkModeEnabled={isDarkModeEnabled} />
        <div className="flex justify-between">
          <div>
            <Typography
              sx={{ fontSize: 14  }}
              color={isDarkModeEnabled ? "common.white" : "text.secondary"}
              gutterBottom
            >
              Hi there,
            </Typography>
            <Typography variant="h5" component="div" color={isDarkModeEnabled ? "common.white" : "text.secondary"}>
              I&lsquo;m Simon
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 36 }} color={isDarkModeEnabled ? "common.white" : "text.secondary"}>
              Full-stack software developer
            </Typography>
            <Typography variant="body1" color={isDarkModeEnabled ? "common.white" : "text.secondary"}>
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
            <br />
            <Link href="https://simplify4me2.github.io/ping-coming-soon/">
              Link to Ping single column coming soon page
            </Link>
            <br />
            <Link href="https://simplify4me2.github.io/advice-generator-app/">
              Link to Advice Generator App
            </Link>
            <br />
            <Link href="https://simplify4me2.github.io/age-calculator-app/">
              Link to Age Calculator App
            </Link>
            <br />
            <Link href="https://simplify4me2.github.io/ip-address-tracker/">
              Link to IP Address Tracker
            </Link>
            <br />
            <Link href="https://simplify4me2.github.io/minimalist-portfolio/">
              Link to Mininmalist Portfolio
            </Link>
          </div>
          <div className="m-3">
            <ToggleSwitch isEnabled={isDarkModeEnabled} onChange={toggleDarkMode} />
          </div>
        </div>
      </main>
  );
}

export default App;
