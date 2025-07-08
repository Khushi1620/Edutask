import React from 'react'
import ActiveTask from './ActiveTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
     {data.tasks.map((element, idx)=> {
         if(element.active) {
          return <ActiveTask key={idx} data={element}></ActiveTask>
         }
         if (element.newTask) {
          return <NewTask key={idx} data={element}></NewTask>
         }
         if (element.completed) {
          return <CompletedTask key={idx} data={element}></CompletedTask>
         }
         if (element.failed) {
          return <FailedTask key={idx} data={element}></FailedTask>
         }
     })}
    </div>
  )
}

export default TaskList
