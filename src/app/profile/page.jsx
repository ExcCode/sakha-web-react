"use client";
import React, { useState } from "react";
import Header from "../../../components/Header";
import { Button, Avatar, Form, Input, Select, Checkbox, Radio } from "antd";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import flags from 'react-phone-number-input/flags'


const Profile = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  const [value, setValue] = useState('+971');
  const genderOptions = ["Male", "Female"];
  function CustomIcon() {
    return (
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.869 9.63078C4.811 9.57428 4.563 9.36094 4.359 9.1622C3.076 7.99708 0.976 4.95762 0.335 3.36678C0.232 3.12518 0.0139999 2.51437 -9.56413e-08 2.18802C-8.19722e-08 1.8753 0.0720003 1.5772 0.218 1.29274C0.422 0.938139 0.743 0.653677 1.122 0.497808C1.385 0.397467 2.172 0.241597 2.186 0.241597C3.047 0.0857278 4.446 -3.30196e-07 5.992 -2.62618e-07C7.465 -1.98231e-07 8.807 0.0857281 9.681 0.213346C9.695 0.227959 10.673 0.383828 11.008 0.554311C11.62 0.867024 12 1.47784 12 2.13151L12 2.18802C11.985 2.61374 11.605 3.50901 11.591 3.50901C10.949 5.01413 8.952 7.98344 7.625 9.17681C7.625 9.17681 7.284 9.51291 7.071 9.65904C6.765 9.88699 6.386 10 6.007 10C5.584 10 5.19 9.87238 4.869 9.63078"
          fill="#828282"
        />
      </svg>
    );
  }
  return (
    <>
      <div className="flex min-h-screen flex-col  gap-[24px] p-[16px] bg-[#F8F8F8]">
        <Header text="Your Profile Data" />
        <div className="flex flex-col gap-[24px]">
          <div className="flex justify-center relative">
            <Avatar
              shape="square"
              style={{
                backgroundColor: "#D9D9D9",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "59px",
                height: "59px",
                borderRadius: "8px",
              }}
            >
              <Image src="/images/user.svg" width={45} height={45} />
            </Avatar>
            <div className="bg-[#4D4D4D] w-[32px] h-[32px] rounded-full flex justify-center items-center absolute top-[30px] right-[130px]">
              <Image src="/images/camera.svg" width={16.67} height={15} />
            </div>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
          >
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[#000000] font-[400] text-[14px]"
                >
                  Full Name
                  <span className="text-[#93000F] text-[14px] font-[400]">
                    *
                  </span>
                </label>
                <Input
                  placeholder="Type Your Email"
                  className="bg-[#FFFFFF] rounded-[8px] h-[48px] py-[14px] px-[16px] border-[#fff]"
                />
              </div>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[#000000] font-[400] text-[14px]"
                >
                  Your Email
                  <span className="text-[#93000F] text-[14px] font-[400]">
                    *
                  </span>
                </label>
                <Input
                  placeholder="Type Your Email"
                  className="bg-[#FFFFFF] rounded-[8px] h-[48px] py-[14px] px-[16px] border-[#fff]"
                />
              </div>
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <div className="flex flex-col gap-[10px]">
                <label
                  htmlFor=""
                  className="text-[#000000] font-[400] text-[14px]"
                >
                  Phone Number
                  <span className="text-[#93000F] text-[14px] font-[400]">
                    *
                  </span>
                </label>
                {/* <Input
                  placeholder="Type Your Email"
                  className="bg-[#FFFFFF] rounded-[8px] h-[48px] py-[14px] px-[16px] border-[#fff]"
                /> */}
                  <PhoneInput
                   className="bg-[#FFFFFF] rounded-[8px] h-[48px] py-[14px] px-[16px] border-[#fff] flex items-center"
                   flags={flags}
                   defaultCountry="AE"
      value={value}
      onChange={setValue}/>
              </div>
            </Form.Item>

            <div className="flex flex-col gap-[10px]">
              <label className="flex">
                Location <span>*</span>
              </label>
              <div className="flex gap-[8px]">
                <Form.Item className="w-full">
                  <Select
                    defaultValue="Country"
                    suffixIcon={<CustomIcon />}
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      padding: "14px 16px",
                      height: "48px",
                      border: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>

                <Form.Item className="w-full">
                  <Select
                    defaultValue="City"
                    suffixIcon={<CustomIcon />}
                    style={{
                      width: "100%",
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      padding: "14px 16px",
                      height: "48px",
                      border: "none",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <div className="flex flex-col gap-[10px]">
              <label>Gender</label>
              <Radio.Group
                options={genderOptions}
                defaultValue={["Male"]}
                onChange={onChange}
                name="gender"
              />
            </div>
          </Form>
        </div>
      </div>
      <div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
        <Button className="bg-[#669640] text-[#fff] font-[900] text-[16px] uppercase rounded-[8px] w-full px-[16px] py-[14px] h-[48px] flex justify-center items-center">
          continue
        </Button>
      </div>
    </>
  );
};

export default Profile;
