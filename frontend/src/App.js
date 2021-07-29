import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Test from "./pages/Test";
import InformationPublic from "./pages/InformationPublic";
import InformationAdmin from "./pages/InformationAdmin";
import AdminVoteData from "./pages/AdminVoteData"

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/test" component={Test} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/dashboard" component={Dashboard} exact/>
              <Route path="/dashboard/information" component={InformationPublic} exact/>
              <Route path="/admin" component={AdminLogin} exact/>
              <Route path="/admin/dashboard" component={AdminDashboard} exact/>
              <Route path="/admin/dashboard/information" component={InformationAdmin} exact/>
              <Route path="/admin/dashboard/data" component={AdminVoteData} exact/>
          </Switch>
      </Router>
  );
}

export default App;
