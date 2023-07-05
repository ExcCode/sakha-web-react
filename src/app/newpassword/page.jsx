'use client'
import React from 'react'
import Header from '../../../components/Header'
import BackToLogin from '../../../components/BackToLogin'
import { Button, Form, Input } from 'antd'

const NewPassword = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
  return (
    <div className='flex flex-col justify-between p-[16px] min-h-screen bg-[#F8F8F8]'>
        <Header text='Create New Password'/>
        <div>
        <Form
      form={form}
      name="register"
      onFinish={onFinish}
  
    >
     

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
       <div className='flex flex-col gap-[8px]'>
        <label className='text-[#000] font-[400] text-[14px]'> New Password</label>
       <Input.Password placeholder='************' className='h-[48px] bg-[#fff] rounded-[8px] px-[16px] py-[14px]'/>
       </div>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
       <div className='flex flex-col gap-[8px]'>
        <label className='text-[#000] font-[400] text-[14px]'> Confirm New Password</label>
       <Input.Password placeholder='************' className='h-[48px] bg-[#fff] rounded-[8px] px-[16px] py-[14px]'/>
       </div>
      </Form.Item>
      <Form.Item >
        <Button  htmlType="submit" className='bg-[#669640]  text-[#fff] uppercase font-[900] text-[16px] w-full flex justify-center items-center h-[48px] px-[16px] py-[14px] rounded-[8px]'>
     confirm
        </Button>
      </Form.Item>
      </Form>
        </div>

        <BackToLogin />
      
    </div>
  )
}

export default NewPassword
