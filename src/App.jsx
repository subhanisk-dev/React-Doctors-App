import React from 'react'
import Navbar from './components/Navbar'
import Doctorcard from './components/Doctorcard'
import Adddoctor from './components/Adddoctor'
import Patients from './components/Patients'
import Doctors from './components/Doctors'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Doctors />} />
          <Route path='/add-doctor' element={<Adddoctor/>} />
          <Route path='/patients' element={<Patients/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
      {/* <Doctorcard name="SUBHANI SHAIK" gender="Male" specialty="Cardiology" />
      <Doctorcard name="PRIYA SHAIK" gender="Female" specialty="Pysiology" />
      <Doctorcard name="THARUN" gender="Female" specialty="Dermatology" /> */}
    </div>
  )
}