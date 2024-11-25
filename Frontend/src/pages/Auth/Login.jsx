import React from 'react'
import PasswordInput from '../../components/input/PasswordInput'

export default function Login() {
  return (
    <div className='h-screen bg-cyan-50 overflow-hidden relative'>
      <div className='login-ui-box right-10 -top-40'/>
      <div className='login-ui-box bg-cyan-200 -bottom-40 right-1/2'/>
      <div className='container h-screen flex items-center justify-center px-20 mx-auto'>
        <div className='w-2/4 h-[90vh] flex items-end bg-login-bg-img bg-cover bg-center rounded-lg p-10 z-50'> 
          <div><h4 className='text-5xl text-white font-semibold leading-[58px]'>Capture Your<br/>Journeys</h4>
          <p className='text-[15px] text-white font-semibold leading-6 pr-7 mt-4'>Record your travel experiences and memories in your personal travel joural.</p>
          </div>
          </div>
          <div className='w-2/4 h-[75vh] bg-white rounded-r-lg relative p-16 shadow-lg shadow-cyan-200/20'>
            <form onSubmit={()=>{}}>
              <h4 className='text-2xl font-semibold mb-7'>Login</h4>
              <input type="text" placeholder='Email' className='input-box'/>

              <PasswordInput/>

              <button type='submit' className='btn-primary'>
                Login
              </button>
              <p className='text-xs text-slate-500 text-center my-4'>Or</p>
              <button 
              type="submit"
              className='btn-primary btn-light'
              onClick={()=>{Navigate("/signUp")}}>Create Account</button>
            </form>
          </div>
        
      </div>
    
    </div>
  )
}
