"use client";
import React from "react";
import Header from "../../../components/Header";
import { Button, Col, Row } from "antd";
import Image from "next/image";

const Interest = () => {
  const interestItem = [
    {
      img: "/images/Art.svg",
      name: "Art",
    },
    {
      img: "/images/bag.svg",
      name: "",
    },
    {
      img: "/images/Education.svg",
      name: "Education",
    },
    {
      img: "/images/Social.svg",
      name: "Social",
    },
    {
      img: "/images/Environment.svg",
      name: "Environment",
    },
    {
      img: "/images/Infrastructure.svg",
      name: "Infrastructure",
    },
    {
      img: "/images/Disaster.svg",
      name: "Disaster",
    },
    {
      img: "/images/Orphanage.svg",
      name: "Orphanage",
    },
    {
      img: "/images/Humanity.svg",
      name: "Humanity",
    },
    {
      img: "/images/SickChild.svg",
      name: "SickChild",
    },
    {
      img: "/images/Disablility.svg",
      name: "Disablility",
    },
    {
      img: "/images/Others.svg",
      name: "Others",
    },
  ];
  return (
    <div className="bg-[#F8F8F8] flex flex-col min-h-screen justify-between">
      <div className="p-[16px] flex flex-col gap-[10px]">
        <Header text="Select Your Interest" />
        <div className="">
          <Row gutter={[10, 10]}>
            {interestItem.map((item) => {
              return (
                <Col span={8}>
                  <div className="flex justify-center items-center flex-col h-[105px] rounded-[8px] px-[16px] py-[14px] bg-[#fff]">
                    <Image src={item.img} width={60} height={60} />
                    <span>{item.name}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
      <div className="bg-[#fff] rounded-tr-[8px] h-[87px] flex justify-center items-center p-[10px] drop-shadow-[0px_0px_16px_rgba(235,235,235,1)]">
        <Button className="bg-[#669640] text-[#fff] font-[900] text-[16px] uppercase rounded-[8px] w-full px-[16px] py-[14px] h-[48px] flex justify-center items-center">
          save and continue
        </Button>
      </div>
    </div>
  );
};

export default Interest;
