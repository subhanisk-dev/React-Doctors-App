import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Patients() {
    const [patients, setPatients] = useState([])
    const [search, setSearch] = useState("")
    const filteredPatients = patients.filter((i) => {
        return i.name.toLowerCase().
        includes(search.toLocaleLowerCase())
    })

    useEffect(() => { loadPatients() }, [])
    async function loadPatients() {
        await axios.get("https://doc-back1.onrender.com/patients")
            .then((res) => {
                console.log("from axios", res.data)
                setPatients(res.data)
            })
    }
    return (
        <div className='container mt-3'>
            <h2>Patients </h2>
            <div className="row">
                <input type="text" name='search'
                    onChange={(e) => setSearch(e.target.value)}
                    className='col-4 p-2 mb-2'
                    placeholder='Search Patient' />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                {
                    filteredPatients.length === 0 ? (
                        <p>Patient Not Found</p>
                    ) : (
                        filteredPatients.map((i) => (
                            <div className="col mb-2" key={i.id}>
                                <div className='card p-3 h-100' >
                                    <p>Patient Name: {i.name}</p>
                                    <p>Disease: {i.disease}</p>
                                    <p>Age: {i.age}</p>
                                    <p>Weight: {i.weight}</p>
                                    <p>Email: {i.email}</p>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}