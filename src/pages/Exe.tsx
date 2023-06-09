import { Form } from "react-router-dom";
import Button from "../components/button";
import Card from "../components/card";
import Pl_cards from "../components/card-pl";
import Checkbox from "../components/checkbox";
import FlexExe from "../components/Flex-exe";
import Input from "../components/input";
import Modal from "../components/modal";
import Navigation from "../components/navigation";
import Pagination from "../components/pagination";
import Tags from "../components/tags";
import TransformExe from "../components/transform-exe";

const Exe = () => {
  return (
    <>
      <div className="container">
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
          <h2>Grid</h2>
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
    </>
  );
};

export default Exe;
