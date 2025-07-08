import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const TeacherDashboard = (props) => {
  return (
    <div className='p-10 h-screen'>
      <Header changeUser={props.changeUser} data={props.data}></Header>
      <CreateTask data={props.data}></CreateTask>
      <AllTask data={props.data}></AllTask>
    </div>
  )
}

export default TeacherDashboard
