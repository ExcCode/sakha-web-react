'use client'
import React from 'react'
import Header from '../../../components/Header'
import { Button, Input } from 'antd'
import BackToLogin from '../../../components/BackToLogin'

const ResetPassword = () => {
  return (
    <div className='flex flex-col justify-between p-[16px] bg-[#F8F8F8] min-h-screen'>

       <Header text='Reset Your Password'/>
     

        <div className=' flex flex-col gap-[24px]'>
           <label className='text-[#000000] font-[400] text-[14px]'>
            Your Email
           </label>
           <Input placeholder='Type your email'  className='bg-[#fff] border-none px-[16px] py-[14px] rounded-[8px]'/>
           <Button className='bg-[#669640] flex items-center justify-center h-[48px] px-[16px] py-[14px] rounded-[8px] text-[#fff] uppercase font-[900] text-[16px]'>
            reset password
           </Button>

        </div>
 <BackToLogin />
    </div>
  )
}

export default ResetPassword
