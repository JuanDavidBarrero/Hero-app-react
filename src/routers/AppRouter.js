import React, { useContext } from 'react'
import {BrowserRouter as Router, Switch} from "react-router-dom";
import { AuthContext } from '../auth/AuthContex';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboradRoutes } from './DashboradRoutes';

export const AppRouter = () => {
    
    const {user:{logged}} = useContext(AuthContext)
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuth={logged} exact path="/login" component={LoginScreen} />
                    <PrivateRoute isAuth={logged} path="/" component={DashboradRoutes} />
                </Switch>
            </div>
        </Router>
    )
}
