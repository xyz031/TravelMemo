import React from 'react'

import logo from "../assets/images/logo1.png";

import { useNavigate } from 'react-router-dom'
import ProfileInfo from './Cards/ProfileInfo'

export default function Navbar({userInfo}) {
    const navigate=useNavigate()
    const isToken=localStorage.getItem("token")
    const onLogout=()=>{
        localStorage.clear()
        navigate("/login")
    }

  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow sticky top-0 z-10'>
<img src={logo} alt='travel story' className='h-13 w-40'/>
{isToken && <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>}
</div>
  )
}
