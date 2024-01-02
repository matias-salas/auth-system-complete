import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

const PrivateRoute = ({ element: Element }) => {
    const { user } = useContext(AuthContext);
    // const isAuthenticated = true; // Aquí va tu lógica de autenticación

    const isAuthenticated = user ? true : false;
    let location = useLocation();

    return isAuthenticated ? Element : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
