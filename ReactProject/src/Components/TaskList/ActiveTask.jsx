import React, { useContext } from 'react'
import {AuthContext} from '../../Context/AuthProvider'
const ActiveTask = ({data}) => {
    const authData = useContext(AuthContext);

    const handleMarkCompleted = () => {
    const students = JSON.parse(localStorage.getItem("students"));
    students.forEach((student) => {
      const task = student.tasks.find((t) => t.taskTitle === data.taskTitle);
      if (task && task.active) {
        task.active = false;
        task.completed = true;
        student.taskSummary.active -= 1;
        student.taskSummary.completed += 1;
      }
    });
    localStorage.setItem("students", JSON.stringify(students));
    authData.refreshStudents();
  };
   const handleMarkFailed = () => {
    const students = JSON.parse(localStorage.getItem("students"));
    students.forEach((student) => {
      const task = student.tasks.find((t) => t.taskTitle === data.taskTitle);
      if (task && task.active) {
        task.active = false;
        task.failed = true;
        student.taskSummary.active -= 1;
        student.taskSummary.failed += 1;
      }
    });
    localStorage.setItem("students", JSON.stringify(students));
    authData.refreshStudents();
  };


  return (
     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-amber-100 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-amber-200 text-amber-800 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-amber-800 text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-amber-900 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-amber-900 text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-8'>
                <button onClick={handleMarkCompleted} className='bg-green-600 text-white hover:bg-green-700 cursor-pointer rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button onClick={handleMarkFailed} className='bg-red-600 text-white hover:bg-red-700 cursor-pointer rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default ActiveTask
