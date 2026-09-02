import { createContext,useState } from "react";

import { useNavigate } from "react-router-dom";
const LoginContext = createContext()

export default LoginContext

export function Loginprovider({ children }) {
    let token = localStorage.getItem("token")
    const navigate = useNavigate()
    
    function logout() {
        console.log("logout")
        localStorage.removeItem("token")
        navigate('/')
    }
    
    return (
        <LoginContext.Provider value={{token, logout}}>
            {children}
        </LoginContext.Provider>
    )
}