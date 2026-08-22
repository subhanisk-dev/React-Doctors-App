import React from 'react'
import Navbar from './components/Navbar'
import Doctorcard from './components/Doctorcard'
import Adddoctor from './components/Adddoctor'
import Patients from './components/Patients'
import Doctors from './components/Doctor'

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Adddoctor/> */}
      <Patients/>
      {/* <Doctors/> */}
      {/* <Doctorcard name="SUBHANI SHAIK" gender="Male" specialty="Cardiology" />
      <Doctorcard name="PRIYA SHAIK" gender="Female" specialty="Pysiology" />
      <Doctorcard name="THARUN" gender="Female" specialty="Dermatology" /> */}
    </div>
  )
}