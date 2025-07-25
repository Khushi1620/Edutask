import React, { use, useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.dataStudent)
  return (
    <div className='p-5 rounded mt-5'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {authData.dataStudent.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium  w-1/5'>{elem.name}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskSummary.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskSummary.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-400'>{elem.taskSummary.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskSummary.failed}</h5>
        </div>
        })}
        </div>
        
        
    </div>
  )
}

export default AllTask
