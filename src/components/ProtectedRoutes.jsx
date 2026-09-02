import React, { Children,useContext } from 'react'

import { Navigate } from 'react-router-dom'

import LoginContext from '../context/Logincontext.jsx'

export default function ProtectedRoutes({children}) {
  const {token} = useContext(LoginContext)

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