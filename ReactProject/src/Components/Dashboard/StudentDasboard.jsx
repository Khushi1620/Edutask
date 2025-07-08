import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const StudentDasboard = (props) => {
  
  return (
    <div className='p-10 h-screen'>
      <Header changeUser={props.changeUser} data={props.data}></Header>
      <TaskListNumber data={props.data}></TaskListNumber>
      <TaskList data={props.data}></TaskList>
    </div>
  )
}

export default StudentDasboard
