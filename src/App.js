import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Create from "./components/create";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/create" exact component={Create}></Route>
          <Route path="/" exact component={Home}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
