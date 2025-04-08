import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component
}) => {
    const location = useLocation();

    // Guardamos la última ruta visitada
    localStorage.setItem('lastPath', location.pathname);

    return isAuthenticated
        ? <Component />
        : <Navigate to="/login" state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.elementType.isRequired, // Cambiado de func a elementType
};