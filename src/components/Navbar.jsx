import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let token = localStorage.getItem("token")
    let navigate = useNavigate()
    function logout() {
        localStorage.removeItem("token")
        navigate("/")
    }
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