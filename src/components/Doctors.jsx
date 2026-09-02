import React, { useEffect, useState ,useContext } from 'react'
import axios from 'axios'

import LoginContext from '../context/Logincontext.jsx'

export default function Doctors() {
    const [doctors, setDoctors] = useState([])
    const {token} = useContext(LoginContext)
    
    useEffect(() => { fetchDoctors() }, [])

    async function handDelete(id) {
        await axios.delete(`https://doc-back1.onrender.com/doctors/${id}`)
            .then(res => {
                console.log(res)
                if (res.status === 200)
                    fetchDoctors()
            })
    }
    async function fetchDoctors() {
        await axios.get("https://doc-back1.onrender.com/doctors")
            .then((res) => { setDoctors(res.data) })
    }
    return (
        <div className='container mt-3'>
            <div className='row row-cols-1 row-cols-sm-3 g-4'>
                {
                    doctors.map((i) => (
                        <div className='col' key={i.id}>
                            <div className='card p-2'>
                                <p>Doctor Name: {i.name}</p>
                                <p>Specialization: {i.specialization}</p>
                                {
                                    token && <button
                                        onClick={() => handDelete(i.id)}
                                        className='btn btn-danger'>
                                        Delete
                                    </button>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
