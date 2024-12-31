import './App.css';
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { Contact, Home, Projects } from "./pages";
import { Footer, Header } from './components';

function App() {
  return <HashRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
  <Routes>
    <Route path="/" element={<LayOut />}>
      <Route index element={<Home />} />
      {/* <Route path="/portfolio" element={<PortfolioOverview />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Route>
  </Routes>
</HashRouter>
}

function LayOut() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
