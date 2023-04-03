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
      <div className="container">Hello world!</div>
      <Button />
      <Checkbox />
      <Form />
      <Pagination />
      <Tags />
      <Modal />
      <TransformExe />
      <FlexExe />
    </div>
  );
};

export default App;
