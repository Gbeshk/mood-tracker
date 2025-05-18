"use client";
import Image from "next/image";
import React, { useState } from "react";
import veryhappy from "../../images/icon-very-happy-color.svg";
import happy from "../../images/happy.svg";
import neutral from "../../images/neutral.svg";
import sad from "../../images/icon-sad-color.svg";
import verysad from "../../images/icon-very-sad-color.svg";
import validIcon from "../../images/info-circle.svg";
interface ModalPage1Props {
  modalPage: number;
  setModalPage: React.Dispatch<React.SetStateAction<number>>;
}
export default function ModalPage1({
  modalPage,
  setModalPage,
}: ModalPage1Props) {
  const [selectedMood, setSelectedMood] = useState(0);
  const [valid, setValid] = useState(true);

  return (
    <div>
      {modalPage == 1 && (
        <>
          <h1 className="font-sans font-bold text-[32px] max-ssm:text-[28px] leading-[1.2] tracking-[-0.3px] mt-[36px]">
            How was your mood today?
          </h1>
          <div className="flex flex-col gap-[16px]">
            <div
              onClick={() => {
                setSelectedMood(5);
                setValid(true);
              }}
              className={`flex w-full h-[62px] bg-white mt-[36px] border-[2px] rounded-xl items-center justify-between px-[16px] cursor-pointer ${
                selectedMood === 5 ? "border-[#4865DB]" : "border-[#E0E6FA]"
              }`}
            >
              <div className="flex gap-[16px] items-center">
                <div
                  className={`w-[20px] h-[20px] border-[1.5px] border-[#C7D3F7] rounded-[50%] flex items-center justify-center ${
                    selectedMood === 5 ? "bg-[#4865DB]" : "bg-white"
                  }`}
                >
                  {selectedMood == 5 && (
                    <div className="w-[8px] h-[8px] bg-white rounded-[50%]"></div>
                  )}
                </div>
                <p className="text-[#21214D] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal">
                  Very Happy
                </p>
              </div>
              <Image
                src={veryhappy}
                width={100}
                height={100}
                alt="very happy"
                className="w-[38px] h-[38px]"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSelectedMood(4);
                setValid(true);
              }}
              className={`flex w-full h-[62px] bg-white  border-[2px] rounded-xl items-center justify-between px-[16px] cursor-pointer ${
                selectedMood === 4 ? "border-[#4865DB]" : "border-[#E0E6FA]"
              }`}
            >
              <div className="flex gap-[16px] items-center">
                <div
                  className={`w-[20px] h-[20px] border-[1.5px] border-[#C7D3F7] rounded-[50%] flex items-center justify-center ${
                    selectedMood === 4 ? "bg-[#4865DB]" : "bg-white"
                  }`}
                >
                  {selectedMood == 4 && (
                    <div className="w-[8px] h-[8px] bg-white rounded-[50%]"></div>
                  )}
                </div>
                <p className="text-[#21214D] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal">
                  Happy
                </p>
              </div>
              <Image
                src={happy}
                width={100}
                height={100}
                alt="very happy"
                className="w-[38px] h-[38px]"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSelectedMood(3);
                setValid(true);
              }}
              className={`flex w-full h-[62px] bg-white border-[2px] rounded-xl items-center justify-between px-[16px] cursor-pointer ${
                selectedMood === 3 ? "border-[#4865DB]" : "border-[#E0E6FA]"
              }`}
            >
              <div className="flex gap-[16px] items-center">
                <div
                  className={`w-[20px] h-[20px] border-[1.5px] border-[#C7D3F7] rounded-[50%] flex items-center justify-center ${
                    selectedMood === 3 ? "bg-[#4865DB]" : "bg-white"
                  }`}
                >
                  {selectedMood == 3 && (
                    <div className="w-[8px] h-[8px] bg-white rounded-[50%]"></div>
                  )}
                </div>
                <p className="text-[#21214D] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal">
                  Neutral
                </p>
              </div>
              <Image
                src={neutral}
                width={100}
                height={100}
                alt="very happy"
                className="w-[38px] h-[38px]"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSelectedMood(2);
                setValid(true);
              }}
              className={`flex w-full h-[62px] bg-white  border-[2px] rounded-xl items-center justify-between px-[16px] cursor-pointer ${
                selectedMood === 2 ? "border-[#4865DB]" : "border-[#E0E6FA]"
              }`}
            >
              <div className="flex gap-[16px] items-center">
                <div
                  className={`w-[20px] h-[20px] border-[1.5px] border-[#C7D3F7] rounded-[50%] flex items-center justify-center ${
                    selectedMood === 2 ? "bg-[#4865DB]" : "bg-white"
                  }`}
                >
                  {selectedMood == 2 && (
                    <div className="w-[8px] h-[8px] bg-white rounded-[50%]"></div>
                  )}
                </div>
                <p className="text-[#21214D] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal">
                  Sad
                </p>
              </div>
              <Image
                src={sad}
                width={100}
                height={100}
                alt="very happy"
                className="w-[38px] h-[38px]"
              ></Image>
            </div>
            <div
              onClick={() => {
                setSelectedMood(1);
                setValid(true);
              }}
              className={`flex w-full h-[62px] bg-white  border-[2px] rounded-xl items-center justify-between px-[16px] cursor-pointer ${
                selectedMood === 1 ? "border-[#4865DB]" : "border-[#E0E6FA]"
              }`}
            >
              <div className="flex gap-[16px] items-center">
                <div
                  className={`w-[20px] h-[20px] border-[1.5px] border-[#C7D3F7] rounded-[50%] flex items-center justify-center ${
                    selectedMood === 1 ? "bg-[#4865DB]" : "bg-white"
                  }`}
                >
                  {selectedMood == 1 && (
                    <div className="w-[8px] h-[8px] bg-white rounded-[50%]"></div>
                  )}
                </div>
                <p className="text-[#21214D] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal">
                  Very Sad
                </p>
              </div>
              <Image
                src={verysad}
                width={100}
                height={100}
                alt="very happy"
                className="w-[38px] h-[38px]"
              ></Image>
            </div>
          </div>
          {!valid && (
            <div className="flex items-center gap-2  mt-[16px]">
              <Image
                src={validIcon}
                width={100}
                height={100}
                alt="icon valid"
                className="w-[16px] h-[16px]"
              ></Image>
              <p className="font-[400] text-[15px] leading-[140%] tracking-[-0.3px] font-reddit text-[#E60013]">
                Please select a mood before continuing.
              </p>
            </div>
          )}
          <div
            onClick={() => {
              if (selectedMood == 0) {
                setValid(false);
              } else {
                const x = modalPage + 1;
                setModalPage(x);
                localStorage.setItem("mood", JSON.stringify(selectedMood));
              }
            }}
            className={`flex w-full h-[62px] text-white rounded-xl items-center justify-center px-[16px] cursor-pointer ${
              !valid ? "mt-[16px]" : "mt-[36px]"
            } bg-[#4865DB] font-sans font-semibold text-[20px] leading-[1.4] tracking-normal`}
          >
            Continue
          </div>
        </>
      )}
    </div>
  );
}
