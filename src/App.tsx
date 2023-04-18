import Header from "./components/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/styles.scss";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Exe from "./pages/Exe";
import Mlinar from "./pages/mlinar";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
