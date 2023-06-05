import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { frontendRazred } from "../data/frontRazred";
import robot from "../assets/bootstrap/robot.png";
import coolGuy from "../assets/bootstrap/coolGuy.png";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Bootstrap = () => {
  return (
    <div className="container">
      <div className="bootstrapContainer">
        <div className="bootstrapContainer__lbl">Bootstrap Hello!!!</div>
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
            <div className="section">
              <Card style={{ width: "28rem" }}>
                <Card.Body className="card">
                  <div className="card__box">
                    <span className="card__box__span">45</span>
                    <div className="card__box__right">
                      <Card.Title>Ovo je neki tekst</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        koji nesto objašnjava
                      </Card.Subtitle>
                    </div>
                  </div>
                </Card.Body>
                <ProgressBar now={45} />
              </Card>
              <ResponsiveContainer width={400} height={300}>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
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
            <div className="bootstrap__game">
              <div className="bootstrap__game__title">
                <input type="text" placeholder="Player one" />
                <div>
                  <img
                    className="bootstrap__game__player"
                    src={robot}
                    alt="player one"
                  />
                </div>
                <div className="bootstrap__game__surface"></div>
              </div>
              <div>
                <div>Player two</div>
                <div>
                  <img
                    className="bootstrap__game__player"
                    src={coolGuy}
                    alt="player two"
                  />
                </div>
                <div className="bootstrap__game__surface"></div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Bootstrap;
