import React from 'react'

export default function Doctorcard(props) {
    return (
        <div>
            <p>Doctor Name: {props.name}</p>
            <p>Gender: {props.gender}</p>
            <p>Doctor Specialty: {props.specialty}</p>
        </div>
    )
}
