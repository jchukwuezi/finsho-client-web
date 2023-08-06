import React, { useEffect, useState } from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { mainStore } from '../store/store'

const PrivateRoutes = () => {
    const isAuth = mainStore((state) => state.isAuth)


    return(
        isAuth ? <Outlet /> : <Navigate to={"/login"} />
    )
}

export default PrivateRoutes