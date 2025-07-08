import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-100 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-200 text-red-800 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-red-800 text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-red-900 mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-red-900 text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-8'>
                <button className='w-full cursor-pointer bg-red-600 text-white hover:bg-red-700 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask
