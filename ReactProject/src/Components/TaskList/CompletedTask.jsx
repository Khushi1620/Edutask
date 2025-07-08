import React from 'react'

const CompletedTask = ({data}) => {
  return (
     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-100 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-green-200 text-green-800 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-green-800 text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-green-900 mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-green-900 text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-8'>
                <button className='w-full bg-green-600 text-white hover:bg-green-700 cursor-pointer rounded font-medium py-1 px-2 text-xs'>Complete</button>
            </div>
        </div>
  )
}

export default CompletedTask
