import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/dashboard" component={Dashboard} exact/>
          </Switch>
      </Router>
  );
}

export default App;
