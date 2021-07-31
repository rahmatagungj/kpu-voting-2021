import React, {useState} from 'react'
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
import AdminDataDpt from "./pages/AdminDataDpt"
import UserContext from "./contexts/userContext";
import PrivateRoute from "./PrivateRoute";

function App() {
    const [userData, setUserData] = useState(null)

    return (
        <UserContext.Provider value={[userData, setUserData]}>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/test" component={Test} exact/>
                    <Route path="/login" component={Login} exact/>
                    <PrivateRoute path="/dashboard" component={Dashboard} exact/>
                    <PrivateRoute path="/dashboard/information" component={InformationPublic} exact/>
                    <Route path="/admin" component={AdminLogin} exact/>
                    <PrivateRoute isRouteAdmin={true} path="/admin/dashboard" component={AdminDashboard} exact/>
                    <PrivateRoute isRouteAdmin={true} path="/admin/dashboard/information" component={InformationAdmin} exact/>
                    <PrivateRoute isRouteAdmin={true} path="/admin/dashboard/data" component={AdminVoteData} exact/>
                    <PrivateRoute isRouteAdmin={true} path="/admin/dashboard/dpt" component={AdminDataDpt} exact/>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
