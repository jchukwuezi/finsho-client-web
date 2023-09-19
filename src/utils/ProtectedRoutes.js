import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'


const ProtectedRoute = ({ isAllowed, redirectTo="/", children}) => {
    if(!isAllowed){
        return <Navigate to={redirectTo} />
    }

    return children ? children : <Outlet />
}

export default ProtectedRoute