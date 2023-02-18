import React, { useEffect, useState } from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = () => {
    const [auth, setAuth] = useState(true)
    useEffect(()=>{
        fetch("http://localhost:4000/api/shops/get/auth",{
            credentials: 'include',
            method: 'GET',
            headers: {"Content-Type": "application/json"},
            mode: 'cors'
        })
        .then(async (res)=>{
            if(res.ok){
                const response = await res.json()
                console.log(response)
                console.log(response.auth)
                setAuth(response.auth)
            }

            else{
                const response = await res.json()
                setAuth(response.auth)
            }
        })
    })

    return(
        auth ? <Outlet /> : <Navigate to={"/login"} />
    )
}

export default PrivateRoutes