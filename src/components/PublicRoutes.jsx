import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = ({ isAuthenticated }) => {

    return (
        <React.Fragment>
            {!isAuthenticated ? <Outlet /> : <Navigate to={'/'} />}
        </React.Fragment>

    )
}

export default PublicRoutes;
