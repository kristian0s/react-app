import Header from "./components/header";
import Navigation from "./components/navigation";
import Button from "./components/button";
import Checkbox from "./components/checkbox";
import Form from "./components/form";
import Pagination from "./components/pagination";
import Tags from "./components/tags";
import Modal from "./components/modal";
import "./styles/styles.scss";
import TransformExe from "./components/transform-exe";
import FlexExe from "./components/Flex-exe";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="container">
        <div className="container--component">
          <h2>Button</h2>
          <Button />
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
          <h2>Transform exercise</h2>
          <TransformExe />
        </div>
        <div className="container--component">
          <h2>Flex exercise</h2>
          <FlexExe />
        </div>
      </div>
    </div>
  );
};

export default App;
