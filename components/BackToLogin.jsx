import { Button } from 'antd'
import React from 'react'

const BackToLogin = () => {
  return (
    <div className='flex justify-between items-center'>
    <span className='font-[400] text-[14px] text-[#000]'>
    Remembered You Password?
    </span>
    <Button className='uppercase flex justify-center items-center text-[#669640] font-[500] text-[16px] bg-[#EFF4EB] h-[48px] px-[16px] py-[14px] rounded-[8px]'>
     Back to login
    </Button>
 </div>
  )
}

export default BackToLogin
