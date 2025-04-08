import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

//Paso 3.17
export const PublicRoute = ({
    isAuthenticated,
    component: Component
}) => {
    const location = useLocation();

    return !isAuthenticated
        ? <Component />
        : <Navigate to="/" state={{ from: location }} replace />;
};

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.elementType.isRequired, // Cambiado de `func` a `elementType`
};
