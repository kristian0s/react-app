import Header from "./components/header";
import Navigation from "./components/navigation";
import "./styles/styles.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="container">
        Hello world!
      </div>
    </div>
  );
};

export default App;
