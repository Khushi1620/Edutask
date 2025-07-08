import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
export const AuthContext =  createContext();
const AuthProvider = ({children}) => {
  const [userData, setUserData] = useState(null);
  useEffect(()=> {
    if(!localStorage.getItem("students")) {
    setLocalStorage();
  }
    const {dataTeacher, dataStudent} = getLocalStorage();
  setUserData({dataTeacher, dataStudent})
  }, [])
  //this may be deleted
   const refreshStudents = () => {
    const {dataTeacher, dataStudent} = getLocalStorage();
    setUserData({dataTeacher, dataStudent});
  }
  return (
    <div>
      {/* ye lagana hai value={userData} */}
      <AuthContext.Provider value={{...userData, refreshStudents}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
