import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes, // Reemplaza Switch
    Route
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';



//Paso 1.5
export const AppRouter = () => {
    //paso 3.18
    const { user } = useContext(AuthContext);
    return (
        <Router>
            {/**Paso 1.6 y 3.17 le ponemos el prives */}
            <Routes>
                <Route
                    path="/login"
                    element={
                        //Paso 3.19
                        <PublicRoute
                            isAuthenticated={user.logged}
                            component={LoginScreen}
                        />
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoute
                            isAuthenticated={user.logged}
                            component={DashboardRoutes}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}
