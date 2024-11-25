import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function PasswordInput({value,onChange,placeholder}) {

    const [isShowPassword,setIsShowPassword]=useState(false)
    const toggleShowPassword=()=>{
        setIsShowPassword(!isShowPassword)
    }


  return (
    <div className='flex items-start bg-cyan-600/5 px-5  rounded mb-3'>
        <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text":"password"}
        placeholder={placeholder || "Password"}
        className='w-full text-sm bg-transparent py-3 mr-3 rouded outline-none'/>

{     isShowPassword?  ( <FaEye
        size={22}
        className='text-primary cursor-pointer my-2.5'
        onClick={()=>toggleShowPassword()}/>):
        (
            <FaEyeSlash
            size={22}
            className='text-slate-400 cursor-pointer my-2.5'
            onClick={()=>toggleShowPassword()}/>
        )}

    </div>
  )
}
