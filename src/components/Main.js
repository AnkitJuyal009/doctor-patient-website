import React from 'react'
import AppointmentDetails from './AppointmentDetails'
import Files from './Files'
import Notes from './Notes'
import PatientDetails from './PatientDetails'

const Main = () => {
  return (
    <div>
        <PatientDetails/>
        <AppointmentDetails/>
        <Notes/>
        <Files/>
    </div>
  )
}

export default Main