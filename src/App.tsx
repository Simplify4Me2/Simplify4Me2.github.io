import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Projects } from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
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
