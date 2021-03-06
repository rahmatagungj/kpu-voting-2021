import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import InformationPublic from "./pages/InformationPublic";
import InformationAdmin from "./pages/InformationAdmin";
import AdminVoteData from "./pages/AdminVoteData";
import AdminDataDpt from "./pages/AdminDataDpt";
import UserContext from "./contexts/userContext";
import PrivateRoute from "./PrivateRoute";
import { customerly } from "react-customerly";
import NotFoundPage from "./pages/NotFoundPage";
import QuickCount from "./pages/QuickCount";
import "animate.css";

customerly.initialize("b2575083", {
  widget_position: "right",
  widget_color: "417aa5",
  language: "id",
});

function App() {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/quickcount" component={QuickCount} exact /> */}
          <Route path="/login" component={Login} exact />
          <PrivateRoute path="/dashboard" component={Dashboard} exact />
          <PrivateRoute
            path="/dashboard/information"
            component={InformationPublic}
            exact
          />
          <Route path="/admin" component={AdminLogin} exact />
          <PrivateRoute
            isRouteAdmin={true}
            path="/admin/dashboard"
            component={AdminDashboard}
            exact
          />
          <PrivateRoute
            isRouteAdmin={true}
            path="/admin/dashboard/information"
            component={InformationAdmin}
            exact
          />
          <PrivateRoute
            isRouteAdmin={true}
            path="/admin/dashboard/data"
            component={AdminVoteData}
            exact
          />
          <PrivateRoute
            isRouteAdmin={true}
            path="/admin/dashboard/dpt"
            component={AdminDataDpt}
            exact
          />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
