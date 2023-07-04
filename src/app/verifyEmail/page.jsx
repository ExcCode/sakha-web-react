'use client'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import OTPInput from 'react-otp-input'
import Header from '../../../components/Header'

const VerifyEmail = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="flex min-h-screen flex-col   p-[16px] bg-[#cccccc24] gap-[40px]">
            <Header />

      <div className='flex min-h-screen flex-col  gap-[40px]   '>

      <div className="flex justify-center flex-col items-center gap-[8px]">
        <Image src="/images/logo.png" width={60} height={80} />
        <h1 className="text-[#0B0B0B] text-[24px] font-[900]">
            Verify Your Email
        </h1>
        <p className="text-[#0B0B0B] text-[14px] font-[400] leading-[20px] h-[40px] text-center">
        We’ve sent you a verification link to<span className='font-[700]'>ahmedazy.uxui@gmail.com
        </span>
        </p>
      </div>

      <div className='flex flex-col gap-[16px]'>
      <OTPInput
      containerStyle={
        {
          display:'flex',
          justifyContent:'space-between',
          gap:'10px',
          
          
        }
      }
      inputStyle={
        {
          width:'100%',
          height:'48px',
          background:'#FFFFFF',
          borderRadius:'8px',
          padding:'14px 16px'


        }
      }
      value={otp}
      onChange={setOtp}
      numInputs={4}
      placeholder	={'---'}
      renderInput={(props) => <input {...props} />}
    />
    <div className='flex flex-col text-[12px] font-[900] text-center'>
    <span className=' text-[#000000]'>00:59 sec</span>
        <span className='text-[#828282]'>Send New Code!</span>
    </div>
    <div className='flex flex-col gap-[8px]'>
     
 <Button className='text-[#fff] bg-[#669640] text-[900] text-[16px] rounded-[8px] px-[16px] py-[14px] flex justify-center items-center h-[48px]'>
 OPEN EMAIL APP
 </Button>
    
 <Button className='text-[#669640] bg-[#EFF4EB] text-[500] text-[16px] rounded-[8px] px-[16px] py-[14px] flex justify-center items-center h-[48px]'>
 VERIFY LATER
 </Button>
    
    </div>
      </div>
      </div>
    </div>
  )
}

export default VerifyEmail
