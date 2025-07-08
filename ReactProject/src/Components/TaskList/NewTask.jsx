import React, {useContext} from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const NewTask = ({data}) => {
    const authData = useContext(AuthContext);

  const handleAcceptTask = () => {
    const students = JSON.parse(localStorage.getItem("students"));
    students.forEach((student) => {
      const task = student.tasks.find((t) => t.taskTitle === data.taskTitle);
      if (task && task.newTask) {
        task.newTask = false;
        task.active = true;

        student.taskSummary.newTask -= 1;
        student.taskSummary.active += 1;
      }
    });
    localStorage.setItem("students", JSON.stringify(students));
    authData.refreshStudents();
  };
  return (
     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-100 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm text-blue-800'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-blue-900 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2 text-blue-900'>
                {data.taskDescription}
            </p>
            <div className='mt-8'>
                <button onClick={handleAcceptTask} className='bg-blue-600 text-white w-full cursor-pointer hover:bg-blue-700 rounded font-medium py-1 px-2 text-xs'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask
