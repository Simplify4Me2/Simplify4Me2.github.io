import "./App.css";
// import { Header } from './components'
import { Typography, Link } from "@mui/material";
import { ToggleSwitch } from "./components";

function App() {
  return (
    <>
      <main className="bg-sky-100 h-screen">
        {/* <Header /> */}
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
            <Link href="qr-code">Link to QR Code Component</Link>
          </div>
          <div className="m-3">
            <ToggleSwitch />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
