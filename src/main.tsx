import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Projects } from "./pages/Projects.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    // children: [
    //   {
    //     path: "projects",
    //     element: <Projects />
    //   },
    // ]
  },
  {
    path: "/projects",
    element: <Projects />
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
