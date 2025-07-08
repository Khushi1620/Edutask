import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e)=> {
      e.preventDefault();
      handleLogin(email, password)
      setEmail('');
      setPassword('');
  }
  return (
    <div className='flex relative items-center justify-center h-screen w-screen'>
      <div className='absolute top-0 left-0 text-sm font-light border'>
        <h1>Demo Login</h1>
        <h1>1.For teachers: teacher1@example.com password: 123</h1>
        <h1>2.For students: student1@example.com password: 123</h1>
      </div>
      <div className='border-2 rounded-xl border-emerald-600 px-10 py-25'>
        <form onSubmit={(e)=> {
          submitHandler(e);
        }} className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e)=> {
             setEmail(e.target.value);
          }} required className='w-100 m-3 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-4 px-6 rounded-full mt-3 placeholder:text-gray-400' type="email" placeholder='Enter your email' />
          <input value={password} onChange={(e)=> {
             setPassword(e.target.value);
          }} required className='w-100 m-3 outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-4 px-6 rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password' />
          <button className='mt-8 text-white border-none outline-none focus:bg-emerald-700 font-bold bg-emerald-600 text-lg py-4 px-8 w-100 cursor-pointer rounded-full placeholder:text-white'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
