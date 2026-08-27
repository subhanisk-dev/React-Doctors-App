import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({children}) {
    let token=localStorage.getItem("token")
  return (
    <div>
      {
        token ?(
            <div>
                {children}
            </div>
        ):(
            <Navigate to='/login' replace></Navigate>
        )
      }
    </div>
  )
}
