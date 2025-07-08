import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/login'
import StudentDasboard from './Components/Dashboard/StudentDasboard'
import TeacherDashboard from './Components/Dashboard/TeacherDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './Context/AuthProvider'
function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  useEffect(()=> {
   if (authData) {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser)
     setUser(userData.role)
     setLoggedInUserData(userData.data)
    }
   }
  }, [authData])
   const handleLogin = (email, password) => {
      if (authData) {
        const teacherAuthentication = authData?.dataTeacher.find((e)=> email == e.email && password == e.password);
        if (teacherAuthentication) {
       setUser('teacher');
       setLoggedInUserData(teacherAuthentication);
       localStorage.setItem('loggedInUser', JSON.stringify({role: 'teacher', data:teacherAuthentication}));
       return;
        }
        const studentAuthentication = authData?.dataStudent.find((e)=> email == e.email && password == e.password);
        if (studentAuthentication) {
        setUser('student');
        setLoggedInUserData(studentAuthentication);
        localStorage.setItem('loggedInUser', JSON.stringify({role: 'student', data:studentAuthentication}));
        return;
        }
        alert("Invalid credentials..!");
      }
    }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'student' ? <StudentDasboard data={loggedInUserData} changeUser={setUser}  /> : (user == 'teacher' ? <TeacherDashboard changeUser={setUser} data={loggedInUserData} /> : null) }
    </>
  )
}
export default App
