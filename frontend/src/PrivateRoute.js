import React, {useContext} from "react";
import {Route,Redirect} from "react-router-dom";
import UserContext from "./contexts/userContext";

// eslint-disable-next-line
export default function PrivateRoute({isRouteAdmin = false, component: Component, ...rest}) {
    const [userData, setUserData] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={(props) => {
                return userData ? (
                    <Component {...props} />
                ) : (
                    isRouteAdmin ? <Redirect to="/admin"/> : <Redirect to="/login"/>
                );
            }}
        >
        </Route>
    );
}