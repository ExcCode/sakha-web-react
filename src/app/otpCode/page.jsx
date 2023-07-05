"use client";
import React from "react";
import Header from "../../../components/Header";
import { Button } from "antd";
import BackToLogin from "../../../components/BackToLogin";

import CustomOtpInput from "../../../components/CustomOtpInput";

const OtpCode = () => {
  return (
    <div className="flex flex-col justify-between p-[16px] bg-[#F8F8F8] min-h-screen">
      <Header text="OTP Sent to " title="ahmedazy.uxui@gmail.com" />

      <div className=" flex flex-col gap-[24px]">
        <CustomOtpInput />
        <Button className="bg-[#669640] flex items-center justify-center h-[48px] px-[16px] py-[14px] rounded-[8px] text-[#fff] uppercase font-[900] text-[16px]">
          verify
        </Button>
      </div>
      <BackToLogin />
    </div>
  );
};

export default OtpCode;
