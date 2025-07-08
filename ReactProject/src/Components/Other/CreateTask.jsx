import React, {useContext, useState} from "react"; // 3:45
import { AuthContext } from '../../Context/AuthProvider'
const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const authData = useContext(AuthContext)


  const submitHandler = (e)=> {
    e.preventDefault();
    console.log("Task created successfully...!!!");
    console.log(taskDate, taskDescription, taskTitle, assignTo, category); 
    const tasks = {taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false};
    const data = JSON.parse(localStorage.getItem('students'));
    data.forEach(function(element) {
     if (assignTo == element.name) {
       element.tasks.push(tasks);
       element.taskSummary.newTask = element.taskSummary.newTask+1;
     }
     localStorage.setItem('students', JSON.stringify(data));
    })
    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
     authData.refreshStudents();
  }
  return (
    <div className="p-5 mt-5 rounded">
      <form onSubmit={(e)=> {
        submitHandler(e)
      }} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm mb-0.5">Task Title</h3>
            <input value={taskTitle} onChange={(e)=> {
              setTaskTitle(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a UI design" />
          </div>
          <div>
            <h3 className="text-sm mb-0.5">Date</h3>
            <input value={taskDate} onChange={(e)=> {
              setTaskDate(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
          </div>
          <div>
            <h3 className="text-sm mb-0.5">Asign to</h3>
            <input value={assignTo} onChange={(e)=>{
              setAssignTo(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employee name" />
          </div>
          <div>
            <h3 className="text-sm mb-0.5">Category</h3>
            <input value={category} onChange={(e)=> {
              setCategory(e.target.value)
            }} className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc" />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm mb-0.5">Description</h3>
          <textarea value={taskDescription} onChange={(e)=> {
            setTaskDescription(e.target.value)
          }} className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" name="" id=""></textarea>
          <button className="bg-emerald-500 cursor-pointer py-4 hover:bg-emerald-600 px-5 rounded-2xl text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask;
