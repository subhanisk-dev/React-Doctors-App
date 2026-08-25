import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("https://doc-back1.onrender.com/login", { email, password })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert(res.data.message)
                    localStorage.setItem("token",res.data.patient.email)
                    navigate("/")
                }
                else if (res.status === 400) {
                    alert(res.data.message)
                }
                else if (res.status === 401) {
                    alert(res.data.message)
                }
            })
            .catch(err => {
                console.log(err?.response.data.message)
                alert(err?.response.data.message)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name='email'
                placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} /> <br />
            <input type="password" name="password"
                placeholder='Enter Your password' onChange={(e) => setPassword(e.target.value)} /> <br />
            <button>Submit</button>
        </form>
    )
}
