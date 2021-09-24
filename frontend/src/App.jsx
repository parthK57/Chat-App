import "./global.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/root";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Root} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
