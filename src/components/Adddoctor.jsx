import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Adddoctor() {
    const navigate= useNavigate()
    const [name, setName] = useState("")
    const [age, setAge] = useState()
    const [gender, setGender] = useState("")
    const [salary, setSalary] = useState()
    const [specialization, setSpecialization] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        const newDoctor = { name, age, gender, salary, specialization }
        console.log(newDoctor)
        axios.post('https://doc-back1.onrender.com/doctors',newDoctor)
        .then((res)=>{
            if(res.status===201){
                alert("Doctor added Successfully")
                navigate("/")
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='Enter Your Name' name='name'
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input type="number" placeholder='Enter Your Age' name='age'
                        onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <select name='gender' onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <input type="number" placeholder='Enter Your Salary' name='salary'
                        onChange={(e) => setSalary(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Enter Your Specialization' name='specialization'
                        onChange={(e) => setSpecialization(e.target.value)} />
                </div>
                <div>
                    <button type='submit'>Add Doctor</button>
                </div>
            </form>
        </div>
    )
}
