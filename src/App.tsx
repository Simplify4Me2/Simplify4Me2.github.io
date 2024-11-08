import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home, Projects } from "./pages";

const hashRouter = createHashRouter(
  [
    {
      path: "/*",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ]
);

function App() {
  return <RouterProvider router={hashRouter} />;
}

export default App;
