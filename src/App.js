import "./assets/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Create from "./components/create";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="m-5">
          <Route path="/create" exact component={Create}></Route>
          <Route path="/" exact component={Home}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
