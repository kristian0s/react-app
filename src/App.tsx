import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Exe from "./pages/exe";
import Mlinar from "./pages/mlinar";

import "./styles/styles.scss";
import Varijable from "./pages/varijable";

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
    {
      path: "/varijable",
      element: <Varijable />,
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
