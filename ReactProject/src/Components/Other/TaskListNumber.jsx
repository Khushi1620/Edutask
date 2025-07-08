import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex flex-nowrap mt-10 justify-between gap-5 screen'>
       <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-200 text-blue-900'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.newTask}</h2>
            <h3 className='text-2xl mt-0.5 font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-green-200 text-green-900'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.completed}</h2>
            <h3 className='text-2xl mt-0.5 font-medium'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-amber-200 text-amber-900'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.active}</h2>
            <h3 className='text-2xl mt-0.5 font-medium'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-red-200 text-red-900'>
            <h2 className='text-3xl font-bold'>{data.taskSummary.failed}</h2>
            <h3 className='text-2xl mt-0.5 font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber
