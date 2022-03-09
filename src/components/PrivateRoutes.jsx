import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = ({ isAuthenticated }) => {
    return (
        <React.Fragment>
            {isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />}
        </React.Fragment>
    )
}

export default PrivateRoutes;
