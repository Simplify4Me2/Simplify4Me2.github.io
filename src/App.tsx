import "./App.css";
import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import { Contact, Home, Projects } from "./pages";
import { Footer, Header } from "./components";
import { Suspense } from "react";

function App() {
  return (
    <HashRouter    >
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          {/* <Route path="/portfolio" element={<PortfolioOverview />} /> */}

          <Route path="portfolio" element={<Outlet />}>
              {/* <Route index element={<Overview />} />
              <Route path="bookmark" element={<Bookmark />} />
              <Route path="fylo" element={<Fylo />} />
              <Route path="insure" element={<Insure />} />
              <Route path="manage" element={<Manage />} /> */}
            </Route>

          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      </Suspense>
    </HashRouter>
  );
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
