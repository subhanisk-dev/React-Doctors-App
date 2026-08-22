import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Doctors() {
    const [doctors, setDoctors] = useState([])
    useEffect(() => { loadDoctors() }, [])
    async function loadDoctors() {
        await axios.get("https://doc-back1.onrender.com/doctors")
            .then((res) => {
                console.log(res.data)
                setDoctors(res.data)
            })
    }
    return (
        <div>
            {
                doctors.map((i)=>(
                    <div key={i.id}>
                        <p>Doctor Name: {i.name}</p>
                        <p>Salary: {i.salary}</p>
                        <p>Gender: {i.gender}</p>
                        <p>Age: {i.age}</p>
                        <p>Specialization: {i.specialization}</p>
                    </div>
                ))
            }
        </div>
    )
}
