import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { frontendRazred } from "../data/frontRazred";

const Bootstrap = () => {
  return (
    <div className="container">
      <div className="bootstrapContainer">
        <div className="bootstrapContainer__lbl">Bootstrap Hello!!!</div>
        <div className="bootstrapContainer__fallingLbl">Danger, danger!!</div>
        <Button variant="outline-danger" id="startAnimationBtn">
          Click me!
        </Button>{" "}
      </div>
      <div className="bootstrapTabs">
        <Tabs
          defaultActiveKey="profile"
          id="justify-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="home" title="Dashboard">
            <Card style={{ width: "28rem" }}>
              <Card.Body className="card">
                <Card.Title>45</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  koji nesto objašnjava
                </Card.Subtitle>
              </Card.Body>
              <ProgressBar now={45} />
            </Card>
            <Card style={{ width: "28rem" }}>
              <Card.Title>45</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                koji nesto objašnjava
              </Card.Subtitle>
            </Card>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Visina</th>
                  <th>Hobi</th>
                </tr>
              </thead>
              <tbody>
                {frontendRazred.map((student) => {
                  return (
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.lastName}</td>
                      <td>{student.height}</td>
                      <td>{student.hobby}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="profile" title="Game">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Bootstrap;
