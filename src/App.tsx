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
      <Navigation />
      <div className="container">
        <div className="container--component">
          <h2>Input</h2>
          <Input label="" />
          <Input
            label="Last name"
            rounded={true}
            validation="Ovo je validacija"
          />
        </div>
        <div className="container--component">
          <h2>Button</h2>
          <Button value="Animate me!" animate={true} />
        </div>
        <div className="container--component">
          <h2>Checkbox</h2>
          <Checkbox />
        </div>
        <div className="container--component">
          <h2>Form</h2>
          <Form />
        </div>
        <div className="container--component">
          <h2>Pagination</h2>
          <Pagination />
        </div>
        <div className="container--component">
          <h2>Tags</h2>
          <Tags />
        </div>
        <div className="container--component">
          <h2>Modal</h2>
          <Modal />
        </div>
        <div className="container--component">
          <h2>Transform property exercise</h2>
          <TransformExe />
        </div>
        <div className="container--component">
          <h2>Flex exercise</h2>
          <FlexExe />
        </div>
        <h2>Responsive grid</h2>
        <div className="grid">
          <Card title="Title 1" />
          <Card title="Title 2" />
          <Card title="Title 3" />
          <Card title="Title 4" />
        </div>
        <h2>Grid 2</h2>
        <div className="grid">
          <Pl_cards />
          <Pl_cards />
          <Pl_cards />
          <Pl_cards />
        </div>
      </div>
    </div>
  );
};

export default App;
