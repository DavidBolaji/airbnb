import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";

const route = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/map", element: <MapPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
