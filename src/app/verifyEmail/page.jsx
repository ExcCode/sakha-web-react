"use client";
import { Button } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import CustomOtpInput from "../../../components/CustomOtpInput";

const VerifyEmail = () => {
  const [timeSendCode, setTimeSendCode] = useState(59);
  const [timerActive, setTimerActive] = useState(true);

  const handleSendNewCodeClick = () => {
    setTimerActive(true);
  };

  useEffect(() => {
    if (timerActive) {
      const timer = setInterval(() => {
        setTimeSendCode((timeSendCode) => {
          if (timeSendCode === 0) {
            setTimerActive(false);
            return 59;
          } else return timeSendCode - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timerActive]);

  let sendNewCodeClass = "text-[#828282]";
  if (!timerActive) {
    sendNewCodeClass = "text-[#2F80ED]";
  }

  return (
    <div className="flex min-h-screen flex-col   p-[16px] bg-[#cccccc24] gap-[40px]">
      <Header />

      <div className="flex min-h-screen flex-col  gap-[40px]   ">
        <div className="flex justify-center flex-col items-center gap-[8px]">
          <Image src="/images/logo.png" width={60} height={80} />
          <h1 className="text-[#0B0B0B] text-[24px] font-[900]">
            Verify Your Email
          </h1>
          <p className="text-[#0B0B0B] text-[14px] font-[400] leading-[20px] h-[40px] text-center">
            We’ve sent you a verification link to{" "}
            <span className="font-[700]">ahmedazy.uxui@gmail.com</span>
          </p>
        </div>

        <div className="flex flex-col gap-[16px]">
          <CustomOtpInput />
          <div className="flex flex-col text-[12px] font-[900] text-center">
            <span className="text-[#000000]">{`00:${timeSendCode} sec`}</span>
            <span className={sendNewCodeClass} onClick={handleSendNewCodeClick}>
              Send New Code!
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <Button className="text-[#fff] bg-[#669640] text-[900] text-[16px] rounded-[8px] px-[16px] py-[14px] flex justify-center items-center h-[48px]">
              OPEN EMAIL APP
            </Button>

            <Button className="text-[#669640] bg-[#EFF4EB] text-[500] text-[16px] rounded-[8px] px-[16px] py-[14px] flex justify-center items-center h-[48px]">
              VERIFY LATER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
