import './App.css';
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home, Projects } from "./pages";

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

export default App;
