import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";

import "./styles/styles.scss";
import Varijable from "./pages/varijable";
import Petlje from "./pages/petlje";
import Vjezba2604 from "./pages/vjezba2604";
import Vjezba2804 from "./pages/vjezba2804";
import Vjezba0305 from "./pages/vjezba0305";
import Breweries from "./pages/breweries";
import Pokemoni from "./pages/pokemon";
import Exe from "./pages/exe";
import Europe from "./pages/europe";
import Africa from "./pages/africa";
import Vjezba1505 from "./pages/vjezba1505";
import Zavrsni from "./pages/zavrsni";

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
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/vjezba2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/vjezba2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/vjezba0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/breweries",
      element: <Breweries />,
    },
    {
      path: "/pokemon",
      element: <Pokemoni />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/africa",
      element: <Africa />,
    },
    {
      path: "/vjezba1505",
      element: <Vjezba1505 />,
    },
    {
      path: "/zavrsni",
      element: <Zavrsni />,
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
