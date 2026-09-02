import React,{useContext} from 'react'
import { Link } from 'react-router-dom'

import LoginContext from '../context/Logincontext'

export default function Navbar() {
    let {token, logout} = useContext(LoginContext)

    return (
        <div>
            <Link to='/'>Home</Link>
            {
                token ? (
                    <>
                        <Link to='/add-doctor'>Add Doctor</Link>
                        <Link to='/patients'>Patients</Link>
                        <Link onClick={logout}>LogOut</Link>
                    </>
                ) : (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )
            }
        </div>
    )
}