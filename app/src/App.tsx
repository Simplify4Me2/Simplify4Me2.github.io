import "./App.css";
import { Typography, Link } from "@mui/material";
import { Header, ToggleSwitch } from "./components";
import { ThemeProvider } from "./theme.provider";

function App() {
  return (
    <ThemeProvider>
      <main className="bg-sky-100 h-screen">
        <Header />
        <div className="flex justify-between">
          <div>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Hi
            </Typography>
            <Typography variant="h5" component="div">
              I&lsquo;m Simon
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: 36 }} color="text.secondary">
              Full-stack software developer
            </Typography>
            <Typography variant="body1">
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
    </ThemeProvider>
  );
}

export default App;
