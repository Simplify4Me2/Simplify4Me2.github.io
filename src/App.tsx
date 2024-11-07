import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Projects } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
